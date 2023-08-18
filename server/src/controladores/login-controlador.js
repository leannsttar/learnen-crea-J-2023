const jwt = require('jsonwebtoken');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  try {
    const user = await prisma.cliente.findFirst({
      where: { correo: email, contrasenia: password },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    //token 
    const token = jwt.sign({ userId: user.id }, 'tu_secreto');

    console.log(token)

    res.json({
      message: "Login exitoso",
      token,
      ...user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

module.exports = {
  loginUser,
};
