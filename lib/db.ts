import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()
// use `prisma` in your application to read and write data in your DB