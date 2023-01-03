import { prisma } from "@acme/db";

const main = async () => {
  const data = await prisma.showcase.findMany();

  console.log(data);
};

main();
