// src/components/Home.jsx
import React from "react";
import "./css/portifolio.css"; // Crie o CSS separado com suas classes

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Olá, eu sou Wanderson Lourival</h1>
          <p>
            Transformo ideias em soluções digitais, criativas e estratégicas.
            Meu portfólio é mais do que projetos, é a história de como tecnologia,
            visão e criatividade podem potencializar o seu negócio.
          </p>
          <a href="#projetos" className="btn-primary">
            Conheça meus projetos
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/foto-perfil.png" alt="Wanderson Lourival" />
        </div>
      </section>

      <section className="sobre">
        <h2>Quem Sou</h2>
        <p>
          Sou especialista em soluções digitais, vendas online, automações, CRMs, 
          sistemas com Node.js e React.js. Tenho experiência real em transformar processos complexos em experiências intuitivas.
        </p>
        <p>
          Minhas ideias não ficam no papel: elas acontecem, evoluem e se adaptam a cada desafio. 
          Posso ajudar sua empresa a crescer com estratégia, tecnologia e inovação.
        </p>
      </section>

      <section className="projetos" id="projetos">
        <h2>Projetos e Soluções</h2>
        <div className="grid-projetos">
          <div className="projeto-card">
            <h3>Artereciclagem</h3>
            <p>
              Transformando materiais em produtos únicos, combinando sustentabilidade 
              com tecnologia e marketing digital.
            </p>
          </div>
          <div className="projeto-card">
            <h3>Sistemas Node.js e React.js</h3>
            <p>
              Automatização, integração e UX/UI intuitivo em soluções web robustas.
            </p>
          </div>
          <div className="projeto-card">
            <h3>Marketing Digital e WhatsApp Automation</h3>
            <p>
              Planejamento estratégico de vendas e comunicação, engajando clientes 
              com inteligência e criatividade.
            </p>
          </div>
        </div>
      </section>

      <section className="tecnologias">
        <h2>Minhas Ferramentas e Tecnologias</h2>
        <ul className="tech-list">
          <li>Node.js, React.js, Express, MySQL</li>
          <li>CRM e automação de vendas</li>
          <li>Marketing Digital, Google Ads, WhatsApp Bot</li>
          <li>Desenvolvimento de Sites e Landing Pages</li>
          <li>Gestão e planejamento estratégico de negócios</li>
        </ul>
      </section>

      <section className="futuro">
        <h2>O que Acontecerá</h2>
        <p>
          Cada projeto que eu conduzo não é apenas uma entrega, mas uma jornada. 
          O que acontece agora é apenas o começo. Em momentos estratégicos, minha 
          experiência será aplicada para aumentar resultados, otimizar processos e 
          criar experiências únicas para seus clientes.
        </p>
      </section>

      <section className="cta">
        <h2>Vamos Conversar?</h2>
        <p>
          Estou pronto para transformar suas ideias em resultados concretos. Entre em contato 
          e vamos criar juntos o futuro da sua empresa.
        </p>
        <a href="/contato" className="btn-primary">Fale Comigo</a>
      </section>
    </>
  );
};

export default Home;