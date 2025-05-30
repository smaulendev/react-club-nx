import { useState } from 'react';
import logo from '../assets/images/logo-club-nx.png';

export default function BuscarClientePage() {
  const [rut, setRut] = useState('');
  const [cliente, setCliente] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setCliente(null);
  setError('');

  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:3001/clientes/buscar?rut=${rut}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok && data && !data.message) {
      setCliente(data);
    } else {
      setError(data.message || 'Cliente no encontrado');
    }
  } catch (err) {
    setError('Error al conectar con el servidor');
  } finally {
    setLoading(false);
  }
};


  const resetSearch = () => {
    setRut('');
    setCliente(null);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#dcfce7]">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center border border-white/40">
        <img src={logo} alt="Club NX" className="w-32 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Buscar Cliente</h2>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="Ingrese RUT (ej: 12345678-9)"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-500 to-lime-500 hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {loading && (
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 text-red-800 p-4 rounded-xl">
            <p className="font-semibold">{error}</p>
            <button
              onClick={resetSearch}
              className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        {cliente && (
          <div className="mt-6 bg-green-100 p-4 rounded-xl text-left text-sm">
            <p><strong>ID:</strong> {cliente.id}</p>
            <p><strong>Nombre:</strong> {cliente.nombre}</p>
            <p><strong>RUT:</strong> {cliente.rut}</p>
            <p><strong>Estado:</strong> {cliente.estado}</p>
            <button
              onClick={resetSearch}
              className="mt-4 text-blue-600 underline hover:text-blue-800"
            >
              Buscar otro cliente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
