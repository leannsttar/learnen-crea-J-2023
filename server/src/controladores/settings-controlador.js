const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const bcrypt = require("bcrypt");

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

const updateAccountInfo = async (req, res) => {
  try {
    console.log(req.body);
    const {
      id,
      nombre,
      apellido,
      fecha_nacimiento,
      correo,
      contrasenia,
      newContrasenia,
    } = req.body;

    console.log(id);

    const updatedAccount = await prisma.cliente.update({
      where: {
        id: +id,
      },
      data: {
        id,
        nombre,
        apellido,
        fecha_nacimiento,
        correo,
      },
    });

    if (contrasenia) {
      const newHashedPassword = await bcrypt.hash(newContrasenia, 10);

      const getPassword = await prisma.cliente.findFirst({
        where: {
          id: +id,
        },
      });

      const valid = await bcrypt.compare(contrasenia, getPassword.contrasenia);
      console.log(valid);
      console.log(getPassword.contrasenia);
      console.log(contrasenia);

      if (valid) {
        const newPassword = await prisma.cliente.update({
          where: {
            id: +id,
          },
          data: {
            contrasenia: newHashedPassword,
          },
        });
        return res.json({
          message: "Contraseña actualizada",
          data: updatedAccount,
        });
      } else {
        return res.json({
          message: "Contraseñas no son iguales",
          data: { contrasenia, getPassword },
        });
      }
    }

    return res.json({
      message: "Datos sobre mi actualizados",
      data: updatedAccount,
    });

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al actualizar info de cuenta" });
  }
};

const getLikedPosts = async (req, res) => {
  try {

    console.log(req.params.id)

    const allPosts = await prisma.publicaciones.findMany({
      where: {
        id_cliente: +req.params.id,
      },
      include: {
        Likes: true,
        cliente: true,
      },
    });
    const postsWithLikesCount = allPosts.map((post) => ({
      ...post,
      numLikes: post.Likes.length,
    }));

    res.json(postsWithLikesCount);
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: "Error al obtener las publicaciones" });
  }
}

const updateUserLanguages = async (req, res) => {
  try {
    const { id, idioma_materno, idiomas_fluidos, idiomas_aprendiendo } = req.body

    console.log(req.body)

    const languagesUpdated = await prisma.cliente.update({
      where: {
        id: +id
      },
      data: {
        idioma_materno,
        idiomas_fluidos,
        idiomas_aprendiendo
      }
    })

    return res.json({
      message: "Idiomas actualizados",
      data: languagesUpdated,
    });

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error al editar los idiomas" });
  }
}

module.exports = {
  updatePhoto,
  updateProfileInfo,
  updateAccountInfo,
  getLikedPosts,
  updateUserLanguages
};
