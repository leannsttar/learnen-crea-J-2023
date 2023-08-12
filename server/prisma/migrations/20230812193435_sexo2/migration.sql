/*
  Warnings:

  - Added the required column `tipo_idioma` to the `ClienteIdiomas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clienteidiomas` ADD COLUMN `tipo_idioma` ENUM('mother_language', 'more_languages', 'languages') NOT NULL;
