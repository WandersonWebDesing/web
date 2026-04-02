import { useEffect, useState } from 'react';
import ClienteForm from '../components/ClienteForm';
import { listarClientes, deletarCliente } from '../services/clientesService';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  const carregarClientes = async () => {
    const data = await listarClientes();
    setClientes(data);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const handleDelete = async (id) => {
    await deletarCliente(id);
    carregarClientes();
  };

  return (
    <div>
      <h1>Clientes 🚀</h1>

      <ClienteForm atualizarLista={carregarClientes} />

      <ul>
        {clientes.map((c) => (
          <li key={c.id}>
            {c.nome} - {c.email}
            <button onClick={() => handleDelete(c.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}