const { PrismaClient } = require("@prisma/client");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library.js");


const prisma = new PrismaClient

const getAllUsuarios = async function (req, res) {
  try {

    console.log("----------", req.usuario)
    const usuarios = await prisma.cliente.findMany({
      where: {
        NOT: {
          id: req.usuario.id
        }
      }
    });

    return res.status(200).json({
      message: usuarios,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Hubo un error",
    });
  }
};

module.exports = {
  getAllUsuarios,
};
