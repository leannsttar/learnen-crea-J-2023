import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { number } from "zod";

const prisma = new PrismaClient();

export const countUsers = async (req, res) => {
    try {
        const users = await prisma.cliente.count()
        return res.status(200).json(users);
    } catch (error) {
        return res
      .status(500)
      .json({ error: "Error al obtener el número de usuarios" });
    }
} 

export const countPosts = async (req, res) => {
    try {
        const posts = await prisma.publicaciones.count()
        return res.status(200).json(posts);
    } catch (error) {
        return res
      .status(500)
      .json({ error: "Error al obtener el número de publicaciones" });
    }
}

export const countLanguages = async (req, res) => {
    try {
        const languages = await prisma.idiomas.count()
        return res.status(200).json(languages);
    } catch (error) {
        return res
        .status(500)
        .json({ error: "Error al obtener el número de idiomas" });
    }
}

export const lastestUsers = async (req, res) => {
    try {
        const usuarios = await prisma.cliente.findMany({
            orderBy: {
                createdAt: 'desc',
              },
              take: 5,
        })
        return res.status(200).json(usuarios);
    } catch (error) {
        return res
      .status(500)
      .json({ error: "Error al obtener los últimos usuarios" });
    }
}

//CRUD IDIOMAS
export const allLanguages = async (req, res) => {
    try {
        const idiomas = await prisma.idiomas.findMany()
        return res.status(200).json(idiomas);
    } catch (error) {
        return res
        .status(500)
        .json({ error: "Error al obtener los idiomas" });
    }
}

export const createLanguage = async (req, res) => {
    try {
        const { idioma } = req.body
        const createdLanguage = await prisma.idiomas.create({
            data: {
                idioma: idioma,
                // flag: '' //Hafta update the db
            }
        })
        return res.status(200).json(createdLanguage);
    } catch (error) {
        return res
        .status(500)
        .json({ error: "Error al crear el idioma" });
    }
}

export const updateLanguage = async (req, res) => {
    try {
        const { idioma } = req.body
        const { id } = req.params;
        const editedLanguage = await prisma.idiomas.update({
            where: {
                id: parseInt(id)
            }, 
            data: {
                idioma: idioma,
                flag: '' //aja la imagen de esto
            }
        })
        return res.status(200).json({
            message: editedLanguage,
          });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: "El idioma no existe",
            });
          }
          console.log(error);
          return res.status(400).json({
            message: "Hubo un error",
          });
    }
}

export const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLanguage = await prisma.idiomas.delete({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: "El idioma no existe",
            });
          }
          console.log(error);
          return res.status(400).json({
            message: "Hubo un error",
          });
    }
}


//Admin
export const allAdmins = async (req, res) => {
    try {
        const admins = await prisma.administradores.findMany()
        return res.status(200).json(admins);
    } catch (error) {
        return res
        .status(500)
        .json({ error: "Error al obtener los admins" });
    }
}

export const createAdmin = async (req, res) => {
    try {
        const { nombre } = req.body
        const { rol } = req.body
        const createdAdmin = await prisma.administradores.create({
            data: {
                nombre: nombre,
                rol: rol
            }
        })
        return res.status(200).json(createdAdmin);
    } catch (error) {
        return res
        .status(500)
        .json({ error: "Error al crear el administrador" });
    }
}

export const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdmin = await prisma.administradores.delete({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: "El administrador no existe",
            });
          }
          console.log(error);
          return res.status(400).json({
            message: "Hubo un error",
          });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { nombre } = req.body
        const { apellido } = req.body
        const { rol } = req.body
        const { id } = req.params;
        const editedAdmin = await prisma.administradores.update({
            where: {
                id: parseInt(id)
            }, 
            data: {
                nombre: nombre,
                apellido: apellido,
                rol: rol
            }
        })
        return res.status(200).json({
            message: editedAdmin,
          });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            return res.status(404).json({
              message: "El admin no existe",
            });
          }
          console.log(error);
          return res.status(400).json({
            message: "Hubo un error",
          });
    }
}