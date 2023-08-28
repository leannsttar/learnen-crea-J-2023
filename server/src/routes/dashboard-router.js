const express = require("express");
const router = express.Router();
const dashboardController = require("../controladores/dashboard-controlador.js");

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/login', async (req, res) => {
    const { email, contrasenia } = req.body;
  
    try {
      const isAuthenticated = await dashboardController.authenticateAdmin(email, contrasenia);
      if (isAuthenticated) {
        res.status(200).json({ message: 'Autenticación exitosa' });
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });
  


router.get("/dashboard/countUsers", dashboardController.countUsers);
router.get("/dashboard/countPosts", dashboardController.countPosts);
router.get("/dashboard/countLanguages", dashboardController.countLanguages);
router.get('/dashboard/allReports', dashboardController.getAllReports);


router.get("/dashboard/lenguajes", dashboardController.allLanguages);
router.post("/dashboard/lenguajes", upload.single("imagen_bandera"), dashboardController.createLanguage);
router.put("/dashboard/lenguajes", upload.single("imagen_bandera"), dashboardController.updateLanguage);
router.delete("/dashboard/lenguajes", dashboardController.deleteLanguage);

router.get("/dashboard/administradores", dashboardController.allAdmins);
router.post("/dashboard/administradores", dashboardController.createAdmin);
router.put("/dashboard/administradores", dashboardController.updateAdmin);
router.delete("/dashboard/administradores", dashboardController.deleteAdmin);

module.exports = router;
