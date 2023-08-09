import z, { ZodError } from "zod";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";

const prisma = new PrismaClient();

const commentsModel = z.object({
  comentario: z.string().max(500).min(20),
});

export const createComment = async function (req, res) {
  try {
    const validadeComments = commentsModel.parse(req.body);
    const creadComments = await prisma.comentarios.create({
      data: {
        ...validadeComments,
      },
    });
    return res.status(200).json(creadComments);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(400).json({
      message: "error",
    });
  }
};

export const deleteComment = async function (req, res) {
  try {
    const { id } = req.params;
    const deleteUser = await prisma.comentarios.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      message: "El comentario ha sido eliminada !",
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

export const showComments = async function (req, res) {
  try {
    const comments = await prisma.comentarios.findMany();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};

export const getCommentById = async function (req, res) {
  try {
    const { id } = req.params;
    const comment = await prisma.comentarios.findFirst({
      where: {
        id: parseInt(id),
      },
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

export const updateComment = async function (req, res) {
  try {
    const { id } = req.params;
    const { comentario } = req.body;
    const comment = await prisma.comentarios.update({
      where: {
        id: parseInt(id),
      },
      data: {
        comentario: comentario,
      },
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
