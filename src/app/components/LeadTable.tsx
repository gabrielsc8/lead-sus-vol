"use client";

import { IconEdit, IconTrash, IconBrandWhatsapp } from "@tabler/icons-react";

interface Lead {
  id: number;
  nome: string;
  email: string | null;
  whatsapp: string;
}

interface LeadTableProps {
  leads: Lead[];
  onEdit: (lead: Lead) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
}

export function LeadTable({ leads, onEdit, onDelete, isLoading }: LeadTableProps) {
  
  // Função interna para confirmar e chamar a exclusão
  const handleDeleteClick = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este lead?")) {
      onDelete(id);
    }
  };

  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden bg-[#0e142d]">
      <table className="w-full text-sm text-left table-auto">
        <thead className="bg-gray-800/50">
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3 text-gray-300 font-semibold">Nome</th>
            <th className="px-4 py-3 text-gray-300 font-semibold">Email</th>
            <th className="px-4 py-3 text-gray-300 font-semibold">WhatsApp</th>
            <th className="px-4 py-3 text-gray-300 font-semibold text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={4} className="text-center h-32 text-gray-400">Carregando...</td>
            </tr>
          ) : leads.length > 0 ? (
            leads.map((lead) => (
              <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-800/40">
                <td className="px-4 py-3 text-gray-200">{lead.nome}</td>
                <td className="px-4 py-3 text-gray-400">{lead.email || "-"}</td>
                <td className="px-4 py-3 text-gray-400">{lead.whatsapp}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                      title="Chamar no WhatsApp"
                    >
                      <IconBrandWhatsapp size={20} />
                    </a>
                    <button
                      onClick={() => onEdit(lead)}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="Editar"
                    >
                      <IconEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(lead.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                      title="Excluir"
                    >
                      <IconTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center h-32 text-gray-400">Nenhum lead encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}