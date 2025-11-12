import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// 빌드 타임 안전 처리
const createPrismaClient = () => {
  // DATABASE_URL이 없으면 빌드 타임에 스킵
  if (!process.env.DATABASE_URL) {
    // 빌드 타임에는 더미 객체 반환 (타입 에러 방지)
    return {
      $connect: async () => {},
      $disconnect: async () => {},
    } as unknown as PrismaClient
  }

  try {
    return new PrismaClient()
  } catch (error) {
    console.error('Failed to create Prisma Client:', error)
    return {
      $connect: async () => {},
      $disconnect: async () => {},
    } as unknown as PrismaClient
  }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}