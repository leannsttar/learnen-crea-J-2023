import React from 'react';

const blockedUsers = [
    {
        src: "/assets/Female.png",
        name: "Emily Tate",
    },
    {
        src: "/assets/Female.jpg",
        name: "Nacely Orellana",
    },
    {
        src: "/assets/Female.jpg",
        name: "Leandra Alberta",
    },
    {
        src: "/assets/Female.jpg",
        name: "Alicia Martinez",
    },
    {
        src: "/assets/Female.jpg",
        name: "Karla Sanchez",
    },
    {
        src: "/assets/Female.jpg",
        name: "Alisson Rojas",
    },
    {
        src: "/assets/Female.jpg",
        name: "Alisson Rojas",
    },
    {
        src: "/assets/Female.jpg",
        name: "Alisson Rojas",
    },

    {
        src: "/assets/Female.jpg",
        name: "Alisson Rojas",
    },
]

export function Bloqueados() {
    return (
        <>
            <div className='flex flex-row space-y-8 space-x-11 w-full justify-around items-center flex-wrap'>
                {blockedUsers.map((usuarios, index) => (
                        <div key={index} className='flex p-1 w-1/4 space-x-1 items-center'>
                            <div className='flex  p-1 w-full justify-around items-center'>
                                <div className='rounded-full w-14'>
                                    <img className='w-fit rounded-full' src={usuarios.src} alt="Female" srcset="" />
                                </div>
                                <div>
                                    <p className='text-md font-Poppins font-medium'>{usuarios.name}</p>
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <button className='w-full h-14 rounded-xl bg-black text-white text-xl hover:bg-white hover:text-black hover:border-black hover:border-2'>Desbloquear</button>
                            </div>
                        </div>


                ))}

            </div>
        </>
    )
}