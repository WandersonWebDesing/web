import supabase from '../supabaseClient.js';
import { gerarCodigo } from '../utils/gerarCodigo.js';
import { enviarCodigoWhatsApp } from '../services/whatsapp.service.js';
import { criarContatoHubspot } from '../services/hubspot.service.js';

// CREATE
export const criarCliente = async (req, res) => {
  const { nome, telefone, email } = req.body;

  try {
    const codigo = gerarCodigo();

    const { data, error } = await supabase
      .from('clientes')
      .insert([
        {
          nome,
          telefone,
          email,
          codigo_verificacao: codigo
        }
      ])
      .select();

    if (error) throw error;

    // WhatsApp
    if (telefone) {
      await enviarCodigoWhatsApp(telefone, codigo);
    }

    // HubSpot
    await criarContatoHubspot(nome, email, telefone);

    res.json(data[0]);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
export const listarClientes = async (req, res) => {
  const { data, error } = await supabase
    .from('clientes')
    .select('*');

  if (error) return res.status(500).json(error);

  res.json(data);
};

// UPDATE
export const atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, telefone } = req.body;

  const { data, error } = await supabase
    .from('clientes')
    .update({ nome, telefone })
    .eq('id', id)
    .select();

  if (error) return res.status(500).json(error);

  res.json(data[0]);
};

// DELETE
export const deletarCliente = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('clientes')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json(error);

  res.json({ message: 'Cliente deletado' });
};