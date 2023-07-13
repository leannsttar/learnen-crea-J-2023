import React from 'react'
import { EditButton } from '../SobreMi/editButton'

export function DiffLanguages({ label, languages }) {
    return (
        <div className='flex flex-col gap-5 text-[20px]'>
            <div className='flex justify-between border-b-2 border-[#e2e2e2] py-4 '>
                <p>{label}</p>
                <EditButton />
            </div>
            {languages.map((language, index) => {
                <div key={index} className='flex gap-4'>
                    <img src={language[1]} alt="" />
                    <p>{language[0]}</p>
                </div>
            })}
        </div>
    )
}