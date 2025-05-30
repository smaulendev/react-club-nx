import logo from "../assets/images/logo-club-nx.png";
import { useState } from "react";
import { Alert, CircularProgress } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Respuesta:", data);

      if (response.ok && data.access_token) {
        localStorage.setItem("token", data.access_token);

        // Simulación de delay para mostrar spinner (puedes quitarlo)
        setTimeout(() => {
          window.location.href = "/buscar-cliente";
        }, 1000);
      } else {
        setError("Credenciales incorrectas. Por favor intenta nuevamente.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error de conexión con el servidor.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#dcfce7]">
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center border border-white/40"
      >
        <img src={logo} alt="Club NX" className="w-40 mx-auto mb-8" />
        <h2 className="text-2xl font-bold text-purple-700 mb-6 tracking-wide">
          Iniciar Sesión
        </h2>

        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="Correo Electrónico"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Contraseña"
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-xl font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 via-blue-500 to-lime-500 hover:opacity-90 transition"
          }`}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
        </button>
      </form>
    </div>
  );
}
