const prisma = require("../config/prisma")

const misChats = async (req,res) => { 
    try {
        const mensajes = await prisma.mensajes.findMany({
            where: {
                OR: [
                    {id_cliente_envia: req.usuario.id},
                    {id_cliente_recibe: req.usuario.id}
                ]
            }
        })
        
        //Cambia el array de mensaje para que el id del usuario que hizo la peticion no apresca
        const mensajesSinUsuarioID = mensajes.map(mensaje => {
            //Tengo 2 ids de usaurios
            //El q envia el mensaje
            //El q recibe el mensaje

            //Tengo que checar si mi ID es el el de recibir o el de enviar
            if(mensaje.id_cliente_envia == req.usuario.id){
                //Ahora se cual soy si el que envia o el que recibe
                //simplemente lo borro porque quiero el id de la otra persona no el mio
                delete mensaje.id_cliente_envia;
            }
            if(mensaje.id_cliente_recibe == req.usuario.id){
                //Ahora se cual soy si el que envia o el que recibe
                //lo mismo de arriba
                delete mensaje.id_cliente_recibe;
            }

            //Ahora es el mismo objeto del mensaje solamente que sin mi id
            return mensaje
        })

        //Con esto obtengo el id de las personas con las que yo he conversado
        const idPersonasChatDuplicado = mensajesSinUsuarioID.map(mensaje => {
            //Como hemos borrado un id cliente necesitamos saber cual es el que existe aun
            if(mensaje.id_cliente_envia) return mensaje.id_cliente_envia
            if(mensaje.id_cliente_recibe) return mensaje.id_cliente_recibe
        })

        //Ahora el problema es que se repite el id pero se soluciona facil con este codigoxd
        const idPersonasChat = [...new Set(idPersonasChatDuplicado)]

        //Ahora solo busco la informacion de cada uno de estas personas

        const personasChats = await prisma.cliente.findMany({
            where: {
                id: {in: idPersonasChat}
            },
            include: {
                mensajes_enviados: {
                    
                    where: {
                        OR: [
                            {id_cliente_envia: req.usuario.id},
                            {id_cliente_recibe: req.usuario.id}
                        ]
                    },

                    take: 1,
                    orderBy: {fecha: 'desc'}
                },
                mensajes_recibidos: {
                    
                    where: {
                        OR: [
                            {id_cliente_envia: req.usuario.id},
                            {id_cliente_recibe: req.usuario.id}
                        ]
                    },

                    take: 1,
                    orderBy: {fecha: 'desc'}
                },
            }
        })


        //Va este es el ultimo, aca solo quiero unir los menajes enviados con los recibidos de los usuarios con los que he chateado
        const personasChat = personasChats.map(chat => {
            chat.mensajes = [...chat.mensajes_recibidos, ...chat.mensajes_enviados]
            return chat;
        })

        return res.json(personasChat);
    } catch (error) {
        return res.status(400).json(error)
    }
}
module.exports = {misChats}