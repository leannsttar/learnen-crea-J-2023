-- DropForeignKey
ALTER TABLE `publicaciones` DROP FOREIGN KEY `Publicaciones_id_cliente_fkey`;

-- AlterTable
ALTER TABLE `publicaciones` MODIFY `id_cliente` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Publicaciones` ADD CONSTRAINT `Publicaciones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
