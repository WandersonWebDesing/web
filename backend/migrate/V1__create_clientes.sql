CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE clientes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome TEXT NOT NULL,
    telefone TEXT,
    email TEXT UNIQUE,
    tipo TEXT CHECK (tipo IN ('cliente', 'parceiro', 'admin')) DEFAULT 'cliente',
    whatsapp_verificado BOOLEAN DEFAULT FALSE,
    codigo_verificacao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);