-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `contrasenia` VARCHAR(191) NOT NULL,
    `contrasenia_ok` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `genero` BOOLEAN NOT NULL,
    `imagen_perfil` VARCHAR(191) NOT NULL,
    `me_gusta` VARCHAR(800) NOT NULL,
    `objetivos` VARCHAR(800) NOT NULL,
    `como_soy` VARCHAR(800) NOT NULL,
    `idioma_materno` JSON NOT NULL,
    `idiomas_fluidos` JSON NOT NULL,
    `idiomas_aprendiendo` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Idiomas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idioma` VARCHAR(191) NOT NULL,
    `imagen_bandera` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Idiomas_idioma_key`(`idioma`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClienteIdiomas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nivel_idioma` VARCHAR(191) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_idioma` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `idioma` JSON NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_cliente` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(200) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_publicacion` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Likes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_publicacion` INTEGER NOT NULL,
    `id_cliente` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reportes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_publicacion` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Follows` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user_sigue_a` INTEGER NOT NULL,
    `id_user_seguido` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mensajes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mensaje` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_cliente_envia` INTEGER NOT NULL,
    `id_cliente_recibe` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administradores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `contrasenia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClienteIdiomas` ADD CONSTRAINT `ClienteIdiomas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClienteIdiomas` ADD CONSTRAINT `ClienteIdiomas_id_idioma_fkey` FOREIGN KEY (`id_idioma`) REFERENCES `Idiomas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicaciones` ADD CONSTRAINT `Publicaciones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportes` ADD CONSTRAINT `Reportes_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reportes` ADD CONSTRAINT `Reportes_id_publicacion_fkey` FOREIGN KEY (`id_publicacion`) REFERENCES `Publicaciones`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_id_user_sigue_a_fkey` FOREIGN KEY (`id_user_sigue_a`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_id_user_seguido_fkey` FOREIGN KEY (`id_user_seguido`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensajes` ADD CONSTRAINT `Mensajes_id_cliente_envia_fkey` FOREIGN KEY (`id_cliente_envia`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensajes` ADD CONSTRAINT `Mensajes_id_cliente_recibe_fkey` FOREIGN KEY (`id_cliente_recibe`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
