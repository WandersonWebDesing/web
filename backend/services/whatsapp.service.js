import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

export const enviarCodigoWhatsApp = async (telefone, codigo) => {
  return client.messages.create({
    body: `Código WandersonWeb: ${codigo}`,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${telefone}`
  });
};