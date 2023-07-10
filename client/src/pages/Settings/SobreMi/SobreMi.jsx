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
            <EditButton />
            <div className='flex flex-col gap-10 mt-10'>
                <SobreMiData label="Describe cómo eres" data={sobreMiUserData.comoEres} />
                <SobreMiData label="Cuáles son tus metas para aprender idiomas?" data={sobreMiUserData.tusMetas} />
                <SobreMiData label="De qué te gusta hablar?" data={sobreMiUserData.gustosConversacion} />
            </div>
        </>
    )
}