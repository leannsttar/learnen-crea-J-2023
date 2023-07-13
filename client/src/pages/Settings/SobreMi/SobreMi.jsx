import React from 'react'
import { SobreMiData } from './SobreMiData'
import { EditButton } from './editButton'

export function SobreMi() {

    const sobreMiUserData = {
        comoEres: "Reservada, tímida pero muy empática",
        tusMetas: "Vivir en otro pais",
        gustosConversacion: "Los deportes, la comida, los idiomas y los libros"
    }

    return (
        <>
            <EditButton size="w-10" fontSize={'text-[25px]'}/>
            <div className='flex flex-col gap-10 mt-10 text-[23px]'>
                <SobreMiData label="Describe cómo eres" data={sobreMiUserData.comoEres} />
                <SobreMiData label="Cuáles son tus metas para aprender idiomas?" data={sobreMiUserData.tusMetas} />
                <SobreMiData label="De qué te gusta hablar?" data={sobreMiUserData.gustosConversacion} />
            </div>
        </>
    )
}