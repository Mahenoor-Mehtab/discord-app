import { PrismaClient } from "@/generated/prisma";

// Prevent multiple instances in development (Next.js hot reload)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

// In development, attach the instance to the global object
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
