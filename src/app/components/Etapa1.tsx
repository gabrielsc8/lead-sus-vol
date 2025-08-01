"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import estadosCidadesData from "../lib/estados-cidades.json";

// Interfaces (sem alteração)
interface FormData {
  nome: string; dataNascimento: string; sexo: string; whatsapp: string; email: string; estado: string; cidade: string;
}
interface Estado {
  sigla: string; nome: string; cidades: string[];
}
interface Etapa1Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onNext: () => void;
  onBack: () => void;
  tipoVoluntario: 'existente' | 'interessado' | null;
  isSubmitting: boolean;
}

export function Etapa1({ form, handleChange, onNext, onBack, tipoVoluntario, isSubmitting }: Etapa1Props) {
  const [cidades, setCidades] = useState<string[]>([]);
  const [dia, setDia] = useState<string>("");
  const [mes, setMes] = useState<string>("");
  const [ano, setAno] = useState<string>("");

  // Lógica de validação e Handlers (sem alteração)
  const validateName = (name: string) => /^[A-Za-zÀ-ÿ\s]{3,}$/.test(name);
  const validatePhone = (phone: string) => /^\(\d{2}\)\s9\d{4}-\d{4}$/.test(phone);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isDateValid = (date: string) => date !== "";

  const isValid =
    validateName(form.nome) &&
    isDateValid(form.dataNascimento) &&
    form.sexo !== "" &&
    validatePhone(form.whatsapp) &&
    form.estado !== "" &&
    form.cidade !== "" &&
    (form.email === "" || validateEmail(form.email));

  useEffect(() => {
    if (dia && mes && ano) {
      const dataCompleta = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
      handleChange({ target: { name: 'dataNascimento', value: dataCompleta } } as any);
    }
  }, [dia, mes, ano, handleChange]);

  useEffect(() => {
    if (form.estado) {
      const estadoSelecionado = estadosCidadesData.estados.find((e: Estado) => e.sigla === form.estado);
      if (estadoSelecionado) setCidades(estadoSelecionado.cidades);
    } else {
      setCidades([]);
    }
  }, [form.estado]);

  const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const siglaEstado = e.target.value;
    handleChange({ target: { name: "estado", value: siglaEstado } } as any);
    handleChange({ target: { name: "cidade", value: "" } } as any);
  };

  const formatPhone = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value.substring(0, 15);
  };
  
  // --- NOVOS ESTILOS ---
  const gradientTextStyle = "bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent";
  
  // Estilo para o <label> (a "pergunta")
  const labelStyle = `block text-sm font-semibold mb-1 ${gradientTextStyle}`;

  // Estilo para os inputs (agora com texto branco sólido)
  const inputStyle = (isValid: boolean, value: string) => {
    const baseStyles = "font-light text-xl md:text-2xl w-full border-b bg-transparent placeholder-gray-500 py-2 transition-all duration-300 focus:outline-none focus:border-transparent focus:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus:bg-no-repeat focus:bg-bottom focus:bg-[length:100%_2px]";
    if (value && !isValid) return `${baseStyles} border-red-500 text-white`; // inválido
    return `${baseStyles} border-gray-600 text-white`; // válido ou vazio
  };
  
  const hiddenSelectStyle = "w-full text-xl md:text-2xl font-light py-2 bg-transparent text-transparent cursor-pointer focus:outline-none";
  
  // Estilo para o <span> do select (agora com texto branco sólido)
  const selectLabelStyle = (hasValue: boolean) => `absolute inset-0 flex items-center pointer-events-none font-light text-xl md:text-2xl ${hasValue ? 'text-white' : 'text-gray-500'}`;
  
  // Botões (sem alteração)
  const primaryButtonStyle = `w-full md:w-auto flex items-center justify-center gap-2 font-bold rounded-lg px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#fb349f] bg-gradient-to-r from-[#f34906] to-[#fb349f] text-white hover:brightness-110`;
  const disabledButtonStyle = `w-full md:w-auto flex items-center justify-center gap-2 font-bold rounded-lg px-8 py-3 bg-gray-600 text-gray-400 cursor-not-allowed`;
  const secondaryButtonStyle = `w-full md:w-auto font-semibold py-3 px-8 rounded-lg text-gray-300 hover:text-white transition-all bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500`;

  const anos = Array.from({ length: 2025 - 1925 + 1 }, (_, i) => 2025 - i);
  const meses = Array.from({ length: 12 }, (_, i) => i + 1);
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center mb-10">
        <p className={`font-bold text-lg ${gradientTextStyle}`}>ETAPA 1 de 2</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-100">Suas informações de contato</h2>
        <p className="text-gray-400 mt-2">Precisamos desses dados para manter você informado.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className={labelStyle}>Nome Completo *</label>
            <input id="nome" name="nome" autoComplete="off" placeholder="Seu nome aqui" value={form.nome} onChange={handleChange} className={inputStyle(validateName(form.nome), form.nome)} required />
          </div>
          <div>
            <label htmlFor="sexo" className={labelStyle}>Sexo *</label>
            <div className="relative border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!form.sexo)}>{form.sexo || "Selecione..."}</span>
              <select id="sexo" name="sexo" value={form.sexo} onChange={handleChange} className={hiddenSelectStyle} required>
                <option value=""></option><option value="Masculino">Masculino</option><option value="Feminino">Feminino</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <label className={labelStyle}>Data de Nascimento *</label>
          <div className="flex gap-4 w-full">
            <div className="relative flex-1 border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!dia)}>{dia || "Dia"}</span>
              <select name="dia" value={dia} onChange={(e) => setDia(e.target.value)} className={hiddenSelectStyle} required><option value=""></option>{dias.map(d => <option key={d} value={d}>{d}</option>)}</select>
            </div>
            <div className="relative flex-1 border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!mes)}>{mes || "Mês"}</span>
              <select name="mes" value={mes} onChange={(e) => setMes(e.target.value)} className={hiddenSelectStyle} required><option value=""></option>{meses.map(m => <option key={m} value={m}>{m}</option>)}</select>
            </div>
            <div className="relative flex-1 border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!ano)}>{ano || "Ano"}</span>
              <select name="ano" value={ano} onChange={(e) => setAno(e.target.value)} className={hiddenSelectStyle} required><option value=""></option>{anos.map(a => <option key={a} value={a}>{a}</option>)}</select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="whatsapp" className={labelStyle}>Celular (Whatsapp) *</label>
            <input id="whatsapp" autoComplete="off" name="whatsapp" placeholder="(19) 91234-5678" value={form.whatsapp} onChange={(e) => { e.target.value = formatPhone(e.target.value); handleChange(e); }} className={inputStyle(validatePhone(form.whatsapp), form.whatsapp)} required />
          </div>
          <div>
            <label htmlFor="email" className={labelStyle}>E-mail</label>
            <input id="email" name="email" autoComplete="new-password" placeholder="seu.email@exemplo.com" type="email" value={form.email} onChange={handleChange} className={inputStyle(validateEmail(form.email) || form.email === '', form.email)} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="estado" className={labelStyle}>Estado *</label>
            <div className="relative border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!form.estado)}>{form.estado ? estadosCidadesData.estados.find(e => e.sigla === form.estado)?.nome : 'Selecione um estado'}</span>
              <select id="estado" name="estado" value={form.estado} onChange={handleEstadoChange} className={hiddenSelectStyle} required>
                <option value=""></option>{estadosCidadesData.estados.map((estado: Estado) => (<option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="cidade" className={labelStyle}>Cidade *</label>
            <div className="relative border-b border-gray-600 focus-within:border-transparent focus-within:bg-gradient-to-r from-[#f34906] to-[#fb349f] focus-within:bg-no-repeat focus-within:bg-bottom focus-within:bg-[length:100%_2px]">
              <span className={selectLabelStyle(!!form.cidade)}>{form.cidade || 'Escolha um estado'}</span>
              <select id="cidade" name="cidade" value={form.cidade} onChange={handleChange} className={hiddenSelectStyle} disabled={!form.estado} required>
                <option value=""></option>{cidades.map((cidade) => (<option key={cidade} value={cidade}>{cidade}</option>))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col-reverse md:flex-row justify-between mt-12 gap-4">
        <button onClick={onBack} className={secondaryButtonStyle}>Voltar</button>
        <button onClick={onNext} disabled={!isValid || isSubmitting} className={!isValid || isSubmitting ? disabledButtonStyle : primaryButtonStyle}>
          {isSubmitting ? 'Enviando...' : tipoVoluntario === 'existente' ? 'Próximo →' : 'Enviar Inscrição'}
        </button>
      </div>
    </motion.div>
  );
}