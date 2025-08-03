"use client";

import { motion } from "framer-motion";

const ministeriosDisponiveis = [
  "Worship", "Integração", "V.I.P", "Kids", "Creative", "Parking", "Teens", "Rdk Brave",
  "Lounge", "Connect", "Produção", "Cerimonial", "Campus Online", "Casais", "Clínica Da Alma",
  "Baby", "Coral", "Eventos", "Store", "Mulheres de Fé", "Central",
];

interface FormData {
  ministerio: string[];
}
interface Etapa2Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean; 
}

export function Etapa2({ form, handleChange, onBack, onSubmit, isSubmitting }: Etapa2Props) {
  const isValid = form.ministerio.length > 0;

  // --- ESTILOS ---
  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent";
  
  // Estilos para Botões (reutilizados da Etapa 1)
  const primaryButtonStyle = `w-full md:w-auto flex items-center justify-center gap-2 font-bold rounded-lg px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#fb349f] bg-gradient-to-r from-[#f34906] to-[#fb349f] text-white hover:brightness-110`;
  const disabledButtonStyle = `w-full md:w-auto flex items-center justify-center gap-2 font-bold rounded-lg px-8 py-3 bg-gray-600 text-gray-400 cursor-not-allowed`;
  const secondaryButtonStyle = `w-full md:w-auto font-semibold py-3 px-8 rounded-lg text-gray-300 hover:text-white transition-all bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {/* --- CABEÇALHO --- */}
      <div className="text-center mb-10">
        <p className={`font-bold text-lg ${gradientTextStyle}`}>ETAPA 2 de 2</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-100">Ministérios que você serve</h2>
        <p className="text-gray-400 mt-2">Selecione um ou mais ministérios em que você já atua.</p>
      </div>

      {/* --- LISTA DE MINISTÉRIOS COM CHECKBOXES CUSTOMIZADOS --- */}
      <div className="space-y-6">
        <label className="block text-xl font-semibold text-gray-300 mb-5">Selecione os ministérios *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5">
          {ministeriosDisponiveis.map((min) => (
            <label key={min} className="flex items-center gap-3 cursor-pointer group">
              {/* O input real fica escondido, mas funcional. O 'peer' é a chave. */}
              <input
                type="checkbox"
                id={min}
                name="ministerio"
                value={min}
                className="sr-only peer"
                checked={form.ministerio.includes(min)}
                onChange={handleChange}
              />

              {/* A bolinha customizada */}
              <div className="relative h-6 w-6 rounded-full border-2 border-gray-500 bg-gray-700 transition-all duration-200 group-hover:border-gray-400 peer-checked:border-transparent peer-checked:bg-gradient-to-r from-[#f34906] to-[#fb349f]">
                {/* O ícone de 'check' que aparece quando selecionado */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              {/* O texto do ministério, que também muda de estilo */}
              <span className="text-gray-300 transition-all duration-200 group-hover:text-white peer-checked:font-semibold peer-checked:bg-gradient-to-r peer-checked:from-[#f34906] peer-checked:to-[#fb349f] peer-checked:bg-clip-text peer-checked:text-transparent">
                {min}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* --- BOTÕES DE NAVEGAÇÃO --- */}
      <div className="flex flex-col-reverse md:flex-row justify-between mt-12 gap-4">
        <button onClick={onBack} className={secondaryButtonStyle}>
          Voltar
        </button>
        
        <button
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className={!isValid || isSubmitting ? disabledButtonStyle : primaryButtonStyle}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Inscrição'}
        </button>
      </div>
    </motion.div>
  );
}