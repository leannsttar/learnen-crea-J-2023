import React from 'react'
import editProfile from '../../../assets/editProfile.svg'

export function EditButton() {
    return (
        <button className='flex gap-3 items-center font-[600] text-[16px]'>
            <img src={editProfile} alt="" />
            <p className='text-[#FF8399]'>Editar</p>
        </button>
    )
}