// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar após login
import { supabase } from "../../services/supabaseClient";
import "./css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false); // Estado para carregamento
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });

      if (error) {
        setErro("Email ou senha inválidos");
      } else {
        alert("Login realizado com sucesso!");
        console.log("Dados do usuário:", data);
        // Redireciona para a página principal após login
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      setErro("Ocorreu um erro ao tentar logar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-login" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </button>

          {erro && <div className="error">{erro}</div>}
        </form>
      </div>
    </div>
  );
}