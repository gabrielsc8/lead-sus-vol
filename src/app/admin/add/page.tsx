// src/app/admin/add/page.tsx
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib2/auth';
import { redirect } from 'next/navigation';
import AdminForm from '@/app/admin/add/AdminForm';
export default async function AddAdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'SUPER_ADMIN') {
    redirect('/login');
  }
  return <AdminForm />;
}
