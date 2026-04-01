require('dotenv').config();

const express = require('express');
const twilio = require('twilio');
const axios = require('axios');

const app = express();

// ✅ Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 🔑 VARIÁVEIS DO .ENV
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;

// ✅ ROTA RAIZ
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

// ✅ TESTE
app.get('/whatsapp/webhook', (req, res) => {
    res.send('✅ Webhook ativo!');
});

// 🔥 FUNÇÃO HUBSPOT
async function criarContato(nome, telefone) {
    try {
        await axios.post(
            'https://api.hubapi.com/crm/v3/objects/contacts',
            {
                properties: {
                    firstname: nome,
                    phone: telefone
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('✅ Contato enviado para HubSpot');
    } catch (error) {
        console.error('❌ Erro HubSpot:', error.response?.data || error.message);
    }
}

// ✅ WEBHOOK TWILIO
app.post('/whatsapp/webhook', (req, res) => {
    try {
        console.log('REQ BODY:', req.body);

        const msg = (req.body.Body || '').toLowerCase().trim();
        const telefone = req.body.From || 'sem-numero';

        // 🔥 ENVIA PRO HUBSPOT (sem travar)
        criarContato('Cliente WhatsApp', telefone);

        const twiml = new twilio.twiml.MessagingResponse();

        if (!msg) {
            twiml.message('⚠️ Mensagem vazia. Digite "oi" para começar.');
        } 
        else if (['oi', 'olá', 'ola'].includes(msg)) {
            twiml.message(
                '👋 Olá! Bem-vindo à WandersonWeb!\n\n' +
                'Digite:\n1 - Serviços\n2 - Falar com atendente'
            );
        } 
        else if (msg === '1') {
            twiml.message(
                '🚀 Serviços:\n' +
                '- Sites Profissionais\n' +
                '- Bots WhatsApp\n' +
                '- Marketing Digital\n\n' +
                'Digite 2 para atendimento'
            );
        } 
        else if (msg === '2') {
            twiml.message('💬 Um atendente entrará em contato!');
        } 
        else {
            twiml.message(
                '❌ Não entendi.\n\nDigite:\n1 - Serviços\n2 - Atendimento'
            );
        }

        res.type('text/xml');
        res.send(twiml.toString());

    } catch (error) {
        console.error('Erro no webhook:', error);
        res.sendStatus(500);
    }
});

// ✅ PORTA
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});