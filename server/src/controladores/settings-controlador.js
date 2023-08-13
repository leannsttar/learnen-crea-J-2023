const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");

const updatePhoto = async (req, res) => {
  try {
    if (!req.file || !req.file.originalname) {
      console.log("no se mando nada");
      console.log(req.file.originalname);
    }

    fs.writeFile(
      "./public/images/perfil/" + req.file.originalname,
      req.file.buffer,
      (err) => {
        if (err) throw err;
      }
    );

    const imageUpdated = await prisma.cliente.update({
      where: {
        id: +req.body.id,
      },
      data: {
        imagen_perfil: "/perfil/" + req.file.originalname,
      },
    });

    return res.json({ message: "Imagen actualizada", data: imageUpdated });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
};

const updateProfileInfo = async (req, res) => {
  try {
    const { id, como_soy, objetivos, me_gusta } = req.body;

    console.log(req.body);
    const updatedUser = await prisma.cliente.update({
      where: {
        id: +id,
      },
      data: {
        como_soy: como_soy,
        objetivos: objetivos,
        me_gusta: me_gusta,
      },
    });

    return res.json({
      message: "Datos sobre mi actualizados",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

module.exports = {
  updatePhoto,
  updateProfileInfo,
};
