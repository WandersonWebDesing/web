CREATE TABLE chamados (
    id SERIAL PRIMARY KEY,
    cliente_id UUID NOT NULL,
    projeto_nome TEXT,
    descricao TEXT,
    status TEXT DEFAULT 'aberto' CHECK (
        status IN ('aberto', 'andamento', 'fechado')
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
