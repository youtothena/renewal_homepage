import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import coolsms from 'coolsms-node-sdk';
import {SolapiMessageService} from 'solapi';

// CoolSMS 클라이언트 초기화
const messageService = new SolapiMessageService(
  process.env.NEXT_PUBLIC_COOLSMS_API_KEY!,
  process.env.NEXT_PUBLIC_COOLSMS_API_SECRET!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company, name, contact, content } = body;

    // 1. DB에 문의 내역 저장
    const savedContact = await prisma.contact.create({
      data: {
        company,
        name,
        contact,
        content,
      },
    });

    // 2. 관리자에게 문자 발송 (비동기 처리)
    // DB 저장이 주 목적이므로 문자 발송 실패가 전체 로직을 실패하게 하지 않도록 try-catch 감싸기 가능
    try {
        const textMessage = `[홈페이지 문의 접수]\n- 회사명: ${company}\n- 담당자: ${name}\n- 연락처: ${contact}\n\n내용:\n${content}`;

        console.log('SMS 환경변수 확인:', {
          apiKey: process.env.NEXT_PUBLIC_COOLSMS_API_KEY ? '설정됨' : '❌ 미설정',
          apiSecret: process.env.NEXT_PUBLIC_COOLSMS_API_SECRET ? '설정됨' : '❌ 미설정',
          to: process.env.NEXT_PUBLIC_ADMIN_PHONE_NUMBER || '❌ 미설정',
          from: process.env.NEXT_PUBLIC_COOLSMS_SENDER_NUMBER || '❌ 미설정',
        });
        
        await messageService.sendOne({
            to: process.env.NEXT_PUBLIC_ADMIN_PHONE_NUMBER!, // 알림 받을 관리자 번호
            from: process.env.NEXT_PUBLIC_COOLSMS_SENDER_NUMBER!, // 등록된 발신 번호
            text: textMessage,
            autoTypeDetect: true, // LMS/SMS 자동 감지
        });
        
        console.log('문자 발송 성공');
    } catch (smsError: any) {
      console.error('문자 발송 실패 상세:', JSON.stringify(smsError, null, 2));
        
      if (smsError.code) {
           console.error('CoolSMS Error Code:', smsError.code);
      }
    }

    return NextResponse.json({ 
      success: true, 
      data: savedContact 
    }, { status: 200 });

  } catch (error) {
    console.error('문의 접수 실패:', error);
    return NextResponse.json(
      { error: '문의 접수에 실패했습니다.' }, 
      { status: 500 }
    );
  }
}