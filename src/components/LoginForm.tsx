import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password); // confirmar

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Respuesta:', data); // depuración

      if (response.ok && data.access_token) {
        localStorage.setItem('token', data.access_token);
        alert('Login exitoso');
        window.location.href = '/buscar-cliente';
      } else {
        alert('Credenciales inválidas');
      }
    } catch (err) {
      console.error('Error al conectarse al servidor:', err);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-lg w-80"
    >
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Iniciar Sesión</h1>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="******"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}
