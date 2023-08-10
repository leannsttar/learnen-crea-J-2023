import { Router } from "express";
import {
  countUsers,
  countPosts,
  countLanguages,
  lastestUsers,
  allLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
  allAdmins,
  createAdmin,
  deleteAdmin,
  updateAdmin,
} from "../controladores/dashboard-controlador.js";

export const dashboardRoutes = Router();

dashboardRoutes.route("/dashboard");

dashboardRoutes
  .route("/dashboard")
  .get(countUsers, countPosts, countLanguages, lastestUsers);

dashboardRoutes
  .route("/dashboard/lenguajes")
  .post(createLanguage)
  .delete(deleteLanguage)
  .get(allLanguages)
  .put(updateLanguage);

  dashboardRoutes
  .route("/dashboard/administradores")
  .post(createAdmin)
  .delete(deleteAdmin)
  .get(allAdmins)
  .put(updateAdmin);
