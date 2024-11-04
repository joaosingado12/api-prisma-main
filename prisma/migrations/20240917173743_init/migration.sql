-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Fornecedor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DECIMAL(65, 30) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `codbarras` VARCHAR(191) NOT NULL,
    `lote` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Produto_codbarras_key`(`codbarras`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
