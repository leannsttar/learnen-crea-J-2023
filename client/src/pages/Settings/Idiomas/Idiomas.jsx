import React from 'react'
import { DiffLanguages } from './DiffLanguages'
import { flags } from '../../../data/languages'
import { allLanguages } from '../../../data/languages';

const userLanguages = {
    motherLanguages: [["Alemán", flags.Aleman]],
    fluentLanguages: [["Portugués", flags.Portugues]],
    learningLanguages: [
        ["Griego", flags.Griego],
        ["Francés", flags.Frances],
    ],
};

export function Idiomas() {
    return (
        <div className='flex flex-col gap-12'>
            <DiffLanguages label="Soy nativo en" languages={userLanguages.motherLanguages} allUserLanguages={userLanguages} native allLanguages={allLanguages}/>
            <DiffLanguages label="También hablo" languages={userLanguages.fluentLanguages} allUserLanguages={userLanguages} fluent allLanguages={allLanguages}/>
            <DiffLanguages label="Estoy aprendiendo" languages={userLanguages.learningLanguages} allUserLanguages={userLanguages} learning allLanguages={allLanguages}/>
        </div>
    )
}