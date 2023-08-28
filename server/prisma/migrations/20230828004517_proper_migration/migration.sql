/*
  Warnings:

  - Made the column `id_cliente` on table `publicaciones` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `publicaciones` DROP FOREIGN KEY `Publicaciones_id_cliente_fkey`;

-- AlterTable
ALTER TABLE `publicaciones` MODIFY `id_cliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Publicaciones` ADD CONSTRAINT `Publicaciones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
