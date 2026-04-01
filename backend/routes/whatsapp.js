// backend/routes/whatsapp.js
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Middleware para log detalhado
router.use((req, res, next) => {
    console.log("🚀 Requisição recebida:");
    console.log("Método:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});

// Webhook para receber mensagens do WhatsApp
router.post("/webhook", (req, res) => {
    try {
        const from = req.body.From || "desconhecido";
        const body = req.body.Body || "";

        console.log(`📩 Mensagem de ${from}: "${body}"`);

        // Resposta rápida para evitar 502
        res.set("Content-Type", "text/xml");
        res.send(`
            <Response>
                <Message>Recebi sua mensagem! ✅</Message>
            </Response>
        `);
    } catch (err) {
        console.error("❌ Erro no webhook:", err);
        res.status(500).send("Erro interno no servidor");
    }
});

export default router;