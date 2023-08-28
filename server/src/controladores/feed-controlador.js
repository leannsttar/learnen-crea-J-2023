const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, (__dirname, "../server/public/images/postImages"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpeg");
  },
});
// const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const createPost = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err) {
        return res.status(400).send({ message: err.message });
      }

      const { id_cliente, idioma, descripcion } = req.body;

      console.log("waza");

      const processedImagePath = path.join(
        req.file.destination,
        "processed-" + req.file.filename
      );
      await sharp(req.file.path)
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toFile(processedImagePath);

      fs.unlinkSync(req.file.path);

      const newPost = await prisma.publicaciones.create({
        data: {
          id_cliente: +id_cliente,
          descripcion: descripcion,
          idioma: idioma,
          imagen: req.file.filename,
        },
      });

      res.json({
        message: "Publicación guardada",
      });
      console.log(req.file);
      console.log("Idioma:", idioma);
      console.log("Descripción:", descripcion);
    });
  } catch (error) {
    console.error("Error creando el post:", error);
    return res.status(500).json({ message: error });
  }
};

const readPosts = async (req, res) => {
  try {
    const allPosts = await prisma.publicaciones.findMany({
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
    return res
      .status(500)
      .json({ error: "Error al obtener las publicaciones" });
  }
};

const setlikes = async (req, res) => {
  try {
    const { id_cliente, id_publicacion } = req.body;
    const like = await prisma.likes.create({
      data: { id_publicacion: +id_publicacion, id_cliente: +id_cliente },
    });

    res.json(like);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al registrar el like" });
  }
};

const deleteLike = async (req, res) => {
  try {
    const { id_cliente, id_publicacion } = req.params;

    console.log(id_cliente, id_publicacion);

    const like = await prisma.likes.findFirst({
      where: {
        id_publicacion: +id_publicacion,
        id_cliente: +id_cliente,
      },
    });

    const deletedLike = await prisma.likes.delete({
      where: {
        id: like.id,
      },
    });

    return res.json(deletedLike);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al eliminar el like" });
  }
};

const alreadyLiked = async (req, res) => {
  try {
    const { id_cliente, id_publicacion } = req.params;

    const like = await prisma.likes.findFirst({
      where: {
        id_publicacion: +id_publicacion,
        id_cliente: +id_cliente,
      },
    });

    if (!like) {
      return res.status(404).json();
    }

    return res.json({ message: "Like" });
  } catch (error) {
    return res.status(500).json({ error: "Error al encontrar el like" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const post = await prisma.publicaciones.findUnique({
      where: { id: parseInt(id) },
    });

    if (!post) {
      return res.status(404).json({ error: "Publicación no encontrada" });
    }

    if (post.id_cliente !== req.usuario.id) {
      return res
        .status(403)
        .json({ error: "No tienes permisos para eliminar esta publicación" });
    }

    await prisma.publicaciones.delete({ where: { id: parseInt(id) } });

    return res
      .status(200)
      .json({ message: "Publicación eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Hubo un error al eliminar la publicación" });
  }
};

const getUserImages = async (req, res) => {
  try {
    const userId = req.usuario.id;

    const userPosts = await prisma.publicaciones.findMany({
      where: { id_cliente: +req.params.id },
      select: { imagen: true },
    });

    const numPublicaciones = userPosts.length;

    return res.status(200).json({
      images: userPosts.map((post) => post.imagen),
      numPublicaciones,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Hubo un error al obtener las imágenes" });
  }
};



module.exports = {
  createPost,
  readPosts,
  setlikes,
  deleteLike,
  alreadyLiked,
  deletePost,
  getUserImages
};
