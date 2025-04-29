// components/Etapa1.tsx
"use client";

import { motion } from "framer-motion";

interface FormData {
  nome: string;
  whatsapp: string;
  sexo: string;
  email: string;
  voluntario: boolean;
  camiseta: string;
  membroDesde: string;
  voluntarioDesde: string;
  ministerio: string;
  batizado: boolean; // "sim" | "nao"
  batizadoDesde: string;
}

interface Etapa1Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onNext: () => void;
}

export function Etapa1({ form, handleChange, onNext }: Etapa1Props) {
  const validateName = (name: string) => /^[A-Za-zÀ-ÿ\s]+$/.test(name);
  const validatePhone = (phone: string) => /^\(\d{2}\)\s?9?\d{4}-\d{4}$/.test(phone);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValid =
    validateName(form.nome) &&
    validatePhone(form.whatsapp) &&
    form.sexo &&
    validateEmail(form.email) &&
    typeof form.voluntario === "boolean";

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").substring(0, 11);
    const match = digits.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    if (!match) return value;
    const [, d1, d2, d3] = match;
    let formatted = "";
    if (d1) formatted += `(${d1}`;
    if (d1.length === 2) formatted += ") ";
    if (d2) formatted += d2;
    if (d3) formatted += `-${d3}`;
    return formatted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-2sm text-gray-400 mb-2">1 → </p>
      <h2 className="text-xl font-regular mb-6 text-gray-800">Primeiro de tudo, precisamos das suas informações de contato.</h2>

      <label className="block text-xl text-gray-800 font-light ">Nome Completo *</label>
      <input
        name="nome"
        placeholder="João da Silva"
        value={form.nome}
        onChange={handleChange}
        className={`mb-10 font-light text-2xl w-full border-b bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none py-2 ${validateName(form.nome) ? 'border-gray-300 focus:border-purple-700 focus:border-b-2' : 'border-red-500'}`}
        required
      />

      <label className="block text-xl font-light text-gray-700 ">WhatsApp *</label>
      <input
        name="whatsapp"
        placeholder="(11) 96123-4567"
        value={form.whatsapp}
        onChange={(e) => {
          const formattedValue = formatPhone(e.target.value);
          handleChange({
            ...e,
            target: {
              ...e.target,
              value: formattedValue,
              name: "whatsapp"
            }
          });
        }}
        className={`mb-10 font-light text-2xl w-full border-b bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none py-2 ${validatePhone(form.whatsapp) ? 'border-gray-300 focus:border-purple-700 focus:border-b-2' : 'border-red-500'}`}
        required
      />

      <label className="block text-xl font-light text-gray-700">Sexo *</label>
      <select
        name="sexo"
        value={form.sexo}
        onChange={handleChange}
        className="mb-10 w-full text-2xl font-light border-b border-gray-300 bg-transparent placeholder-gray-300 text-gray-700 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2 cursor-pointer"
        required
      >
        <option value="">Selecione</option>
        <option value="Masculino">Masculino </option>
        <option value="Feminino">Feminino </option>
      </select>

      <label className="block text-xl font-light text-gray-700">E-mail *</label>
      <input
        name="email"
        placeholder="seuemail@exemplo.com"
        value={form.email}
        onChange={handleChange}
        type="email"
        className={`mb-11 font-light text-2xl w-full border-b bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none py-2 ${validateEmail(form.email) ? 'border-gray-300 focus:border-purple-700 focus:border-b-2' : 'border-red-500'}`}
        required
      />

      <label className="block text-xl font-light text-gray-700">Você já é um voluntário na Comunidade da Fé? *</label>
      <div className="flex gap-6 mb-10 text-gray-700 text-xl">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="voluntario"
            value="true"
            checked={form.voluntario === true}
            onChange={() =>
              handleChange({ target: { name: "voluntario", value: true, type: "radio" } } as any)
            }
          />
          Sim
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="voluntario"
            value="false"
            checked={form.voluntario === false}
            onChange={() =>
              handleChange({ target: { name: "voluntario", value: false, type: "radio" } } as any)
            }
          />
          Não
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
