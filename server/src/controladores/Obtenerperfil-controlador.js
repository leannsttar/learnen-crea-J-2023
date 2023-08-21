const jwt = require('jsonwebtoken');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const obtenerPerfilPorToken = async (req, res) => {
  try {
    const autorizacion = req.headers.authorization;
    if (autorizacion && autorizacion.startsWith("Bearer ")) {
      console.log(autorizacion)

      const token = autorizacion.split(" ")[1];
      const credenciales = jwt.verify(token, 'tu_secreto');
      console.log(credenciales);
      let usuarioEncontrado = await prisma.cliente.findFirst({
        where: {
          id: credenciales.userId,
        },
      });
      if (!usuarioEncontrado) {
        usuarioEncontrado = await prisma.administradores.findFirst({
          where: {
            id: credenciales.userId,
          },
        });
      }
      if (!usuarioEncontrado.id) {
        return res.status(400).json({
          message: "Usuario o contraseña no son los correctos",
        });
      }

      console.log(token)
      return res.status(200).json(usuarioEncontrado);
    } else {
      return res.status(403).json({
        message: "No estas autenticado",
      });
    }
  } catch (error) {
    console.log(error)

    return res.status(403).json({
      message: "No estas autenticado",
    });
  }
};

module.exports = {
  obtenerPerfilPorToken,
};
