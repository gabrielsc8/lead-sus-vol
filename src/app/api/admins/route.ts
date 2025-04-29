// src/app/api/admins/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/app/lib/prisma';

// POST /api/admins  ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();

    // validações mínimas
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Nome, e-mail e senha são obrigatórios.' },
        { status: 422 }
      );
    }

    // checar duplicidade
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { error: 'E-mail já cadastrado.' },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role: role ?? 'admin',
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Erro interno.' },
      { status: 500 }
    );
  }
}

// opcional: GET para listar (útil na dashboard)
export async function GET() {
  const admins = await prisma.user.findMany({
    where: { role: 'admin' },
    select: { id: true, name: true, email: true, createdAt: true },
  });
  return NextResponse.json(admins);
}

// qualquer método diferente de GET/POST ⇒ 405
export const dynamic = 'force-dynamic'; // se precisar rodar em edge
