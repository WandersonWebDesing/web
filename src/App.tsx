// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das páginas
import Menu from './pages/Menu';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portifolio from './pages/Portifolio';
import Clientes from './pages/Clientes';
import Servico from './pages/Servico';
import Comentarios from './pages/comentarios'; // 💡 Ajustado para Letra Maiúscula
import LoginForm from './pages/LoginForm';
import Register from './pages/Registrer'; // 💡 Corrigido o nome da variável (opcional, mas recomendado)
// @ts-ignore
import Eletronico from './pages/Eletronico';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Menu fixo */}
      <Menu />

      {/* Conteúdo principal */}
      <main style={{ marginTop: '80px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/servico" element={<Servico />} /> {/* ✅ Servico.jsx */}
          <Route path="/comentarios" element={<Comentarios />} /> {/* 💡 Ajustado aqui também */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registrer" element={<Register />} />
          <Route path="/Eletronico" element={<Eletronico />} /> {/* ✅ Nova rota */}
        </Routes>
      </main>

      {/* Footer fixo */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;