const {
  createComment,
  getCommentById,
} = require('../controladores/comentarios-controlador')

const { Router } = require("express");
const commentsRoutes = Router();

commentsRoutes.route("/:id").post(createComment).get(getCommentById);

module.exports = {
  commentsRoutes,
};
