import React from 'react'

export function SobreMiData({label, data}) {
    return (
        <div className='text-[18px]'>
            <p className='font-[700]'>{label}</p>
            <p>{data}</p>
        </div>
    )
}