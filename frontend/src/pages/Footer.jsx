import { Link } from "react-router-dom";
import "./css/footer.css";

const Footer = () => {
  const handleCTA = () => {
    // Redireciona para a página de serviços
    window.location.href = "/Servico";
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Marca */}
        <div>
          <h2 className="footer-logo">
            Wanderson<span>Web</span>
          </h2>

          <p className="footer-text">
            Transformando ideias em soluções digitais reais.
            Seu negócio mais moderno, rápido e inteligente.
          </p>

          <div className="footer-status">
            <span className="status-dot"></span>
            <span className="status-text">
              Sistema online e disponível
            </span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="footer-title">Navegação Inteligente</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/Portifolio">Portfólio</Link></li>
            <li><Link to="/comentarios">Comentários</Link></li>
            <li><Link to="/Servico">Serviços</Link></li>
            <li><Link to="/Eletronico">Eletrônicos</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="footer-title">Vamos crescer juntos?</h3>

          <p className="footer-cta-text">
            Seu projeto pode ser o próximo destaque.
            Comece agora e veja a diferença.
          </p>

          <button className="footer-button" onClick={handleCTA}>
            🚀 Quero evoluir meu projeto
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} WandersonWeb — Todos os direitos reservados
        </p>

        <div className="footer-bottom-links">
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/termos">Termos</Link>
          <Link to="/suporte">Suporte</Link>
        </div>
      </div>

      {/* Frase */}
      <div className="footer-quote">
        "Enquanto outros criam sites, eu crio experiências que vendem."
      </div>

    </footer>
  );
};

export default Footer;