"use client";

import * as React from "react";
import { 
  IconSearch, 
  IconTrash, 
  IconFileExport, 
  IconBrandWhatsapp 
} from "@tabler/icons-react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

// 1. Schema atualizado para incluir os novos campos
const leadSchema = z.object({
  id: z.number(),
  nome: z.string().nullable().default("Sem nome"),
  email: z.string().nullable().optional(),
  whatsapp: z.string().nullable().default("Não informado"),
  sexo: z.string().nullable().optional(),
  dataNascimento: z.string().nullable().optional(),
  estado: z.string().nullable().optional(),
  cidade: z.string().nullable().optional(),
  tipoVoluntario: z.string().nullable().optional(),
  ministerio: z.array(z.string()).nullable().optional(),
  createdAt: z.string(),
});

type Lead = z.infer<typeof leadSchema>;

// Hook customizado para buscar e gerenciar os dados
function useLeadsData() {
  const [data, setData] = React.useState<Lead[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    fetch("/api/leads")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao buscar os dados");
        return res.json();
      })
      .then((json) => {
        const validatedData = z.array(leadSchema).parse(json);
        setData(validatedData);
      })
      .catch((error) => {
        console.error("Erro ao processar leads:", error);
        toast.error("Não foi possível carregar os leads.");
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
}

export default function DataTable() {
  const { data, loading, refetch } = useLeadsData();
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja excluir este lead?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Falha na exclusão");
      toast.success("Lead excluído com sucesso.");
      refetch();
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir o lead.");
    }
  }

  async function handleBulkDelete() {
    const ids = Object.keys(rowSelection).map(Number);
    if (!ids.length) {
      toast.info("Nenhum lead selecionado.");
      return;
    }
    if (!confirm(`Excluir ${ids.length} lead(s) selecionado(s)?`)) return;

    toast.loading("Excluindo leads...");
    const results = await Promise.allSettled(
      ids.map((id) => fetch(`/api/leads/${id}`, { method: "DELETE" }))
    );

    const successCount = results.filter(r => r.status === 'fulfilled' && r.value.ok).length;
    toast.dismiss();
    toast.success(`${successCount} lead(s) excluído(s) com sucesso.`);

    if (successCount < ids.length) {
      toast.error(`${ids.length - successCount} exclusões falharam.`);
    }

    setRowSelection({});
    refetch();
  }

  // 3. Funções de exportação atualizadas
  function handleExportExcel() {
    const dataToExport = table.getRowModel().rows.map(row => row.original);
    const ws = XLSX.utils.json_to_sheet(dataToExport.map(l => ({
        "Nome": l.nome, // Mantive o nome na exportação por ser um dado primário
        "WhatsApp": l.whatsapp,
        "Email": l.email || "-",
        "Status Voluntário": l.tipoVoluntario || "-",
        "Ministérios": l.ministerio?.join(', ') || "-",
        "Estado": l.estado || "-",
        "Cidade": l.cidade || "-",
        "Nascimento": l.dataNascimento ? new Date(l.dataNascimento).toLocaleDateString('pt-BR') : "-",
        "Sexo": l.sexo || "-",
      })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    XLSX.writeFile(wb, "leads_diadavisao.xlsx");
  }

  function handleExportPDF() {
    const doc = new jsPDF();
    const dataToExport = table.getRowModel().rows.map(row => row.original);
    
    autoTable(doc, {
      head: [["Nome", "WhatsApp", "Email", "Status Voluntário", "Ministérios", "Cidade/Estado"]],
      body: dataToExport.map(l => [
        l.nome,
        l.whatsapp,
        l.email || "-",
        l.tipoVoluntario || "-",
        l.ministerio?.join(', ') || "-",
        `${l.cidade || ""}/${l.estado || ""}`,
      ]),
    });
    doc.save("leads_diadavisao.pdf");
  }

  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent font-semibold";

  // 2. Definição das colunas da tabela ATUALIZADA
  const columns = React.useMemo<ColumnDef<Lead>[]>(() => [
    {
      id: "select",
      header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)} aria-label="Selecionar todas as linhas"/>,
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} aria-label="Selecionar linha"/>,
      enableSorting: false,
    },
    { 
      accessorKey: "nome", 
      header: "Nome",
      cell: ({ row }) => <span className={gradientTextStyle}>{row.original.nome}</span>
    },
    { 
      accessorKey: "whatsapp", 
      header: "WhatsApp",
      cell: ({ row }) => <span className="text-gray-400">{row.original.whatsapp}</span>
    },
    { 
      accessorKey: "email", 
      header: "Email",
      cell: ({ row }) => <span className="text-gray-400">{row.original.email || "-"}</span>
    },
    { 
      accessorKey: "tipoVoluntario", 
      header: "Status Voluntário",
      cell: ({ row }) => <span className="text-gray-400 capitalize">{row.original.tipoVoluntario || "-"}</span>
    },
    { 
      accessorKey: "ministerio", 
      header: "Ministérios",
      cell: ({ row }) => <span className="text-gray-400">{row.original.ministerio?.join(', ') || "-"}</span>
    },
    { 
      accessorKey: "estado", 
      header: "Estado",
      cell: ({ row }) => <span className="text-gray-400">{row.original.estado || "-"}</span>
    },
    { 
      accessorKey: "cidade", 
      header: "Cidade",
      cell: ({ row }) => <span className="text-gray-400">{row.original.cidade || "-"}</span>
    },
    { 
      accessorKey: "dataNascimento", 
      header: "Nascimento",
      cell: ({ row }) => {
        const date = row.original.dataNascimento;
        return <span className="text-gray-400">{date ? new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : "-"}</span>;
      }
    },
    { 
      accessorKey: "sexo", 
      header: "Sexo",
      cell: ({ row }) => <span className="text-gray-400">{row.original.sexo || "-"}</span>
    },
    {
      id: "actions",
      header: () => <div className="text-right">Ações</div>,
      cell: ({ row }) => {
        const lead = row.original;
        const phone = (lead.whatsapp || '').replace(/\D/g, "");
        return (
          <div className="flex items-center justify-end gap-2">
            <a href={`https://wa.me/55${phone}`} target="_blank" rel="noopener noreferrer" title="Chamar no WhatsApp" className="text-green-400 hover:text-green-300">
              <IconBrandWhatsapp size={22}/>
            </a>
            <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300 hover:bg-red-900/20" onClick={() => handleDelete(lead.id)} title="Excluir este lead">
              <IconTrash size={20} />
            </Button>
          </div>
        );
      },
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnVisibility, rowSelection, globalFilter },
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row) => row.id.toString(),
  });

  return (
      <div className="bg-[#0e142d] p-6 rounded-2xl shadow-lg w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent">Painel de Leads</h1>
            <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                        className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
                        placeholder="Buscar..."
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </div>
                <Button variant="outline" onClick={handleExportExcel} className="gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700">
                    <IconFileExport size={18}/>
                    Excel
                </Button>
                <Button variant="outline" onClick={handleExportPDF} className="gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700">
                    <IconFileExport size={18}/>
                    PDF
                </Button>
            </div>
        </div>

        {Object.keys(rowSelection).length > 0 && (
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-4">
                <span className="text-sm font-medium">{Object.keys(rowSelection).length} linha(s) selecionada(s)</span>
                <Button variant="destructive" size="sm" onClick={handleBulkDelete} className="gap-2 bg-red-600 hover:bg-red-700">
                    <IconTrash size={16}/>
                    Excluir Selecionados
                </Button>
            </div>
        )}

        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-800/50">
              {table.getHeaderGroups().map((hg) => (
                <TableRow key={hg.id} className="border-gray-700">
                  {hg.headers.map((h) => (
                    <TableHead key={h.id} className="text-gray-300 font-semibold px-4 py-3">
                      {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={columns.length} className="text-center h-48">Carregando...</TableCell></TableRow>
              ) : table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="border-gray-800 hover:bg-gray-800/40">
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-4 py-3">{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow><TableCell colSpan={columns.length} className="text-center h-48">Nenhum resultado encontrado.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4 text-sm text-gray-400">
          <div className="flex-1">
            {Object.keys(rowSelection).length} de {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
          </div>
          <div className="flex items-center gap-4">
            <span>Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 hover:bg-gray-700" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Anterior</Button>
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 hover:bg-gray-700" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Próxima</Button>
            </div>
          </div>
        </div>
      </div>
  );
}