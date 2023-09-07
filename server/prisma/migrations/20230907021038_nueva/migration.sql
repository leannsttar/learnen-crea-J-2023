-- AlterTable
ALTER TABLE `administradores` ADD COLUMN `role` ENUM('cliente', 'admin') NOT NULL DEFAULT 'admin';

-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `role` ENUM('cliente', 'admin') NOT NULL DEFAULT 'cliente';
