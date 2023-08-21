/*
  Warnings:

  - Added the required column `imagen_bandera` to the `Idiomas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `idiomas` ADD COLUMN `imagen_bandera` VARCHAR(191) NOT NULL;
