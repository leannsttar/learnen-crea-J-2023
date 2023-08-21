const express = require('express');
const Usuariosrouter = express.Router();

const { getAllUsuarios } = require('../controladores/obtenerUsuarios-controlador.js');
const { obtenerPerfilPorID } = require('../controladores/obtenerPerfilPorID-controlador.js');
const { auth } = require('../middleware/auth.js');

Usuariosrouter.get('/',auth, getAllUsuarios);
Usuariosrouter.get("/:id", obtenerPerfilPorID)

module.exports = Usuariosrouter;
