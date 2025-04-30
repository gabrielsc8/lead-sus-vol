// src/app/components/MonthYearSelect.tsx
"use client";

import { ChangeEvent } from "react";

export const MESES = [
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

export const ANOS = Array.from(
  { length: 2025 - 2010 + 1 },
  (_, i) => String(2010 + i)
);

interface Props {
  /** prefixo do campo – ex.: "membro", "voluntario", "batizado"  */
  name: string;
  /** estado do formulário */
  value: string;                 // formato "YYYY-MM" ou ""
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
}

export default function MonthYearSelect({
  name,
  value,
  onChange,
  required = false,
  className = "flex gap-2",
}: Props) {
  const [ano, mes] = value.split("-"); // "" => [""]

  return (
    <div className={className}>
      {/* MÊS */}
      <select
        name={`${name}-mes`}
        value={mes ?? ""}
        onChange={onChange}
        required={required}
        className="input"
      >
        <option value="">Mês</option>
        {MESES.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {/* ANO */}
      <select
        name={`${name}-ano`}
        value={ano ?? ""}
        onChange={onChange}
        required={required}
        className="input"
      >
        <option value="">Ano</option>
        {ANOS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}
