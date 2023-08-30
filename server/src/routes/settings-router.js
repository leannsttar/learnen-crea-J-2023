const express = require('express');
const router = express.Router();
const settingsController = require('../controladores/settings-controlador.js');

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.put('/settings/imagen', upload.single("imagen_perfil")
,settingsController.updatePhoto);

router.put('/settings/sobremi', settingsController.updateProfileInfo);
router.put('/settings/cuentaInfo', settingsController.updateAccountInfo)
router.get("/settings/likes/:id", settingsController.getLikedPosts)
router.put("/settings/idiomas", settingsController.updateUserLanguages)

module.exports = router;