import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// --- FUNÇÃO PARA CRIAR UM NOVO LEAD (POST) ---
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação dos campos obrigatórios
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
        email: data.email || null, // Permite que o e-mail seja opcional
        estado: data.estado,
        cidade: data.cidade,
        tipoVoluntario: data.tipoVoluntario,
        ministerio: data.ministerio,
        dataNascimento: data.dataNascimento ? new Date(data.dataNascimento) : null,
      },
    });

    return NextResponse.json(lead, { status: 201 });

  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { message: "Ocorreu um erro interno ao processar sua inscrição." },
      { status: 500 }
    );
  }
}


// --- FUNÇÃO PARA LISTAR TODOS OS LEADS (GET) ---
// (Esta função estava faltando, causando o erro 405)
export async function GET(request: Request) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor ao buscar leads." },
      { status: 500 }
    );
  }
}