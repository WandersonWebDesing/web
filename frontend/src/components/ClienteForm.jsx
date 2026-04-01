import { useState } from 'react';
import { criarCliente } from '../services/clientesService';

export default function ClienteForm({ atualizarLista }) {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await criarCliente(form);

    alert('Cliente cadastrado 🚀');

    setForm({ nome: '', telefone: '', email: '' });

    atualizarLista();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />

      <button type="submit">Cadastrar</button>
    </form>
  );
}