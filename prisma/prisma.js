import { PrismaClient } from "@prisma/client";

let prisma;

// established prisma client
if (process.env.NODE.ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
