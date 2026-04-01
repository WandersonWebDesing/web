CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    cliente_id UUID NOT NULL,
    mensagem TEXT NOT NULL,
    aprovado BOOLEAN DEFAULT FALSE,
    visualizacoes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
