/*
  Warnings:

  - Added the required column `rol` to the `Administradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `administradores` ADD COLUMN `rol` VARCHAR(191) NOT NULL;
