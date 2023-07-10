import React from 'react'
import editProfile from '../../../assets/editProfile.svg'

export function EditInfoAccount({dataName, dataUser}) {
    return (
        <div className='flex border-b-2 border-[#e2e2e2] py-4 text-[20px] justify-between'>
            <div className='flex gap-8'>
            <p className='font-[600]'>{dataName}</p>
            <p className='font-[300]'>{dataUser}</p>
            </div>
            <div>
                <button className='flex gap-3 items-center font-[600] text-[16px]'>
                    <img src={editProfile} alt="" />
                    <p className='text-[#FF8399]'>Editar</p>
                </button>
            </div>
        </div>
    )
}