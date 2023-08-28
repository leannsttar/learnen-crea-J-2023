const { PrismaClient } = require("@prisma/client");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library.js");
const fs = require("fs");

const prisma = new PrismaClient();

const countUsers = async (req, res) => {
  try {
    const users = await prisma.cliente.count();
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al obtener el número de usuarios" });
  }
};

const countPosts = async (req, res) => {
  try {
    const posts = await prisma.publicaciones.count();
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al obtener el número de publicaciones" });
  }
};

const getAllReports = async (req, res) => {
  try {
    const reports = await prisma.reportes.findMany();
    return res.status(200).json(reports);
  } catch (error) {
    console.log(reports);

    return res.status(500).json({ error: "Error al obtener los reportes" });
  }
};

const countLanguages = async (req, res) => {
  try {
    const languages = await prisma.idiomas.count();
    return res.status(200).json(languages);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al obtener el número de idiomas" });
  }
};

const latestUsers = async (req, res) => {
  try {
    const usuarios = await prisma.cliente.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
    return res.status(200).json(usuarios);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al obtener los últimos usuarios" });
  }
};

//CRUD IDIOMAS
const allLanguages = async (req, res) => {
  try {
    const idiomas = await prisma.idiomas.findMany();
    return res.status(200).json(idiomas);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al obtener los idiomas" });
  }
};

const createLanguage = async (req, res) => {
  try {
    console.log(req.file.originalname);

    if (!req.file || !req.file.originalname) {
      console.log("no se mando nada");
      console.log(req.file.originalname);
    }

    fs.writeFile(
      "./public/images/idiomas_banderas/" + req.file.originalname,
      req.file.buffer,
      (err) => {
        if (err) throw err;
      }
    );

    const { idioma } = req.body;

    const createdLanguage = await prisma.idiomas.create({
      data: {
        idioma: idioma,
        imagen_bandera: "/idioma_banderas/" + req.file.originalname,
      },
    });
    return res
      .status(200)
      .json({ message: "Idioma añadido", data: createdLanguage });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al crear el idioma" });
  }
};

const updateLanguage = async (req, res) => {
  try {
    if (!req.file || !req.file.originalname) {
      const { idioma, idioma_id } = req.body;
      const updatedLanguage = await prisma.idiomas.update({
        where: {
          id: parseInt(idioma_id),
        },
        data: {
          idioma: idioma,
        },
      });
      return res
        .status(200)
        .json({ message: "Idioma actualizado", data: updatedLanguage });
    } else if (req.file.originalname && req.body.idioma) {
      console.log(req.file.originalname);

      if (!req.file || !req.file.originalname) {
        console.log("no se mando nada");
        console.log(req.file.originalname);
      }

      fs.writeFile(
        "./public/images/idiomas_banderas/" + req.file.originalname,
        req.file.buffer,
        (err) => {
          if (err) throw err;
        }
      );

      const { idioma, idioma_id } = req.body;
      const updatedLanguage = await prisma.idiomas.update({
        where: {
          id: parseInt(idioma_id),
        },
        data: {
          idioma: idioma,
          imagen_bandera: "/idioma_banderas/" + req.file.originalname,
        },
      });
      return res
        .status(200)
        .json({ message: "Idioma actualizado", data: updatedLanguage });
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return res.status(404).json({
        message: "El idioma no existe",
      });
    }
    console.log(error);
    return res.status(400).json({
      message: "Hubo un error actualizando el idioma",
    });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLanguage = await prisma.idiomas.delete({
      where: {
        id: parseInt(id),
      },
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
};

//Admin
const allAdmins = async (req, res) => {
  try {
    const admins = await prisma.administradores.findMany();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los admins" });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { nombre } = req.body;
    const { rol } = req.body;
    const createdAdmin = await prisma.administradores.create({
      data: {
        nombre: nombre,
        rol: rol,
      },
    });
    return res.status(200).json(createdAdmin);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el administrador" });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await prisma.administradores.delete({
      where: {
        id: parseInt(id),
      },
    });
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
};

const updateAdmin = async (req, res) => {
  try {
    const { nombre } = req.body;
    const { apellido } = req.body;
    const { rol } = req.body;
    const { id } = req.params;
    const editedAdmin = await prisma.administradores.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre: nombre,
        apellido: apellido,
        rol: rol,
      },
    });
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
};

//Login del admin xd

const authenticateAdmin = async (email, contrasenia) => {
  try {
    const admin = await prisma.administradores.findFirst({
      where: {
        email,
        contrasenia,
      },
    });

    return admin !== null;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  countUsers,
  countLanguages,
  countPosts,
  latestUsers,
  allLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
  allAdmins,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  getAllReports,
  authenticateAdmin
};
