import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 관리자 계정 생성
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

  console.log('✅ 관리자 계정 생성:', admin)

  // 샘플 공지사항
  const notice = await prisma.notice.create({
    data: {
      title: '서경산업 홈페이지 리뉴얼 안내',
      content: '서경산업 홈페이지가 새롭게 단장했습니다. 많은 이용 부탁드립니다.',
      isPinned: true,
    },
  })

  console.log('✅ 샘플 공지사항 생성:', notice)

  // 샘플 갤러리
  const gallery = await prisma.gallery.create({
    data: {
      title: '논슬립 시공 사례',
      content: '고급 아파트 계단 논슬립 시공',
      images: ['/images/gallery/sample1.jpg'],
      userId: admin.id,
    },
  })

  console.log('✅ 샘플 갤러리 생성:', gallery)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })