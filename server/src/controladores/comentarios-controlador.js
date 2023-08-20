const z = require("zod");
const { ZodError } = require("zod");
const { PrismaClient } = require("@prisma/client");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library.js");

const prisma = new PrismaClient();

const commentsModel = z.object({
  comentario: z.string().max(40).min(3),
  id_cliente: z.number(),
});

const createComment = async function (req, res) {
  console.log(req.body);
  try {
    const validadeComments = commentsModel.parse(req.body);
    const { id } = req.params;
    const creadComments = await prisma.comentarios.create({
      data: {
        descripcion: validadeComments.comentario,
        id_publicacion: parseInt(id),
        id_cliente: validadeComments.id_cliente,
      },
    });
    return res.status(200).json(creadComments);
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(400).json({
      message: "error",
    });
  }
};

const getCommentById = async function (req, res) {
  console.log(req.params);
  try {
    const { id } = req.params;
    const comment = await prisma.comentarios.findMany({
      where: {
        id_publicacion: parseInt(id),
      }, include: {
        cliente: true,
        
      }
    });
    return res.status(200).json({
      message: comment,
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return res.status(404).json({
        message: "El comentario no existe",
      });
    }
    console.log(error);
    return res.status(400).json({
      message: "Hubo un error",
    });
  }
};

module.exports = {
  createComment,
  getCommentById,
};
