const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  fs = require('fs')

const createUser = async (req, res) => {
  
  try {
    const usuarioData = req.body;

    fs.writeFile("./public/images/perfil/"+req.file.originalname, req.file.buffer, (err)=>{
      if(err) throw err
    });

    const usuarioCreado = await prisma.cliente.create({
      data: {
        nombre: usuarioData.Name,
        apellido: usuarioData.Lastname,
        correo: usuarioData.email,
        contrasenia: usuarioData.password,
        contrasenia_ok: usuarioData.password_ok,
        genero: usuarioData.sex=='Masculino',
        imagen_perfil: "/public/images/perfil/"+req.file.originalname,
        me_gusta: usuarioData.topics,
        objetivos: usuarioData.goals,
        como_soy: usuarioData.aboutYou,
        fecha_nacimiento: usuarioData.BirthDate
      }
    })

    return res.json({ message: "Usuario registrado", data: usuarioCreado });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  createUser,
};
