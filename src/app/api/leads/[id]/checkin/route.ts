import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ message: "ID inválido." }, { status: 400 });
  }

  try {
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        dataCheckin: new Date(),
      },
    });

    return NextResponse.json(updatedLead);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ message: "Lead não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ message: "Erro interno." }, { status: 500 });
  }
}
