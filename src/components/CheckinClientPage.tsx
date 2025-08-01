"use client";

import * as React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { z } from "zod";

// Imports de ícones
import { IconSearch, IconUserCheck, IconClockHour4 } from "@tabler/icons-react";

// Imports da Tabela (TanStack e ShadCN)
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState, 
  HeaderGroup,
  Row,
  Cell,
  Header,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Schema e Tipo para os dados
const leadCheckinSchema = z.object({
  id: z.number(),
  nome: z.string(),
  whatsapp: z.string(),
  dataCheckin: z.string().nullable(),
});

type Lead = z.infer<typeof leadCheckinSchema>;

// Hook customizado para buscar os dados da API
function useLeadsData() {
  const [data, setData] = React.useState<Lead[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    fetch("/api/leads")
      .then(res => res.json())
      .then(json => setData(z.array(leadCheckinSchema).parse(json)))
      .catch(() => toast.error("Falha ao carregar lista."))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
}

// COMPONENTE DE CLIENTE (COM A TABELA INTERATIVA)
export default function CheckinClientPage() {
  const { data, loading, refetch } = useLeadsData();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const handleCheckin = async (id: number) => {
    toast.loading("Realizando check-in...");
    try {
      const res = await fetch(`/api/leads/${id}/checkin`, { method: "PATCH" });
      if (!res.ok) throw new Error("Falha no check-in");
      toast.dismiss();
      toast.success("Check-in realizado com sucesso!");
      refetch();
    } catch (error) {
      toast.dismiss();
      toast.error("Erro ao realizar check-in.");
    }
  };

  // Definição das colunas da tabela
  const columns = React.useMemo<ColumnDef<Lead>[]>(() => [
    { accessorKey: "nome", header: "Nome" },
    { accessorKey: "whatsapp", header: "WhatsApp" },
    {
      accessorKey: "dataCheckin",
      header: "Status",
      cell: ({ row }) => {
        const lead = row.original;
        return lead.dataCheckin ? (
          <span className="flex items-center gap-2 text-green-400 font-semibold">
            <IconUserCheck size={18} /> Presente
          </span>
        ) : (
          <span className="flex items-center gap-2 text-yellow-400">
            <IconClockHour4 size={18} /> Aguardando
          </span>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">Ação</div>,
      cell: ({ row }) => {
        const lead = row.original;
        return (
          <div className="text-right">
            <Button
              size="sm"
              disabled={!!lead.dataCheckin}
              onClick={() => handleCheckin(lead.id)}
              className="bg-gradient-to-r from-[#f34906] to-[#fb349f] text-white disabled:opacity-50 disabled:bg-gray-500"
            >
              Check-in
            </Button>
          </div>
        );
      },
    },
  ], [refetch]);

  // Instância da tabela
  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  
  // Tela de carregamento enquanto os dados da API não chegam
  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <Image 
                src="/favicon.ico"
                alt="Logo Dia da Visão"
                width={250}
                height={100}
                className="w-auto h-auto mb-4"
            />
            <p className="text-lg">Carregando dados...</p>
        </div>
    );
  }
  
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-[#0e142d] p-6 rounded-2xl shadow-lg w-full max-w-6xl">
        <div className="flex justify-center mb-8">
          <Image 
            src="/favicon.ico"
            alt="Logo Dia da Visão"
            width={250}
            height={100}
            className="w-auto h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-white">Check-in do Evento</h1>
          <div className="relative w-full md:w-auto md:min-w-80">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
              placeholder="Buscar por nome ou WhatsApp..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-800/50">
              {table.getHeaderGroups().map((hg: HeaderGroup<Lead>) => (
                <TableRow key={hg.id} className="border-gray-700">
                  {hg.headers.map((h: Header<Lead, unknown>) => (
                    <TableHead key={h.id} className="text-gray-300 font-semibold px-4 py-3">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row: Row<Lead>) => (
                  <TableRow key={row.id} className="border-gray-800 hover:bg-gray-800/40">
                    {row.getVisibleCells().map((cell: Cell<Lead, unknown>) => (
                      <TableCell key={cell.id} className="px-4 py-3">{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center h-48">
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}