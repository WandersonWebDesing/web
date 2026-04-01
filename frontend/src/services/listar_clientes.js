export async function getClientes() {
  try {
    const response = await api.get("/clientes");
    return response.data; // array de clientes
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return [];
  }
}