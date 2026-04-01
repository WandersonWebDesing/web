import axios from "axios";

// Cria instância do Axios apontando para o backend
export const api = axios.create({
  baseURL: "http://localhost:5000", // URL do backend
});

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // para receber JSON do frontend

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  // Lógica de autenticação
  if (email === "teste@wandersonweb.com" && senha === "1234") {
    return res.json({ nome: "Wanderson", email });
  }
  res.status(401).json({ error: "Usuário ou senha inválidos" });
});

app.listen(5000, () => console.log("Backend rodando na porta 5000"));