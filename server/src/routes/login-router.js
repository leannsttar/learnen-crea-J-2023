const express = require('express');
const router = express.Router();
const loginController = require('../controladores/login-controlador.js');

router.post('/login', loginController.login);

module.exports = router;