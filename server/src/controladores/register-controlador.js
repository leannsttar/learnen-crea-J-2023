const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const createUser = async (req, res) => {
  
  try {
    console.log(req.body)
    console.log(req.file)

    res.json({ message: "Usuario registrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  createUser,
};
