const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const createUser = async (req, res) => {
  const {
    email,
    password,
    password_ok,
    Name,
    Lastname,
    BirthDate,
    sex,
    motherLanguage,
    moreLenguages,
    photoProfile,
    languages,
    aboutYou,
    goals,
    topics,
  } = req.body;

  try {

    // const existingUser = await prisma.user.findUnique({ where: { email } });

    // if (existingUser) {
    //   return res.status(400).json({ message: "El usuario ya existe" });
    // }

    const newUser = await prisma.cliente.create({
      data: {
        correo: email,
        nombre: Name,
        apellido: Lastname,
        contrasenia: password,    
        contrasenia_ok: password_ok,  
        fecha_nacimiento: BirthDate,   
        genero: true,           //Si es True Fenemino, false masculino
        imagen_perfil: photoProfile,    
        me_gusta: aboutYou,         
        objetivos: goals,     
        como_soy: topics    
      },
    });

    res.json({ message: "Usuario registrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  createUser,
};
