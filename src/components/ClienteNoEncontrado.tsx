interface ClienteNoEncontradoProps {
  onTryAgain: () => void;
}

export default function ClienteNoEncontrado({ onTryAgain }: ClienteNoEncontradoProps) {
  return (
    <div className="mt-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-md">
      <h2 className="text-xl text-red-600 font-semibold mb-4">❌ Cliente no encontrado</h2>
      <button 
        onClick={onTryAgain}
        className="bg-gradient-to-r from-purple-600 via-blue-500 to-lime-500 text-white px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
