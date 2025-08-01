import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib2/auth"; // Verifique se o caminho para suas authOptions está correto

// Importa o componente de cliente que contém a tabela
import CheckinClientPage from "@/components/CheckinClientPage";

export default async function AdminCheckinPage() {
  const session = await getServerSession(authOptions);

  // Array com as roles permitidas para esta página
  const allowedRoles = ["SUPER_ADMIN", "CHECKIN_ADMIN"];

  // LÓGICA DE ACESSO: Redireciona se não houver sessão ou se a role não estiver na lista de permitidas
  if (!session || !allowedRoles.includes(session.user?.role)) {
    return redirect("/login");
  }

  // Se a verificação passar, renderize o conteúdo da página
  return <CheckinClientPage />;
}