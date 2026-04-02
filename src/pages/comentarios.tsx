// src/pages/Comentarios.jsx
import React, { useState } from "react";
import "./css/comentarios.css";
import logo from "../../assets/imagens/comentalogo.png";

export default function Comentarios() {
  const [ativo, setAtivo] = useState(null);

  const toggle = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  const faqData = [
    {
      pergunta: "Seu negócio aparece no Google?",
      resposta:
        "Se o cliente não te encontra, ele compra do concorrente. Posicionamos sua empresa para ser encontrada todos os dias.",
    },
    {
      pergunta: "Você recebe clientes todos os dias?",
      resposta:
        "Criamos estratégias digitais que geram fluxo constante de clientes qualificados.",
    },
    {
      pergunta: "Sua marca transmite profissionalismo?",
      resposta:
        "Design, presença digital e autoridade fazem toda a diferença na decisão de compra.",
    },
    {
      pergunta: "Você domina seu mercado local?",
      resposta:
        "Trabalhamos posicionamento estratégico para você se tornar referência na sua região.",
    },
  ];

  return (
    <section className="faq-container">

      {/* LOGO */}
      <div className="faq-brand">
        <img src={logo} alt="WandersonWeb Logo" />
        <h2>WandersonWeb</h2>
        <p>
          Soluções digitais estratégicas para empresas que desejam crescer,
          se destacar e dominar seu mercado.
        </p>
      </div>

      {/* HEADER */}
      <div className="faq-header">
        <h1>Perguntas estratégicas antes de escalar seu negócio</h1>
        <p>
          Empresas que crescem fazem as perguntas certas.
        </p>
      </div>

      {/* FAQ */}
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${ativo === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span>{item.pergunta}</span>
              <span className="icon">
                {ativo === index ? "−" : "+"}
              </span>
            </button>

            {ativo === index && (
              <div className="faq-answer">
                <p>{item.resposta}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="faq-cta">
        <h3>Pronto para crescer no digital?</h3>
        <p>Fale agora e descubra como podemos impulsionar seu negócio.</p>
        <button
          onClick={() =>
            window.open("https://wa.me/5561999788904", "_blank")
          }
        >
          Falar no WhatsApp
        </button>
      </div>

    </section>
  );
}