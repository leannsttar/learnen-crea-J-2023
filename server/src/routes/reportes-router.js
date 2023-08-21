const express = require("express");
const { createReport, obtenerReportes } = require("../controladores/reportes-controlador.js");

const routerReport = express.Router();

routerReport.post("/", createReport);
routerReport.get("/", obtenerReportes);

module.exports = {
  routerReport
};
