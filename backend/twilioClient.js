// backend/twilioClient.js
import Twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

export const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
export const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER; // ex: "whatsapp:+14155238886"