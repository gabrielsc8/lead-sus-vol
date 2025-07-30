"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  Area,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface LeadData {
  createdAt: string;
}

// Chave “Mês Ano” ex: “jul 2025”
const getMonthKey = (d: Date) =>
  d.toLocaleString("pt-BR", { month: "short", year: "numeric" }).replace('.', '');

// Gera os últimos 6 meses
function buildMonthlySeries(months: number) {
  const now = new Date();
  return Array.from({ length: months }, (_, i) => {
    const dt = new Date(now);
    dt.setMonth(now.getMonth() - (months - 1 - i));
    return getMonthKey(dt);
  });
}

export default function ChartG() {
  const [rawData, setRawData] = useState<LeadData[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar leads");
        return res.json();
      })
      .then((data: LeadData[]) => setRawData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const map: Record<string, number> = {};
    rawData.forEach((lead) => {
      const dt = new Date(lead.createdAt);
      const key = getMonthKey(dt);
      map[key] = (map[key] || 0) + 1;
    });
    setCounts(map);
    setTotal(rawData.length);
  }, [rawData]);

  const series = buildMonthlySeries(6);

  const chartData = series.map((month) => ({
    month,
    inscritos: counts[month] ?? 0,
  }));

  // Configuração de estilo do gráfico, agora com a cor do gradiente
  const chartConfig = {
    inscritos: {
      label: "Inscritos",
      color: "#fb349f", // CORRIGIDO: Usando a cor do gradiente
    },
  } as const;
  
  // CORREÇÃO: Evita divisão por zero no cálculo da média
  const monthsWithDataCount = series.filter((m) => (counts[m] || 0) > 0).length;
  const averageMonthly = monthsWithDataCount > 0 ? (total / monthsWithDataCount).toFixed(1) : "0.0";

  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent font-bold";

  return (
    <Card className="bg-[#0e142d] border-gray-800 text-gray-300">
      <CardHeader>
        <CardTitle className="text-2xl bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent">Inscritos para o Dia da Visão</CardTitle>
        <CardDescription className="text-gray-400">
          Últimos 6 meses — <strong className={gradientTextStyle}>{total}</strong> inscritos no total
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-gray-700" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "var(--foreground-muted)" }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <defs>
                <linearGradient id="gradientInscritos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-inscritos)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-inscritos)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="inscritos"
                type="natural"
                stroke="var(--color-inscritos)"
                strokeWidth={2}
                fill="url(#gradientInscritos)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-sm text-gray-400">
        <TrendingUp className="h-4 w-4" />
        <span>Média mensal: {averageMonthly}</span>
      </CardFooter>
    </Card>
  );
}