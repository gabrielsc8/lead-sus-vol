import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/app/lib/prisma";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // 1. Busca o usuário pelo email
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        // 2. VERIFICAÇÃO CORRIGIDA
        // Lista de cargos que podem tentar fazer login no painel
        const allowedRoles = ["SUPER_ADMIN", "CHECKIN_ADMIN"];
        if (!user || !user.role || !allowedRoles.includes(user.role)) {
          console.error("Tentativa de login falhou: usuário não encontrado ou cargo não permitido.");
          return null;
        }

        // 3. Compara a senha (isso agora será executado corretamente)
        const isValid = await compare(credentials!.password, user.password);
        if (!isValid) {
          console.error(`Senha incorreta para o usuário: ${credentials?.email}`);
          return null;
        }

        // 4. Retorna o usuário se tudo estiver certo
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
    async signIn({ user }) {
      if (user.role === 'SUPER_ADMIN') {
        return '/admin/leads';
      }
      if (user.role === 'CHECKIN_ADMIN') {
        return '/admin/checkin';
      }
      return false;
    },

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

  secret: process.env.NEXTAUTH_SECRET || 'DU923NDU9NWUSAONSD39USI',
  pages: {
    signIn: "/login",
  },
};