CREATE TABLE carrinho (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cliente_id UUID REFERENCES clientes(id) ON DELETE CASCADE,
    produto_nome TEXT NOT NULL,
    produto_id UUID,
    preco NUMERIC NOT NULL,
    quantidade INTEGER DEFAULT 1,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);