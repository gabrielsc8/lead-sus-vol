import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const lead = await prisma.lead.findUnique({
    where: { id },
  });

  if (!lead) {
    return NextResponse.json({ error: "Lead não encontrado" }, { status: 404 });
  }

  return NextResponse.json(lead);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const data = await request.json();

  try {
    const updated = await prisma.lead.update({
      where: { id },
      data,
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao atualizar lead" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  try {
    await prisma.lead.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Lead excluído com sucesso" });
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao excluir lead" },
      { status: 400 }
    );
  }
}
