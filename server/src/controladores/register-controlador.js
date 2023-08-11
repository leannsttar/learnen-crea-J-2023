const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require('fs');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const usuarioData = req.body;

    const plainPassword = usuarioData.password && usuarioData.password_ok;

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Verificar si el correo ya está registrado en la base de datos
    const existingUser = await prisma.cliente.findUnique({
      where: {
        correo: usuarioData.email
      }
    });

    if (existingUser) {
      return res.status(400).json({ message: "El correo electrónico ya está registrado" });
    }

    fs.writeFile("./public/images/perfil/" + req.file.originalname, req.file.buffer, (err) => {
      if (err) throw err;
    });

    const usuarioCreado = await prisma.cliente.create({
      data: {
        nombre: usuarioData.Name,
        apellido: usuarioData.Lastname,
        correo: usuarioData.email,
        contrasenia: hashedPassword,
        contrasenia_ok: hashedPassword,
        genero: usuarioData.sex == 'Masculino',
        imagen_perfil: "/perfil/" + req.file.originalname,
        me_gusta: usuarioData.topics,
        objetivos: usuarioData.goals,
        como_soy: usuarioData.aboutYou,
        fecha_nacimiento: usuarioData.BirthDate
      }
    });

    return res.json({ message: "Usuario registrado", data: usuarioCreado });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  createUser,
};

