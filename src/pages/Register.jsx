import { useState } from "react";
import { supabase } from "../supabaseClient";
import './css/registro.css';

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "cliente",
    codigo: ""
  });

  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 Enviar código fictício (ou você integra WhatsApp via API depois)
  const enviarCodigo = async () => {
    setCodigoEnviado(true);
    setMensagem("Código enviado no WhatsApp 📲 (simulado)");
  };

  // 🔥 Registrar usuário no Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inserindo dados na tabela 'usuarios'
    const { data, error } = await supabase
      .from('usuarios') // crie essa tabela no Supabase com colunas: nome, telefone, email, tipo, codigo
      .insert([
        {
          nome: form.nome,
          telefone: form.telefone,
          email: form.email,
          tipo: form.tipo,
          codigo: form.codigo
        }
      ]);

    if (error) {
      setMensagem("Erro ao cadastrar: " + error.message);
    } else {
      setMensagem("Cadastro realizado com sucesso ✅");
      setForm({ nome: "", telefone: "", email: "", tipo: "cliente", codigo: "" });
      setCodigoEnviado(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>🚀 Criar Conta</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          onChange={handleChange}
          required
          value={form.nome}
        />

        <input
          type="text"
          name="telefone"
          placeholder="WhatsApp (61 99999-9999)"
          onChange={handleChange}
          required
          value={form.telefone}
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          required
          value={form.email}
        />

        <select name="tipo" onChange={handleChange} value={form.tipo}>
          <option value="cliente">Cliente</option>
          <option value="parceiro">Parceiro</option>
        </select>

        <button type="button" className="btn-codigo" onClick={enviarCodigo}>
          Enviar código no WhatsApp
        </button>

        {codigoEnviado && (
          <input
            type="text"
            name="codigo"
            placeholder="Digite o código recebido"
            onChange={handleChange}
            required
            value={form.codigo}
          />
        )}

        <button type="submit" className="btn-submit">
          Finalizar Cadastro
        </button>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>
  );
}