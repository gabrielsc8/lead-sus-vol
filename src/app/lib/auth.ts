import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib2/auth";
import type { Session } from "next-auth";

export async function requireAdmin(): Promise<Session> {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    throw new Error("Acesso negado"); 
  }

  return session;
}
