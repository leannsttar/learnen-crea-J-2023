  const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createReport = async (req, res) => {
  try {
    const { descripcion, id_cliente, id_publicacion } = req.body;

    const report = await prisma.reportes.create({
      data: {
        descripcion,
        id_cliente,
        id_publicacion,
      },
    });

    return res.status(201).json(report);
  } catch (error) {
    console.error("Error al crear el reporte:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const obtenerReportes = async (req, res) => {
    try {
      const reportes = await prisma.reportes.findMany();
  
      return res.status(200).json({ reportes });
    } catch (error) {
      console.error("Error al obtener los reportes:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };

module.exports = {
  createReport,
  obtenerReportes
};
