"use client";

// 1. Importe o useCallback
import { useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { Etapa0 } from "../components/Etapa0";
import { Etapa1 } from "../components/Etapa1";
import { Etapa2 } from "../components/Etapa2";

interface FormData {
  nome: string;
  dataNascimento: string;
  sexo: string;
  whatsapp: string;
  email: string;
  estado: string;
  cidade: string;
  tipoVoluntario: 'existente' | 'interessado' | null;
  ministerio: string[];
}

export default function FormularioPage() {
  const [etapa, setEtapa] = useState(0);
  const [form, setForm] = useState<FormData>({
    nome: "",
    dataNascimento: "",
    sexo: "",
    whatsapp: "",
    email: "",
    estado: "",
    cidade: "",
    tipoVoluntario: null,
    ministerio: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // 2. Envolva a função handleChange com useCallback
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => {
        const ministeriosAtuais = prev.ministerio;
        if (checked) {
          return { ...prev, ministerio: [...ministeriosAtuais, value] };
        } else {
          return { ...prev, ministerio: ministeriosAtuais.filter((item) => item !== value) };
        }
      });
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);


    const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        // É uma boa prática incluir os headers ao enviar JSON
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // LÓGICA CORRIGIDA
      if (response.ok) {
        // SUCESSO: Se a resposta da API for bem-sucedida (status 2xx)
        // Redireciona para a página de obrigado.
        router.push('/obrigado');
      } else {
        // ERRO: Se a resposta da API indicar um erro (status 4xx ou 5xx)
        const errorData = await response.json();
        // Joga um erro para ser capturado pelo bloco catch.
        throw new Error(errorData.message || 'Falha ao enviar o formulário.');
      }

    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (etapa === 1) {
      if (form.tipoVoluntario === 'existente') {
        setEtapa(2);
      } else {
        handleSubmit();
      }
    } else {
      setEtapa((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setEtapa((prev) => prev - 1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-[#0e142d] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-2xl">
        {!error ? (
          <>
            {etapa === 0 && <Etapa0 form={form} handleChange={handleChange} onNext={handleNext} />}
            {etapa === 1 && <Etapa1 form={form} handleChange={handleChange} onNext={handleNext} onBack={handleBack} tipoVoluntario={form.tipoVoluntario} isSubmitting={isSubmitting} />}
            {etapa === 2 && <Etapa2 form={form} handleChange={handleChange} onBack={handleBack} onSubmit={handleSubmit} isSubmitting={isSubmitting} />}
          </>
        ) : (
          <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Erro!</strong>
            <span className="block sm:inline"> {error}</span>
            <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3" aria-label="Fechar">
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}