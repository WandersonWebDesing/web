import React from "react";
import "./css/sobre.css";
import wandersonhome from "../../assets/imagens/logowanderson.png";

const Sobre = () => {
  return (
    <section className="sobre-container">
      <div className="sobre-header">
        <h1>Olá, eu sou Wanderson!</h1>
        <p>
          Transformo ideias em soluções digitais que impulsionam negócios e projetos.
        </p>
      </div>

      <div className="sobre-content">
        <div className="sobre-foto">
          <img src={wandersonhome} alt="Wanderson Lourival" />
        </div>

        <div className="sobre-texto">
          <h2>Como posso ajudar seu projeto ou empresa?</h2>
          <p>
            Com expertise em <strong>Node.js, React.js, CRM's, automações e vendas online</strong>, 
            desenvolvo soluções que aumentam produtividade, engajamento e resultados. 
            Seja integrando sistemas, criando bots no WhatsApp ou planejando anúncios estratégicos, 
            meu foco é entregar resultados tangíveis.
          </p>

          <h2>Quem sou e meus métodos</h2>
          <p>
            Sou um desenvolvedor full-stack apaixonado por tecnologia aplicada a negócios. 
            Meu método combina <strong>planejamento, implementação ágil e análise de resultados</strong>. 
            Cada projeto é pensado para maximizar eficiência e gerar impacto real.
          </p>

          <h2>Tecnologias que uso</h2>
          <ul>
            <li>Front-end: React.js, Bootstrap, HTML5, CSS3</li>
            <li>Back-end: Node.js, Express, APIs REST</li>
            <li>Bancos de dados: MySQL, PostgreSQL</li>
            <li>Automação: Bots no WhatsApp, integração com CRM's</li>
            <li>Marketing Digital: Planejamento de anúncios, análise de métricas</li>
            <li>Ferramentas: Git, VS Code, Supabase, Postman</li>
          </ul>

          <h2>Meu diferencial</h2>
          <p>
            Conecto tecnologia e estratégia para criar soluções personalizadas. 
            Cada projeto recebe atenção completa, focando em <strong>experiência do usuário, inovação e resultados mensuráveis</strong>.
          </p>

          <button 
            className="contato-btn" 
            onClick={() => window.location.href = "/contato"}
          >
            Fale comigo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;