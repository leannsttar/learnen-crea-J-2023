const express = require('express');
const router = express.Router();
const loginController = require('../controladores/login-controlador.js');

router.post('/auth/login', loginController.loginUser); 

module.exports = router;