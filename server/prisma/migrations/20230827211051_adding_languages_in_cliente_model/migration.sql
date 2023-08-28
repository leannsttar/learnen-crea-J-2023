/*
  Warnings:

  - Added the required column `idioma_materno` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idiomas_aprendiendo` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idiomas_fluidos` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `idioma_materno` JSON NOT NULL,
    ADD COLUMN `idiomas_aprendiendo` JSON NOT NULL,
    ADD COLUMN `idiomas_fluidos` JSON NOT NULL;
