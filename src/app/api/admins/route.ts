import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
// Corrigi o import do Prisma para o caminho que você usou no schema
import { prisma } from '@/app/lib/prisma'; 

// POST /api/admins  ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: 'Todos os campos, incluindo o cargo, são obrigatórios.' },
        { status: 422 } // Unprocessable Entity
      );
    }
    
    const allowedRoles = ['SUPER_ADMIN', 'CHECKIN_ADMIN'];
    if (!allowedRoles.includes(role)) {
        return NextResponse.json(
            { error: 'Cargo inválido.' },
            { status: 400 } // Bad Request
        );
    }

    // Checar duplicidade de e-mail
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { error: 'E-mail já cadastrado.' },
        { status: 409 } // Conflict
      );
    }

    // Hashear a senha
    const hashed = await bcrypt.hash(password, 12);

    // 3. Criar o usuário com o cargo (role) vindo diretamente da requisição
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role: role, // Usa o cargo enviado pelo formulário
      },
    });

    return NextResponse.json({ message: 'Administrador criado com sucesso!' }, { status: 201 });
  } catch (err) {
    console.error("ERRO NA API /api/admins:", err);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

// GET /api/admins  ────────────────────────────────────────────────
export async function GET() {
  try {
    const admins = await prisma.user.findMany({
      where: {
        OR: [
          { role: 'SUPER_ADMIN' },
          { role: 'CHECKIN_ADMIN' },
        ],
      },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });
    return NextResponse.json(admins);
  } catch (err) {
    console.error("ERRO NA API GET /api/admins:", err);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';