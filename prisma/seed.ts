import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // Usando bcrypt para salvar senha com segurança

const prisma = new PrismaClient();

async function main() {
  const emailAdmin = "wgabrielsc@icloud.com";

  const existingAdmin = await prisma.user.findUnique({
    where: { email: emailAdmin },
  });

  if (existingAdmin) {
    console.log("Usuário admin já existe.");
    return;
  }

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash("g552398@", 10);

  // Cria o admin
  await prisma.user.create({
    data: {
      name: "Gabriel",
      email: emailAdmin,
      password: hashedPassword,
      role: "ADMIN", // Supondo que você tenha um campo 'role'
    },
  });

  console.log("Usuário admin criado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
