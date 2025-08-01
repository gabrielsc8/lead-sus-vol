import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function PATCH(
  request: Request,
  context: { params: { id: string } } 
) {
  try {
    const id = parseInt(context.params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID inválido." }, { status: 400 });
    }

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        dataCheckin: new Date(),
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