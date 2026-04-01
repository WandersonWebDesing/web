// src/pages/Eletronicos.jsx
import React from "react";
import "./css/Eletronico.css";

const produtosEletronicos = [
  { id: 1, nome: "Smartphone XYZ", preco: "R$ 1.999,00", imagem: "https://via.placeholder.com/150" },
  { id: 2, nome: "Notebook ABC", preco: "R$ 3.499,00", imagem: "https://via.placeholder.com/150" },
  { id: 3, nome: "Fone de Ouvido Pro", preco: "R$ 399,00", imagem: "https://via.placeholder.com/150" },
  { id: 4, nome: "Smartwatch 4.0", preco: "R$ 799,00", imagem: "https://via.placeholder.com/150" },
];

export default function Eletronicos() {
  return (
    <div className="eletronicos-container">
      <h1>Loja de Eletrônicos</h1>
      <p>Confira nossos produtos de alta tecnologia com preços especiais!</p>
      
      <div className="produtos-grid">
        {produtosEletronicos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p className="preco">{produto.preco}</p>
            <button className="btn-comprar">Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}