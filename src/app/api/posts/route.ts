// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

// // 게시글 목록 조회
// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const page = parseInt(searchParams.get('page') || '1')
//   const limit = parseInt(searchParams.get('limit') || '10')
//   const search = searchParams.get('search') || ''
//   const searchType = searchParams.get('searchType') || 'title'

//   const skip = (page - 1) * limit

//   const where = search
//     ? {
//         [searchType]: {
//           contains: search,
//           mode: 'insensitive' as const,
//         },
//       }
//     : {}

//   try {
//     const [posts, total] = await Promise.all([
//       prisma.post.findMany({
//         where,
//         skip,
//         take: limit,
//         orderBy: { createdAt: 'desc' },
//         select: {
//           id: true,
//           title: true,
//           author: true,
//           views: true,
//           isSecret: true,
//           createdAt: true,
//           _count: {
//             select: { replies: true },
//           },
//         },
//       }),
//       prisma.post.count({ where }),
//     ])

//     return NextResponse.json({
//       posts,
//       pagination: {
//         page,
//         limit,
//         total,
//         totalPages: Math.ceil(total / limit),
//       },
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: '게시글을 불러오는데 실패했습니다.' },
//       { status: 500 }
//     )
//   }
// }

// // 게시글 작성
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { title, content, author, password, isSecret } = body

//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         author,
//         password,
//         isSecret: isSecret || false,
//       },
//     })

//     return NextResponse.json(post, { status: 201 })
//   } catch (error) {
//     return NextResponse.json(
//       { error: '게시글 작성에 실패했습니다.' },
//       { status: 500 }
//     )
//   }
// }