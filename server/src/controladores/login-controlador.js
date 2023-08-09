const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email, password } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Login exitoso' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};

module.exports = {
  loginUser,
};
