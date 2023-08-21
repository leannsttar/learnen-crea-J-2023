const prisma = require("../config/prisma")

const obtenerPerfilPorID = async (req,res) => { 
    try {
        const perfil = await prisma.cliente.findFirst({
            where: {id: +req.params.id}
        })

        return res.json(perfil);
    } catch (error) {
        return res.status(400).json({message: "No se encontro !"})
    }
}
module.exports = {obtenerPerfilPorID}