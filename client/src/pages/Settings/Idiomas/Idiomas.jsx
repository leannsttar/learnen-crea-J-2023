import React from 'react'
import { DiffLanguages } from './DiffLanguages'
import { flags } from '../../../data/languages'

const userLanguages = {
    motherLanguages: ["Alemán", flags.Aleman],
    fluentLanguages: [["Francés", flags.Frances]],
    learningLanguages: [
        ["Griego", flags.Griego],
        ["Francés", flags.Frances],
    ],
};

export function Idiomas() {
    return (
        <div className='flex flex-col gap-12    '>
            <DiffLanguages label="Soy nativo en" languages={userLanguages.motherLanguages} />
            <DiffLanguages label="También hablo" languages={userLanguages.fluentLanguages} />
            <DiffLanguages label="Estoy aprendiendo" languages={userLanguages.learningLanguages} />
        </div>
    )
}