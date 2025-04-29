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
  batizado: boolean;
  batizadoDesde: string;
}

interface Etapa2Props {
  form: FormData;
  handleChange: (e: React.ChangeEvent<any>) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export function Etapa2({ form, handleChange, onBack, onSubmit }: Etapa2Props) {
  const isValid = form.membroDesde &&
    (
      form.voluntario
        ? form.voluntarioDesde && form.ministerio && form.batizadoDesde
        : (!form.batizado || (form.batizado && form.batizadoDesde))
    );

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "true"; // transforma string em boolean
    handleChange({
      target: {
        name: "batizado",
        value,
      },
    } as React.ChangeEvent<any>);
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

      <label className="block text-xl font-light text-gray-700">Membro desde (mês/ano) *</label>
      <input
        name="membroDesde"
        value={form.membroDesde}
        onChange={handleChange}
        placeholder="04/2020"
        className="mb-10 font-light text-2xl w-full border-b bg-transparent text-purple-700 placeholder-purple-300 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2"
        required
      />

      {form.voluntario ? (
        <>
          <label className="block text-xl font-light text-gray-700">Voluntário desde (mês/ano) *</label>
          <input
            name="voluntarioDesde"
            value={form.voluntarioDesde}
            onChange={handleChange}
            placeholder="07/2021"
            className="mb-10 font-light text-2xl w-full border-b bg-transparent text-purple-700 placeholder-purple-300 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2"
            required
          />

          <label className="block text-xl font-light text-gray-700">
            Ministério que serve *
            <label className="text-gray-600 text-[10px] ml-1">escolha apenas um</label>
          </label>
          <select
            name="ministerio"
            value={form.ministerio}
            onChange={handleChange}
            className="mb-10 w-full text-2xl font-light border-b border-gray-300 bg-transparent placeholder-purple-300 text-purple-700 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2 cursor-pointer"
            required
          >
            <option value="">Selecione</option>
            <option value="Worship">Worship</option>
            <option value="Integracao">Integração</option>
            <option value="Vip">V.I.P</option>
            <option value="Kids">Kids</option>
            <option value="Creative">Creative</option>
            <option value="Parking">Parking</option>
            <option value="Teens">Teens</option>
            <option value="RdkBrave">RdkBrave</option>
            <option value="Lounge">Lounge</option>
            <option value="Connect">Connect</option>
            <option value="Producao">Produção</option>
            <option value="Cerimonial">Cerimonial</option>
            <option value="CampusOnline">Campus Online</option>
            <option value="Casais">Casais</option>
            <option value="ClinicaDaAlma">Clínica Da Alma</option>
            <option value="Baby">Baby</option>
            <option value="Coral">Coral</option>
            <option value="Eventos">Eventos</option>
            <option value="Store">Store</option>
          </select>

          <label className="block text-xl font-light text-gray-700">Batizado desde (mês/ano) *</label>
          <input
            name="batizadoDesde"
            value={form.batizadoDesde}
            onChange={handleChange}
            placeholder="03/2019"
            className="mb-10 font-light text-2xl w-full border-b bg-transparent text-purple-700 placeholder-purple-300 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2"
            required
          />
        </>
      ) : (
        <>
          <label className="block text-xl font-light text-gray-700 mb-2">É batizado? *</label>
          <div className="flex gap-6 mb-10 text-purple-700 text-xl">
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

          {form.batizado && (
            <>
              <label className="block text-xl font-light text-gray-700">Batizado desde (mês/ano) *</label>
              <input
                name="batizadoDesde"
                value={form.batizadoDesde}
                onChange={handleChange}
                placeholder="08/2022"
                className="mb-10 font-light text-2xl w-full border-b bg-transparent text-purple-700 placeholder-purple-300 focus:outline-none focus:border-purple-700 focus:border-b-2 py-2"
                required
              />
            </>
          )}
        </>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-purple-800 hover:bg-purple-600 text-white cursor-pointer font-bold py-2 px-4 rounded-md"
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
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-purple-800 hover:bg-blue-700 text-white cursor-pointer'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </motion.div>
  );
}
