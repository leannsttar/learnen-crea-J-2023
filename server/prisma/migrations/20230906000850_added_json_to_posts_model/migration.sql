/*
  Warnings:

  - You are about to alter the column `idioma` on the `publicaciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `publicaciones` MODIFY `idioma` JSON NOT NULL;
