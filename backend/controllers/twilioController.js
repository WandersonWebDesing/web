const { sendSMS } = require('../services/twilioService');

const enviarMensagem = async (req, res) => {
  const { telefone, mensagem } = req.body;
  try {
    const resultado = await sendSMS(telefone, mensagem);
    res.status(200).json({ sucesso: true, resultado });
  } catch (erro) {
    res.status(500).json({ sucesso: false, erro: erro.message });
  }
};

module.exports = { enviarMensagem };