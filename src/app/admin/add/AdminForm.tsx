'use client';
import { useState, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';

export default function AdminFormClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 1. Estado para controlar o cargo selecionado
  const [role, setRole] = useState('CHECKIN_ADMIN'); // Cargo padrão
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await axios.post('/api/admins', { name, email, password, role });
      setMessage('✅ Administrador criado com sucesso!');
      setName('');
      setEmail('');
      setPassword('');
      setRole('CHECKIN_ADMIN'); // Reseta para o padrão
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ error?: string }>;
      console.error(axiosError);
      setMessage(axiosError.response?.data?.error || '❌ Erro ao criar administrador');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form onSubmit={handleSubmit} className="bg-[#0e142d] p-8 rounded-2xl shadow-lg space-y-6">
          <h1 className="text-2xl font-bold text-center text-white">Adicionar Administrador</h1>
          
          {message && (
            <div className={`p-3 rounded-lg text-center font-medium ${message.startsWith('✅') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {message}
            </div>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Nome</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
            />
          </div>

          {/* 3. Campo de seleção para o cargo */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Cargo</label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f34906]"
            >
              <option value="CHECKIN_ADMIN">Admin de Check-in</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold rounded-lg text-white transition-all duration-300 disabled:opacity-50 bg-gradient-to-r from-[#f34906] to-[#fb349f] hover:opacity-90"
          >
            {loading ? 'Criando...' : 'Criar Administrador'}
          </button>
        </form>
      </div>
    </div>
  );
}