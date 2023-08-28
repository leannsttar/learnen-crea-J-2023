const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require('fs');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const usuarioData = req.body;

    const plainPassword = usuarioData.password && usuarioData.password_ok;

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    let imagen = "perfil-default.png"
    // Verificar si el correo ya está registrado en la base de datos
    const existingUser = await prisma.cliente.findFirst({
      where: {
        correo: usuarioData.email
      }
    });

    if (existingUser) {
      return res.status(400).json({ message: "El correo electrónico ya está registrado" });
    }
    if(req.file){
      fs.writeFile("./public/images/perfil/" + req.file.originalname, req.file.buffer, (err) => {
      if (err) throw err;
    });
    imagen = req.file.originalname
    }
    

    const usuarioCreado = await prisma.cliente.create({
      data: {
        nombre: usuarioData.Name,
        apellido: usuarioData.Lastname,
        correo: usuarioData.email,
        contrasenia: hashedPassword,
        contrasenia_ok: hashedPassword,
        genero: usuarioData.sex == 'Masculino',
        imagen_perfil: "/perfil/" + imagen,
        me_gusta: usuarioData.topics,
        objetivos: usuarioData.goals,
        como_soy: usuarioData.aboutYou,
        fecha_nacimiento: usuarioData.BirthDate,
        idioma_materno: usuarioData.mother_language,
        idiomas_fluidos: usuarioData.more_languages,
        idiomas_aprendiendo: usuarioData.languages
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

