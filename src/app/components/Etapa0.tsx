// app/components/Etapa0.tsx
"use client";

import { motion } from "framer-motion";

// Definindo as interfaces que o componente espera receber
interface FormData {
  tipoVoluntario: 'existente' | 'interessado' | null;
}
interface Etapa0Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onNext: () => void;
}

export function Etapa0({ form, handleChange, onNext }: Etapa0Props) {
  const isValid = form.tipoVoluntario !== null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-8 font-saira tracking-tight text-[#ebc9bb]">Você já é um voluntário<br></br> na Comunidade da Fé?</h2>
      <div className="flex flex-col space-y-4 mb-10">
        <label className={`p-4 w-full text-lg border rounded-md cursor-pointer transition text-center ${form.tipoVoluntario === 'existente' ? "bg-gradient-to-r from-[#f34906] to-[#fb349f] border-[#0a41c5] text-white" : "border-gray-300 text-[#ebc9bb] hover:border-purple-500"}`}>
          <input 
            type="radio" 
            name="tipoVoluntario" 
            value="existente" 
            className="sr-only" 
            checked={form.tipoVoluntario === 'existente'} 
            onChange={handleChange} 
          />
          Sim, já sou voluntário
        </label>
        <label className={`p-4 w-full text-lg border rounded-md cursor-pointer transition text-center ${form.tipoVoluntario === 'interessado' ? "bg-gradient-to-r from-[#f34906] to-[#fb349f] border-[#0a41c5] text-white" : "border-gray-300 text-[#ebc9bb] hover:border-purple-500"}`}>
          <input 
            type="radio" 
            name="tipoVoluntario" 
            value="interessado" 
            className="sr-only" 
            checked={form.tipoVoluntario === 'interessado'} 
            onChange={handleChange} 
          />
          Não, ainda não sou
        </label>
      </div>
      <button 
        onClick={onNext} 
        disabled={!isValid} 
        className={`flex items-center gap-2 font-bold rounded-md px-6 py-2 transition focus:outline-none cursor-pointer ${isValid ? 'bg-gray-800 hover:bg-gray-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        Próximo <span className="text-sm font-light"> ↵</span>
      </button>
    </motion.div>
  );
}