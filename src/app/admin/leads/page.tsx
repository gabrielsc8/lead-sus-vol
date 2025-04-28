import { getServerSession } from "next-auth";
import { authOptions } from '@/app/lib2/auth';
import { redirect } from "next/navigation";
import ChartG from "@/app/components/ChartG";
import DataTable from "@/app/components/DataTable";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default async function AdminLeadsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== "admin") {
    return redirect("/login");
  }


  return (
    <div>
    <Navbar />
    <div className="p-6 max-w-7xl mx-auto text-gray-800">
      <ChartG />
        <DataTable />
        <Footer />
    </div>

    </div>
  );
}


