import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '8');
    const skip = (page - 1) * limit;

    const [galleries, total] = await Promise.all([
      prisma.gallery.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        // select 제거 - 전체 객체 가져오기
      }),
      prisma.gallery.count(),
    ]);

    // 필요한 필드만 매핑하여 응답
    const mappedGalleries = galleries.map(g => ({
      id: g.id,
      title: g.title,
      images: g.images,
      location: (g as any).location,
      category: (g as any).category,
      status: (g as any).status,
      createdAt: g.createdAt,
    }));

    return NextResponse.json({
      galleries: mappedGalleries,
      total,
      page,
      limit,
      hasMore: skip + galleries.length < total,
    });
  } catch (error) {
    console.error('갤러리 조회 실패:', error);
    return NextResponse.json(
      { error: '갤러리 조회에 실패했습니다.' },
      { status: 500 }
    );
  }
}