import { useState } from 'react';
import ClienteNoEncontrado from '../components/ClienteNoEncontrado';

export default function BuscarClientePage() {
  const [rut, setRut] = useState('');
  const [clienteEncontrado, setClienteEncontrado] = useState<boolean | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de búsqueda
    if (rut === '12345678-9') {
      setClienteEncontrado(true); // Simula cliente encontrado (futuro caso de éxito)
    } else {
      setClienteEncontrado(false); // Cliente no encontrado
    }
  };

  const resetSearch = () => {
    setClienteEncontrado(null);
    setRut('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {clienteEncontrado === false ? (
        <ClienteNoEncontrado onTryAgain={resetSearch} />
      ) : (
        <form 
          onSubmit={handleSearch} 
          className="bg-white p-8 rounded-xl shadow-lg w-96 text-center"
        >
          <h1 className="text-2xl font-bold text-blue-600 mb-6">Buscar Cliente</h1>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="Ingrese RUT"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buscar
          </button>
        </form>
      )}
    </div>
  );
}
