/*
  Warnings:

  - Made the column `id_cliente` on table `publicaciones` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `comentarios` DROP FOREIGN KEY `Comentarios_id_publicacion_fkey`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `Likes_id_publicacion_fkey`;

-- DropForeignKey
ALTER TABLE `publicaciones` DROP FOREIGN KEY `Publicaciones_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `reportes` DROP FOREIGN KEY `Reportes_id_publicacion_fkey`;

-- AlterTable
ALTER TABLE `publicaciones` MODIFY `id_cliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Publicaciones` ADD CONSTRAINT `Publicaciones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportes` ADD CONSTRAINT `Reportes_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
