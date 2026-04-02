// src/components/Servicos.jsx
import React from "react";
import './css/servico.css';

const Servicos = () => {
  return (
    <section className="servicos" id="servicos">
      <h2 className="titulo-servicos">
        🌟 Meus Serviços — Onde Ideias Viram Resultados
      </h2>
      <p className="subtitulo-servicos">
        Não entrego apenas soluções, entrego experiências digitais que 
        transformam negócios, conectam pessoas e antecipam o futuro.
      </p>

      <div className="cards-servicos">
        <div className="card-servico">
          <h3>🚀 Desenvolvimento Web Full Stack</h3>
          <p>
            HTML, CSS, JavaScript, React.js, Node.js, Express e bancos de dados. 
            Transformo ideias em aplicações robustas, rápidas e escaláveis.
          </p>
          <span className="diferencial">
            Diferencial: Entrego códigos limpos e estratégias de UX que encantam usuários e recrutadores.
          </span>
        </div>

        <div className="card-servico">
          <h3>📈 Marketing Digital & Vendas Online</h3>
          <p>
            Planejamento de anúncios, CRM, automações no WhatsApp e integração de vendas. 
            Faço seu negócio ser visto e lembrado.
          </p>
          <span className="diferencial">
            Diferencial: Combino dados e criatividade para resultados reais e mensuráveis.
          </span>
        </div>

        <div className="card-servico">
          <h3>💡 Consultoria Tecnológica & Inteligência Estratégica</h3>
          <p>
            Avaliação de processos, otimização de sistemas e implementação de soluções digitais 
            que aumentam produtividade e reduzem erros.
          </p>
          <span className="diferencial">
            Diferencial: Uso minha visão estratégica para antecipar problemas antes que aconteçam.
          </span>
        </div>

        <div className="card-servico">
          <h3>🎯 Projetos Sob Medida & Inovação</h3>
          <p>
            Criação de ferramentas únicas, automações, integrações e soluções personalizadas 
            para sua empresa ou projeto.
          </p>
          <span className="diferencial">
            Diferencial: Cada projeto é único, pensado para gerar impacto imediato e memorável.
          </span>
        </div>
      </div>

      <p className="cta-servicos">
        Vamos transformar sua ideia em algo que os outros só conseguem imaginar? 
        🚀 Entre em contato e seja parte da inovação.
      </p>
    </section>
  );
};

export default Servicos;