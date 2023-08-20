const {
  createComment,
  getCommentById,
  getCommentCount,
} = require('../controladores/comentarios-controlador')

const { Router } = require("express");
const commentsRoutes = Router();

commentsRoutes.route("/:id").post(createComment).get(getCommentById);

commentsRoutes.route("/:id/count").get(getCommentCount);

module.exports = {
  commentsRoutes,
};
