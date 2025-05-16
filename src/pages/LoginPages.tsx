import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login data:', email, password);
    // Aquí luego conectas al backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
