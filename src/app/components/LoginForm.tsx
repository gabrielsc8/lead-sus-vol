"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Use o useRouter para navegação

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Instancia o router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1. O 'redirect' agora é true (ou omitido, pois é o padrão)
      // O NextAuth usará a URL retornada pelo callback signIn
      const res = await signIn("credentials", {
        email,
        password,
        // O redirecionamento será tratado pelo NextAuth. Se falhar, ele não redireciona.
        redirect: true,
        // O callbackUrl é uma alternativa, mas a lógica no backend é mais segura.
        // Neste caso, o callback signIn do authOptions já define o destino.
      });

      // 2. O erro é tratado se o 'signIn' falhar e retornar para esta página
      // (Isso pode acontecer se o callback signIn retornar 'false')
      // A URL terá um parâmetro de erro.
      // Mas para uma melhor UX, podemos checar o objeto de resposta se usarmos redirect:false
      // Vamos manter a simplicidade e deixar o NextAuth cuidar disso.
      // Se houver um erro, o NextAuth geralmente adiciona um erro à URL.
      // Para simplificar, vamos detectar o erro se a requisição retornar um erro específico.
      // A forma mais robusta é checar o callback da URL se necessário.

    } catch (err) {
      setError("Ocorreu um erro inesperado. Tente novamente.");
      setIsLoading(false);
    }
    
    // Se o código chegar aqui após o signIn, significa que o login falhou
    // pois o sucesso resultaria em um redirecionamento (a página seria descarregada).
    setError("Email ou senha inválidos.");
    setIsLoading(false);
  };

  // Seus estilos (gradientTextStyle, etc.) continuam os mesmos...
  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent";
  const primaryButtonStyle = `w-full flex items-center justify-center font-bold rounded-lg px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#fb349f] bg-gradient-to-r from-[#f34906] to-[#fb349f] text-white hover:brightness-110`;
  const disabledButtonStyle = `w-full flex items-center justify-center font-bold rounded-lg px-8 py-3 bg-gray-600 text-gray-400 cursor-not-allowed`;


  return (
    // Seu JSX continua o mesmo
    <section className="min-h-screen w-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0e142d] shadow-lg border border-gray-800 rounded-2xl p-8 max-w-md"
        >
          <div className="flex justify-center mb-6">
            <Image
              className="w-auto h-10"
              src="/logo2.png"
              alt="logo"
              width={150}
              height={40}
            />
          </div>

          <h1 className={`text-2xl font-bold text-center mb-6 ${gradientTextStyle}`}>
            Acesse seu Painel
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Seu Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-light text-lg w-full border-b bg-transparent placeholder-gray-500 py-2 transition-all duration-300 focus:outline-none focus:border-transparent focus:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus:bg-no-repeat focus:bg-bottom focus:bg-[length:100%_2px] border-gray-600 text-white"
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="font-light text-lg w-full border-b bg-transparent placeholder-gray-500 py-2 transition-all duration-300 focus:outline-none focus:border-transparent focus:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus:bg-no-repeat focus:bg-bottom focus:bg-[length:100%_2px] border-gray-600 text-white"
                required
              />
            </div>
            <div className="text-right">
              <a
                href="https://wa.me/5519999422779"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Esqueci minha senha
              </a>
            </div>

            {error && (
              <p className="text-red-500 bg-red-500/10 border border-red-500/30 text-sm text-center py-2 px-3 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={isLoading ? disabledButtonStyle : primaryButtonStyle}
            >
              {isLoading ? 'Entrando...' : 'Log in'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}