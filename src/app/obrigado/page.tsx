// src/app/obrigado/page.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ObrigadoPage() {
  
  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent";
  const primaryButtonStyle = `inline-block font-bold rounded-lg px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#fb349f] bg-gradient-to-r from-[#f34906] to-[#fb349f] text-white hover:brightness-110`;

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0e142d] p-8 sm:p-12 rounded-2xl shadow-lg flex flex-col items-center max-w-lg w-full"
      >
        <div className="mb-6 h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-r from-[#f34906] to-[#fb349f]">
          <svg className="h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${gradientTextStyle}`}>
          Obrigado!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Sua inscrição foi recebida com sucesso. <br/>
        </p>

        <Link href="/" className={primaryButtonStyle}>
          Voltar para o Início
        </Link>
      </motion.div>
    </main>
  );
}