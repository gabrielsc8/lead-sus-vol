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

// chave “Mês Ano” ex: “abr 2025”
const getMonthKey = (d: Date) =>
  d.toLocaleString("pt-BR", { month: "short", year: "numeric" });

// gera últimos 6 meses consecutivos
function buildMonthlySeries(months: number) {
  const now = new Date();
  return Array.from({ length: months }, (_, i) => {
    const dt = new Date(now);
    dt.setMonth(now.getMonth() - (months - 1 - i));
    return getMonthKey(dt);
  });
}

export default function LeadsAreaChart() {
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
    let tot = 0;
    rawData.forEach((lead) => {
      const dt = new Date(lead.createdAt);
      const key = getMonthKey(dt);
      map[key] = (map[key] || 0) + 1;
      tot++;
    });
    setCounts(map);
    setTotal(tot);
  }, [rawData]);

  const series = buildMonthlySeries(6); // últimos 6 meses consecutivos

  const chartData = series.map((month) => ({
    month,
    inscritos: counts[month] ?? 0,
  }));

  const chartConfig = {
    inscritos: {
      label: "Inscritos",
      color: "#6b3fa0",
    },
  } as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-800">Inscritos para o Dia da Visão</CardTitle>
        <CardDescription>
          Últimos 6 meses — <strong>{total}</strong> inscritos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--foreground)" }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              <defs>
                <linearGradient
                  id="gradientInscritos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--color-inscritos)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-inscritos)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="inscritos"
                type="natural"
                stroke="var(--color-inscritos)"
                fill="url(#gradientInscritos)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-sm">
        <TrendingUp className="h-4 w-4 text-gray-800" />
        <span className="text-gray-800">
          Média mensal:{" "}
          {(total / series.filter((m) => counts[m] > 0).length).toFixed(1)}
        </span>
      </CardFooter>
    </Card>
  );
}
