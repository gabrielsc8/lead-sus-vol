import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

const toDateOrNull = (str: string) => {
  if (!str) return null;
  // espera "YYYY-MM" ou "YYYY-MM-DD"
  const full = str.length === 7 ? str + "-01" : str;
  return new Date(full);
};

const ym = (valor: string) => (valor ? valor : null);

  try {
    const lead = await prisma.lead.create({
      data: {
        nome: data.nome,
        whatsapp: data.whatsapp,
        sexo: data.sexo,
        email: data.email,
        voluntario: data.voluntario,
        camiseta: data.camiseta,
        ministerio: data.ministerio,            // array vai direto pro JSON
        batizado: data.batizado,
        membroDesde: ym(data.membroDesde),         // "2024-03"
        voluntarioDesde: ym(data.voluntarioDesde),
        batizadoDesde: ym(data.batizadoDesde),      },
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

// GET: Retorna todos os leads
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
