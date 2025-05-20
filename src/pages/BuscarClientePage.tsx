import { useState } from 'react';
import logo from '../assets/images/logo-club-nx.png';

export default function BuscarClientePage() {
  const [rut, setRut] = useState('');
  const [clienteEncontrado, setClienteEncontrado] = useState<boolean | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica simulada
    if (rut === '12345678-9') {
      setClienteEncontrado(true); // cliente encontrado
    } else {
      setClienteEncontrado(false); // no encontrado
    }
  };

  const resetSearch = () => {
    setClienteEncontrado(null);
    setRut('');
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
          >
            Buscar
          </button>
        </form>

        {clienteEncontrado === false && (
          <div className="mt-6 text-red-600 font-medium">
            Cliente no encontrado
            <div>
              <button
                onClick={resetSearch}
                className="mt-3 text-blue-600 underline hover:text-blue-800"
              >
                Intentar de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
