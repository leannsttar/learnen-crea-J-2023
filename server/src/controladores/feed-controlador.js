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


// const likepost = async (req, res ) => {
//   try {
//     const like = await prisma.publicaciones.findById(req.params.id)
//     if(likepost.like.filter(like => like.user.toString() === req.user.id).legth > 0){
//       return res.status(400).json({ msg: 'post con ecsito'})

//     }
//     likepost.like.unshift({user: req.user.id})

//     await post.save()
//     res.json(likepost.like)
//   } catch (error) {
//     console.error(err.message)
//     res.status(500).send('server error secso')
//   }
// }


module.exports = {
  createPost,
  readPosts,
};
