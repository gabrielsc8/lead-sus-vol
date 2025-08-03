// Ex: src/app/lib2/auth.ts

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/app/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const allowedRoles = ["SUPER_ADMIN", "CHECKIN_ADMIN"];
        if (!user || !user.role || !allowedRoles.includes(user.role)) {
          console.error("Tentativa de login falhou: usuário não encontrado ou cargo não permitido.");
          return null;
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          console.error(`Senha incorreta para o usuário: ${credentials.email}`);
          return null;
        }

        console.log(`Login bem-sucedido para: ${user.email} com cargo ${user.role}`);
        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 20 * 60, // 20 minutos
  },
  callbacks: {
    // --- CORREÇÃO APLICADA AQUI ---
    // Este callback agora apenas permite o login se o usuário tiver um cargo.
    // O redirecionamento será feito pelo seu LoginForm no frontend.
    async signIn({ user }) {
      if (user.role) {
        return true; // Permite o login
      }
      return false; // Nega o login se não tiver cargo
    },

    // Os callbacks jwt e session estão corretos e foram mantidos
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Usando variável de ambiente (mais seguro)
  pages: {
    signIn: "/login",
  },
};