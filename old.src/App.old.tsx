import React from 'react';
import './App.css';

// Componente Menu
function Menu() {
  return (
    <nav className="menu">
      <div className="logo"></div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} WandersonWeb. Todos os direitos reservados.</p>
    </footer>
  );
}

// Componente Home
function Home() {
  return (
    <section id="home" className="home">
      <h1>Bem-vindo à WandersonWeb 🚀</h1>
      <p>Seu novo site está no ar! Aqui você encontrará soluções de web, design e tecnologia.</p>
      <div className="botoes-home">
        <a href="#portfolio" className="btn">Ver Portfólio</a>
        <a href="#contato" className="btn btn-secondary">Entrar em Contato</a>
      </div>
    </section>
  );
}

// App Principal
function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;