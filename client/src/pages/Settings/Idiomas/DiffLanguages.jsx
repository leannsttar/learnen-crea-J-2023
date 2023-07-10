import React from 'react'
import { EditButton } from '../SobreMi/editButton'

export function DiffLanguages({ label, languages }) {
    return (
        <div className='flex flex-col gap-5 text-[20px]'>
            <div className='flex justify-between border-b-2 border-[#e2e2e2] py-4 '>
                <p>{label}</p>
                <EditButton />
            </div>
            <div className='flex gap-4'>
                <img src={languages[1]} alt="" />
                <p>{languages[0]}</p>
            </div>
        </div>
    )
}