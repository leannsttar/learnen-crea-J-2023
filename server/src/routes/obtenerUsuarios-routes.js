const express = require('express');
const Usuariosrouter = express.Router();

const { getAllUsuarios } = require('../controladores/obtenerUsuarios-controlador.js');

Usuariosrouter.get('/', getAllUsuarios);

module.exports = Usuariosrouter;
