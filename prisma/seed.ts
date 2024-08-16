const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const password = await hash('admin123', 12);  // 12 is salt
  const user = await prisma.user.upsert({
    where: { email: 'mwangimuringi10@gmail.com' },
    update: {},
    create: {
      email: 'mwangimuringi10@gmail.com',
      name: 'username',
      password
    }
  });
  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
