CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    cliente_id UUID NOT NULL,
    tipo TEXT CHECK (tipo IN ('software', 'marketing')),
    descricao TEXT,
    valor NUMERIC(10,2),
    status TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
