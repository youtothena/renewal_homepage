import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

interface MySQLData {
  notices: any[]
  posts: any[]
  inquiries: any[]
  galleries: any[]
  popups: any[]
  imageFiles: any[]
}

async function importData() {
  console.log('🔄 Supabase로 데이터 임포트 시작...\n')

  const dataPath = path.join(__dirname, 'mysql-data.json')
  const data: MySQLData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

  try {
    // 1. 관리자 계정 생성
    console.log('👤 관리자 계정 생성...')
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    const admin = await prisma.user.upsert({
      where: { email: 'admin@sukyung.com' },
      update: {},
      create: {
        email: 'admin@sukyung.com',
        password: hashedPassword,
        name: '관리자',
        role: 'SUPER_ADMIN',
      },
    })
    console.log('✅ 관리자 계정 생성 완료\n')

    // 2. 공지사항 임포트
    console.log('📢 공지사항 임포트...')
    let noticeCount = 0
    for (const notice of data.notices || []) {
      try {
        await prisma.notice.create({
          data: {
            title: notice.title || '제목 없음',
            content: notice.ct || '',
            isPinned: notice.top === 1,
            views: notice.count || 0,
            createdAt: notice.wday ? new Date(notice.wday) : new Date(),
          }
        })
        noticeCount++
      } catch (error: any) {
        console.error(`⚠️  공지사항 임포트 실패 (ID: ${notice.no}):`, error.message)
      }
    }
    console.log(`✅ 공지사항: ${noticeCount}/${data.notices?.length || 0}개 완료\n`)

    // 3. 질문과 답변 임포트
    console.log('💬 질문과 답변 임포트...')
    let postCount = 0
    const postMapping: Record<number, string> = {} // MySQL ID -> Prisma UUID 매핑
    
    for (const post of data.posts || []) {
      try {
        const createdPost = await prisma.post.create({
          data: {
            title: post.title || '제목 없음',
            content: post.ct || '',
            author: post.name || '익명',
            password: post.pw || null,
            isSecret: post.openYN === 1,
            views: post.count || 0,
            createdAt: post.wday ? new Date(post.wday) : new Date(),
            userId: admin.id,
          }
        })
        postMapping[post.no] = createdPost.id
        postCount++
      } catch (error: any) {
        console.error(`⚠️  게시글 임포트 실패 (ID: ${post.no}):`, error.message)
      }
    }
    console.log(`✅ 질문과 답변: ${postCount}/${data.posts?.length || 0}개 완료\n`)

    // 4. 온라인 문의 임포트
    console.log('📧 온라인 문의 임포트...')
    let inquiryCount = 0
    for (const inquiry of data.inquiries || []) {
      try {
        await prisma.inquiry.create({
          data: {
            name: inquiry.name || '익명',
            email: inquiry.email || 'unknown@example.com',
            phone: inquiry.tel || inquiry.phone || '000-0000-0000',
            company: inquiry.company || null,
            message: inquiry.ct || inquiry.message || '',
            status: 'PENDING',
            createdAt: inquiry.wday ? new Date(inquiry.wday) : new Date(),
          }
        })
        inquiryCount++
      } catch (error: any) {
        console.error(`⚠️  문의 임포트 실패 (ID: ${inquiry.no}):`, error.message)
      }
    }
    console.log(`✅ 온라인 문의: ${inquiryCount}/${data.inquiries?.length || 0}개 완료\n`)

    // 5. 갤러리 임포트
    console.log('🖼️  갤러리 임포트...')
    let galleryCount = 0
    for (const gallery of data.galleries || []) {
      try {
        const images: string[] = []
        if (gallery.file1) images.push(gallery.file1)
        if (gallery.file2) images.push(gallery.file2)
        if (gallery.file3) images.push(gallery.file3)

        await prisma.gallery.create({
          data: {
            title: gallery.title || '제목 없음',
            content: gallery.ct || null,
            images: images,
            views: gallery.count || 0,
            createdAt: gallery.wday ? new Date(gallery.wday) : new Date(),
            userId: admin.id,
          }
        })
        galleryCount++
      } catch (error: any) {
        console.error(`⚠️  갤러리 임포트 실패 (ID: ${gallery.no}):`, error.message)
      }
    }
    console.log(`✅ 갤러리: ${galleryCount}/${data.galleries?.length || 0}개 완료\n`)

    // 6. 팝업 임포트
    console.log('🎯 팝업 임포트...')
    let popupCount = 0
    for (const popup of data.popups || []) {
      try {
        await prisma.popup.create({
          data: {
            title: popup.title || '팝업',
            imageUrl: popup.file1 || '/images/popup-default.jpg',
            link: popup.link || null,
            posX: popup.pos_x || 0,
            posY: popup.pos_y || 100,
            startDate: popup.s_day ? new Date(popup.s_day) : new Date(),
            endDate: popup.e_day ? new Date(popup.e_day) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            isActive: popup.top === 1,
          }
        })
        popupCount++
      } catch (error: any) {
        console.error(`⚠️  팝업 임포트 실패 (ID: ${popup.no}):`, error.message)
      }
    }
    console.log(`✅ 팝업: ${popupCount}/${data.popups?.length || 0}개 완료\n`)

    console.log('🎉 모든 데이터 임포트 완료!')
    console.log('\n📊 최종 통계:')
    console.log(`   - 공지사항: ${noticeCount}개`)
    console.log(`   - 질문과답변: ${postCount}개`)
    console.log(`   - 온라인문의: ${inquiryCount}개`)
    console.log(`   - 갤러리: ${galleryCount}개`)
    console.log(`   - 팝업: ${popupCount}개`)

  } catch (error) {
    console.error('❌ 임포트 중 오류 발생:', error)
  } finally {
    await prisma.$disconnect()
  }
}

importData()