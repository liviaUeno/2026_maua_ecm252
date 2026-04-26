CREATE TABLE tb_tarefa(
    cod_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_tarefa (titulo, descricao)
VaLUES ('ir ao mercado', 'comprar leite e ovos');

SELECT * FROM tb_tarefa;