import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.nome || !data.whatsapp) {
      return NextResponse.json(
        { message: "Nome e WhatsApp são obrigatórios." },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        nome: data.nome,
        whatsapp: data.whatsapp,
        sexo: data.sexo,
        email: data.email || null,
        estado: data.estado,
        cidade: data.cidade,
        tipoVoluntario: data.tipoVoluntario,
        ministerio: data.ministerio,
        dataNascimento: data.dataNascimento
          ? new Date(data.dataNascimento)
          : null,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { message: "Erro interno ao processar a inscrição." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return NextResponse.json(
      { message: "Erro interno ao buscar leads." },
      { status: 500 }
    );
  }
}
