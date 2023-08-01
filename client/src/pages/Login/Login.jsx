import React, { useState } from 'react';
import learnenLogo from '../../assets/logo_no_text.svg';

const data = [
    {
        src: "/assets/slider-blog2.jpg",
        text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
        author: "Maestra Marielos",
    },
    {
        src: "/assets/slider-blog4.jpg",
        text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
        author: "Maestra Marielosssssss",
    },
];

export function Login() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='grid grid-cols-2 gap-2 place-items-center font-Poppins'>
            <div className='flex flex-col space-y-12'>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold'>Inicia Sesión</h1>
                    <p className='text-xl'>¡Nos alegra verte de vuelta!</p>
                </div>
                <div className="flex items-center">
                    <div className="card w-[400px]">
                        <div className='flex'>
                    </div>
                        <div className='space-y-12'>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="email">Tu correo electrónico<span className='text-red-600'>*</span></label>
                                <input
                                    className='p-2 mt-1 bg-slate-100 rounded-md focus:outline-none focus:shadow-lg'
                                    type="email"
                                    name='email'
                                    placeholder='Por favor introduzca su correo electrónico'
                                    id='email'
                                />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="password">Contraseña<span className='text-red-600'>*</span></label>
                                <input
                                    className='p-2 mt-1 bg-slate-100 rounded-md focus:outline-none focus:shadow-lg'
                                    type="password"
                                    name='password'
                                    placeholder='Ingrese su contraseña'
                                    id='password'
                                />
                            </div>
                            <div className='mt-4 flex justify-center'>
                                <button
                                    className='px-2 py-1 w-full text-xl font-sans uppercase leading-relaxed rounded-md opacity-50 bg-indigo-800 text-white hover:bg-indigo-900'
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                            <div className='mt-2 flex justify-center'>
                                <div className=' text-neutral-500 underline decoration-solid'>
                                    <a href="">¿Todavía no tienes una cuenta?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full h-screen overflow-hidden relative">
                <img
                    src={data[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    className="w-full h-screen md:h-full object-cover"
                />
                <div className="absolute bottom-60 left-20 w-full h-full flex items-end ">
                    <div className="text-white text-xl md:text-xl w-1/2 italic break-words  ">
                        {data[currentIndex].text}
                    </div>
                    <div className="absolute bottom-52 left-20 w-full h-full flex items-end ">
                        <div className="text-white text-xl right-0 md:text-xl">
                            {data[currentIndex].author}
                        </div>
                    </div>
                    <div className="absolute left-20 w-full h-full flex items-end ">
                        <img className='w-14' src={learnenLogo} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

