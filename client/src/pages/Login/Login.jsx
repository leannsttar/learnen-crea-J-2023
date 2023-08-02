import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = [
    {
        src: "/assets/slider-blog2.jpg",
        text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
        author: "Maestra Marielos",
        brand: "/assets/learnen.png",
    },
    {
        src: "/assets/slider-blog4.jpg",
        text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
        author: "Nacely Orellana",
        brand: "/assets/learnen.png",
    },
];


export function Login() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    // Codigo del ojito
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleFormSubmit = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            toast.error('Porfavor llena todos los campos.', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        toast.success('Formulario enviado exitosamente!', {
            position: 'top-right',
            autoClose: 3000,
        });

    };
    return (
        <div className='grid grid-cols-2 gap-2 place-items-center font-Poppins'>
            <div className='flex flex-col space-y-12'>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold'>Inicia Sesión</h1>
                    <p className='text-xl'>¡Nos alegra verte de vuelta!</p>
                </div>
                <div className="flex items-center">
                    <ToastContainer />
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
                                <div className='relative'>
                                    <input
                                        className='p-2 mt-1 bg-slate-100 w-full rounded-md focus:outline-none focus:shadow-lg'
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder='Ingrese su contraseña'
                                        id='password'
                                    />
                                    <div
                                        className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                    </div>
                                </div>
                            </div>
                                <div className='mt-10 flex justify-center'>
                                <button
                                    className='px-2 py-1 w-full text-xl font-sans uppercase leading-relaxed rounded-md opacity-50 bg-indigo-800 text-white hover:bg-indigo-600'
                                    onClick={handleFormSubmit}
                                    type='submit'
                                >
                                    Iniciar sesión
                                </button>
                                </div>
                            <div className='mt-2 flex justify-center'>
                                <Link to={"/signup"}>
                                <div className=' text-neutral-500 underline decoration-solid'>
                                        <a href="">¿Todavía no tienes una cuenta?</a>
                                </div>
                                </Link>
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
                <div className="absolute bottom-60 p-2 rounded-xl backdrop-contrast-[.90] backdrop-blur-sm left-20 w-[800px] h-fit flex items-end ">
                    <div className="text-white text-xl md:text-xl w-1/2 italic break-words  ">
                        {data[currentIndex].text}
                    </div>
                    <div className="text-white text-xl right-0 md:text-xl">
                        {data[currentIndex].author}
                    </div>
                    <div className=''>
                        <img className='relative w-20 left-16' src={data[currentIndex].brand} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

