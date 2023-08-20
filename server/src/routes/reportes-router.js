const express = require("express");
const { createReport } = require("../controladores/reportes-controlador");

const routerReport = express.Router();

routerReport.post("/reports", createReport);

module.exports = {
  routerReport
};
