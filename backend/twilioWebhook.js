import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Webhook para receber mensagens
app.post("/api/twilio/webhook", (req, res) => {
    console.log("Mensagem recebida do WhatsApp:", req.body);
    
    // Resposta automática opcional
    res.send(`<Response><Message>Recebi sua mensagem! ✅</Message></Response>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));