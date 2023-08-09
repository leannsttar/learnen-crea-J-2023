import {
    createComment,
    showComments,
    deleteComment,
    getCommentById,
    updateComment,
  } from "../controladores/comentarios-controlador.js";
  import { Router } from "express";
  
  export const commentsRoutes = Router();
  
  commentsRoutes.route("/feed").post(createComment).get(showComments);
  
  commentsRoutes
    .route("/:id")
    .delete(deleteComment)
    .get(getCommentById)
    .put(updateComment);
  