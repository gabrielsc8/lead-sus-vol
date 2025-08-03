// src/app/admin/leads/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from '@/app/lib2/auth'; // Verifique se este caminho está correto
import { redirect } from "next/navigation";
import ChartG from "@/app/components/ChartG";
import DataTable from "@/app/components/DataTable";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default async function AdminLeadsPage() {
  const session = await getServerSession(authOptions);

  // --- LÓGICA DE PROTEÇÃO ADICIONADA ---
  // Se não houver sessão, redireciona para o login
  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto text-gray-800">
        <ChartG />
        <div className="mt-10"/>
        <DataTable />
        <Footer />
      </div>
    </div>
  );
}