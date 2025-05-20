// import LoginForm from '../components/LoginForm';

// export default function LoginPage() {
//   const handleLogin = (email: string, password: string) => {
//     console.log('Login data:', email, password);
//     // Aquí luego conectas al backend
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <LoginForm onSubmit={handleLogin} />
//     </div>
//   );
// }
import logo from "../assets/images/logo-club-nx.png"; // Guarda la imagen como logo-club-nx.png
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    // Autenticación real aquí
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

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full p-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-500 to-lime-500 hover:opacity-90 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
