const z = require("zod");
const prisma = require("../config/prisma");

const enviarMensaje = async (req,res) => {
    try {
        const {id} = req.params;

        const mensajeDatos = z.object({
            mensaje: z.string()
        }).parse(req.body);

        const usuarioRecibeID = id; //de la url
        const usuarioEnviaMensaje = req.usuario.id // lo toma del middleware 'auth'

        const nuevoMensaje = await prisma.mensajes.create({
            data: {
                mensaje: mensajeDatos.mensaje,
                id_cliente_envia: usuarioEnviaMensaje,
                id_cliente_recibe: +usuarioRecibeID
            },
            include: {
                cliente_envia: true,
                cliente_recibe: true
            }
        })

        return res.json(nuevoMensaje)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }
}

module.exports = {enviarMensaje}