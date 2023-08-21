const prisma = require("../config/prisma")

const obtenerMensajes = async (req,res) => { 
    try {
        const usuarioLogeado_ID = +req.usuario.id;
        const usuarioURL_ID = +req.params.id;

        const mensajes  = await prisma.mensajes.findMany({
            where: {
                AND:[
                  {id_cliente_envia: {in: [usuarioLogeado_ID, usuarioURL_ID]}},
                  {id_cliente_recibe: {in: [usuarioLogeado_ID, usuarioURL_ID]}}
                ]
            },
            orderBy: {
                fecha: 'asc'
            },
            include: {
                cliente_envia: true,
                cliente_recibe: true
            }
            
        })

        return res.json(mensajes);
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

module.exports = {obtenerMensajes}