const express = require("express");
const router = express.Router();
const dashboardController = require("../controladores/dashboard-controlador.js");

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get("/dashboard/countUsers", dashboardController.countUsers);
router.get("/dashboard/countPosts", dashboardController.countPosts);
router.get("/dashboard/countLanguages", dashboardController.countLanguages);

router.get("/dashboard/lenguajes", dashboardController.allLanguages);
router.post("/dashboard/lenguajes", upload.single("imagen_bandera"), dashboardController.createLanguage);
router.put("/dashboard/lenguajes", upload.single("imagen_bandera"), dashboardController.updateLanguage);
router.delete("/dashboard/lenguajes", dashboardController.deleteLanguage);

router.get("/dashboard/administradores", dashboardController.allAdmins);
router.post("/dashboard/administradores", dashboardController.createAdmin);
router.put("/dashboard/administradores", dashboardController.updateAdmin);
router.delete("/dashboard/administradores", dashboardController.deleteAdmin);

module.exports = router;
