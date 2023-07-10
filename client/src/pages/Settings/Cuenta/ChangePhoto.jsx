import React from 'react'
import ConfigPhoto from '../../../assets/Female.png'

export function ChangePhoto() {
    return (
        <div>
            <div className='flex items-center gap-12'>
                <img src={ConfigPhoto} alt="" />
                <button className='hover:bg-[#364C97] bg-black text-white p-3 rounded-xl'>Cambiar foto de perfil</button>
            </div>
            <div></div>
        </div>
    )
}