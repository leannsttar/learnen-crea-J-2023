const express = require('express');
const router = express.Router();
const registerController = require('../controladores/register-controlador.js');

router.post('/register', registerController.createUser);

module.exports = router;