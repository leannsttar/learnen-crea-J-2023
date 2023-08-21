const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const auth = async (req, res, next) => {

    try {
      const autorizacion = req.headers.authorization;
      if (autorizacion && autorizacion.startsWith("Bearer ")) {

        const token = autorizacion.split(" ")[1];
        const credenciales = jwt.verify(token, "tu_secreto");
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

        req.usuario = usuarioEncontrado;
        next();
      } else {
        return res.status(403).json({
          message: "No estas autenticado",
        });
      }
    } catch (error) {
      console.log(error);

      return res.status(403).json({
        message: "No estas autenticado",
      });
    }
};

module.exports = {auth}