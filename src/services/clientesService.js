const API_URL = 'http://localhost:3000/clientes';

// LISTAR
export const listarClientes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// CRIAR
export const criarCliente = async (cliente) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  });

  return res.json();
};

// DELETAR
export const deletarCliente = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
};