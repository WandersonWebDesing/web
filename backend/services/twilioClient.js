// backend/twilioClient.js
import twilio from "twilio";

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  throw new Error("Twilio SID ou AUTH_TOKEN não configurados no .env");
}

export const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;