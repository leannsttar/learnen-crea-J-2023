const express = require('express');
const router = express.Router();
const registerController = require('../controladores/register-controlador.js');

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.post('/register', upload.single("photoProfile")
,registerController.createUser);

module.exports = router;
