import { api } from "../services/api";

export async function loginUser(email, senha) {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data; // dados do usuário
  } catch (error) {
    console.error("Erro ao logar:", error);
    throw error;
  }
}