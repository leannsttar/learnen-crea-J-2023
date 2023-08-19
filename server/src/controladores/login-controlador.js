const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

 

  try {
    const user = await prisma.cliente.findFirst({
      where: { 
        correo: email 
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log(user.contrasenia)

    const passwordValid = await bcrypt.compare(password, user.contrasenia)  

    if (!passwordValid) {
      return res.status(500).json({message: "Contraseña incorrecta"})
    }
    
    console.log(passwordValid)


    console.log(user);



    //token
    const token = jwt.sign({ userId: user.id }, "tu_secreto");

    console.log(token);

    res.json({
      message: "Login exitoso",
      token,
      ...user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

module.exports = {
  loginUser,
};
