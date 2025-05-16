import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BuscarClientePage from './pages/BuscarClientePage';
import LoginPage from './pages/LoginPages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/buscar-cliente" />} />
        <Route path="/buscar-cliente" element={<BuscarClientePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
