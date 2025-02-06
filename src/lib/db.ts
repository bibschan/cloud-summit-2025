import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

// Handle connection errors
db.$connect()
  .catch((error) => {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }); 