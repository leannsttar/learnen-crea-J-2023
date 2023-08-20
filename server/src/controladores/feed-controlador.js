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

      const idioma = req.body.idioma;
      const descripcion = req.body.descripcion;

      // const imageBuffer = await sharp(req.file.buffer)
      // .resize(800)
      // .toFormat("jpeg")
      // .toBuffer();

      // const folderPath = path.join(__dirname, '../../public/images/postImages');
      // const fileName = `imagenPost-${Date.now()}.jpeg`;
      // const imagePath = path.join(folderPath, fileName);

      // await sharp(imageBuffer).toFile(imagePath);

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
    const allPosts = await prisma.publicaciones.findMany();
    res.json(allPosts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al obtener las publicaciones" });
  }
};

<<<<<<< HEAD
//get
const likepost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await prisma.publicaciones.findFirst({
      where: {
        id: +id,
      }, 
      include: { 
        Likes: true
      }
      
    });

    res.json(post.Likes.length);
  } catch (error) {
    return res
    .status(500)
    .json({ error: "Error al obtener el número de likes" });
    console.log(error)
  }
};

const setlikes = async (req, res) => {
  try {
    const {id_cliente, id_publicacion} = req.body
    const like = await prisma.likes.create({
      data: { id_publicacion: +id_publicacion, id_cliente: +id_cliente },
    });

    res.json(like)
  } catch (error) {
    console.log(error)
    return res
    .status(500)
    .json({ error: "Error al registrar el like" });
  }
};

const deleteLike = async (req, res) => {
  try {
    const {id_cliente, id_publicacion} = req.params

    console.log(id_cliente, id_publicacion)

    const like = await prisma.likes.findFirst({
      where: {
        id_publicacion: +id_publicacion,
        id_cliente: +id_cliente
      }
    })

    const deletedLike = await prisma.likes.delete({
      where: {
        id: like.id
      },
    })

    return res.json(deletedLike)

  } catch (error) {
    console.log(error)
    return res
    .status(500)
    .json({ error: "Error al eliminar el like" });
  }
}

const alreadyLiked = async (req, res) => {
  try {
    const {id_cliente, id_publicacion} = req.params

    const like = await prisma.likes.findFirst({
      where: {
        id_publicacion: +id_publicacion,
        id_cliente: +id_cliente
      }
    })

    if (!like) {
      return res.status(404).json({message: "Like no encontrado"})
    }

    return res.json(like)

  } catch (error) {
    
  }
}

=======
>>>>>>> 0c71a043d43d6d44e430d7eca6a818c69eda7be2
module.exports = {
  createPost,
  readPosts,
  setlikes,
  likepost,
  deleteLike
};
