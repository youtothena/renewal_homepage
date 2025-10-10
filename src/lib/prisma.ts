import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// DATABASE_URL이 없으면 null 반환 (빌드 시)
const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    console.warn('⚠️ DATABASE_URL이 설정되지 않았습니다. Prisma Client를 초기화하지 않습니다.')
    return null
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}