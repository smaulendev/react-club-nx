interface ClienteNoEncontradoProps {
  onTryAgain: () => void;
}

export default function ClienteNoEncontrado({ onTryAgain }: ClienteNoEncontradoProps) {
  return (
    <div className="text-center mt-8">
      <h2 className="text-xl text-red-600 font-semibold mb-4">Cliente no encontrado</h2>
      <button 
        onClick={onTryAgain}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
