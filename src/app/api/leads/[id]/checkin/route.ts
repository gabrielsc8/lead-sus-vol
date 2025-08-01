// src/app/api/leads/[id]/checkin/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/lib2/auth';
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Função para lidar com a requisição de check-in
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID inválido." }, { status: 400 });
    }

    // Atualiza o lead no banco de dados, definindo a data de check-in
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        dataCheckin: new Date(), // Define a data e hora atuais
      },
    });

    return NextResponse.json(updatedLead, { status: 200 });

  } catch (error: any) {
    console.error("Erro ao fazer check-in:", error);
    if (error.code === 'P2025') {
      return NextResponse.json({ message: "Lead não encontrado." }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}