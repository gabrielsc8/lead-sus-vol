/* eslint-disable react/jsx-key */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ---------- constantes de mês e ano ---------- */
const MESES = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

// gera anos de 2010 até o ano corrente
const currentYear = new Date().getFullYear();
const ANOS = Array.from(
  { length: currentYear - 2010 + 1 },
  (_, i) => String(2010 + i)
);

/* ---------- tipagens ---------- */
interface FormData {
  nome: string;
  whatsapp: string;
  sexo: string;
  email: string;
  voluntario: boolean;
  camiseta: string;
  membroDesde: string;      // YYYY-MM ou ""
  voluntarioDesde: string;  // YYYY-MM ou ""
  ministerio: string[];
  batizado: boolean;
  batizadoDesde: string;    // YYYY-MM ou ""
}

interface Etapa2Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onBack: () => void;
  onSubmit: () => Promise<void> | void;
}

const ministeriosDisponiveis = [
  "Worship", "Integração", "V.I.P", "Kids", "Creative", "Parking", "Teens", "RdkBrave",
  "Lounge", "Connect", "Produção", "Cerimonial", "Campus Online", "Casais", "Clínica Da Alma",
  "Baby", "Coral", "Eventos", "Store",
];

/* ---------- helpers ---------- */
const buildYM = (ano: string, mes: string) => `${ano}-${mes}`;

/* ---------- componente ---------- */
export function Etapa2({ form, handleChange, onBack, onSubmit }: Etapa2Props) {
  const [loading, setLoading] = useState(false);

  const isValid =
    !!form.membroDesde &&
    (form.voluntario
      ? (form.voluntarioDesde && form.ministerio.length > 0 && (!form.batizado || (form.batizado && form.batizadoDesde)))
      : (!form.batizado || (form.batizado && form.batizadoDesde)));

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({
      target: { name: "batizado", value: e.target.value === "true" },
    } as any);
  };

  const toggleMinisterio = (value: string) => {
    const updated = form.ministerio.includes(value)
      ? form.ministerio.filter((m) => m !== value)
      : [...form.ministerio, value];

    handleChange({ target: { name: "ministerio", value: updated } } as any);
  };

  /* ---- seletor com “tabela” Mês / Ano ---- */
  const handleMonthYear = (
    campo: keyof Pick<FormData, "membroDesde" | "voluntarioDesde" | "batizadoDesde">,
    tipo: "mes" | "ano",
    valor: string
  ) => {
    const [anoAtual, mesAtual] = (form[campo] || "").split("-");
    const novoAno = tipo === "ano" ? valor : anoAtual;
    const novoMes = tipo === "mes" ? valor : mesAtual;
    handleChange({ target: { name: campo, value: buildYM(novoAno, novoMes) } } as any);
  };

  const renderSelectYM = (
    campo: keyof Pick<FormData, "membroDesde" | "voluntarioDesde" | "batizadoDesde">,
    required = false
  ) => {
    const [ano, mes] = (form[campo] || "").split("-");
    return (
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Mês</span>
          <select
            value={mes || ""}
            onChange={(e) => handleMonthYear(campo, "mes", e.target.value)}
            required={required}
            className="w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">–</option>
            {MESES.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Ano</span>
          <select
            value={ano || ""}
            onChange={(e) => handleMonthYear(campo, "ano", e.target.value)}
            required={required}
            className="w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">–</option>
            {ANOS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-2sm text-gray-400 mb-2">2 →</p>
      <h2 className="text-xl font-regular mb-6 text-gray-800">
        Agora queremos saber um pouco da sua caminhada com Deus.
      </h2>

      {/* MEMBRO DESDE */}
      <label className="block text-xl font-light text-gray-700">Membro desde *</label>
      {renderSelectYM("membroDesde", true)}

      <label className="block text-xl font-light text-gray-700 mb-2">É batizado? *</label>
      <div className="flex gap-6 mb-6 text-gray-700 text-xl">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="batizado"
            value="true"
            checked={form.batizado === true}
            onChange={handleRadioChange}
          />
          Sim
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="batizado"
            value="false"
            checked={form.batizado === false}
            onChange={handleRadioChange}
          />
          Não
        </label>
      </div>

      {/* Se marcou “Sim”, mostra o Batizado desde */}
      {form.batizado && (
        <>
          <label className="block text-xl font-light text-gray-700">Batizado desde *</label>
          {renderSelectYM("batizadoDesde", true)}
        </>
      )}

      {/* BLOCO PARA VOLUNTÁRIO */}
      {form.voluntario && (
        <>
          <label className="block text-xl font-light text-gray-700">Voluntário desde *</label>
          {renderSelectYM("voluntarioDesde", true)}

          {/* CAMISETA */}
          <label className="block text-xl font-light text-gray-700">Tamanho da camiseta *</label>
          <select
            name="camiseta"
            value={form.camiseta}
            onChange={handleChange}
            className="mb-8 w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-xl font-light text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          >
            <option value="">Selecione</option>
            <option value="PP">PP</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>

          {/* MINISTÉRIOS */}
          <label className="block text-xl font-light text-gray-700">Ministérios que serve *</label>
          <div className="grid grid-cols-2 gap-2 mb-8">
            {ministeriosDisponiveis.map((min) => (
              <label key={min} className="flex items-center gap-2 text-gray-700 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={form.ministerio.includes(min)}
                  onChange={() => toggleMinisterio(min)}
                />
                {min}
              </label>
            ))}
          </div>
        </>
      )}


      {/* BOTÕES */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Voltar
        </button>

        <button
          onClick={async () => {
            if (loading || !isValid) return;
            setLoading(true);
            await onSubmit();
            setLoading(false);
          }}
          disabled={!isValid || loading}
          className={`w-1/2 font-semibold rounded-2xl py-3 px-5 transition ${
            !isValid || loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </motion.div>
  );
}
