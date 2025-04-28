"use client";

import { useEffect, useRef, useState } from "react";
import { Etapa1 } from "@/app/components/Etapa1";
import { Etapa2 } from "@/app/components/Etapa2";
import { AnimatePresence } from "framer-motion";

export default function Formulario() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    sexo: "",
    voluntario: false,
    camiseta: "",
    tipoAula: "",
    membroDesde: "",
    voluntarioDesde: "",
    ministerio: "",
    batizado: false,
    batizadoDesde: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const name = target.name;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
  
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (res.ok) {
        console.log("Lead enviado!");
      } else {
        console.error("Erro ao enviar lead");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div ref={ref} className="p-6 max-w-xl mx-auto text-white">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Etapa1
              key="etapa1"
              form={form}
              handleChange={handleChange}
              onNext={() => setStep(1)}
            />
          )}
          {step === 1 && (
            <Etapa2
              key="etapa2"
              form={form}
              handleChange={handleChange}
              onBack={() => setStep(0)}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
      );
}
