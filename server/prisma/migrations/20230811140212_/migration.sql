/*
  Warnings:

  - You are about to drop the column `apellido` on the `administradores` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `administradores` table. All the data in the column will be lost.
  - You are about to drop the column `rol` on the `administradores` table. All the data in the column will be lost.
  - Added the required column `contrasenia` to the `Administradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Administradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `administradores` DROP COLUMN `apellido`,
    DROP COLUMN `nombre`,
    DROP COLUMN `rol`,
    ADD COLUMN `contrasenia` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;
