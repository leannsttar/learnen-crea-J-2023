/*
  Warnings:

  - Added the required column `contrasenia_ok` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `contrasenia_ok` VARCHAR(191) NOT NULL;
