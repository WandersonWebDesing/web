ALTER TABLE chamados
ADD CONSTRAINT fk_chamados_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
ON DELETE CASCADE;
ALTER TABLE feedbacks
ADD CONSTRAINT fk_feedbacks_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
ON DELETE CASCADE;
ALTER TABLE vendas
ADD CONSTRAINT fk_vendas_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
ON DELETE CASCADE;
