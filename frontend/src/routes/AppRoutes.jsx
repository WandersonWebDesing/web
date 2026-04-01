import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import CarrinhoPage from '../pages/CarrinhoPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/carrinho" element={<CarrinhoPage />} />
    </Routes>
  );
}