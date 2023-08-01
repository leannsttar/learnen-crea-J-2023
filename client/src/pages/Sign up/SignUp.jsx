import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import rightArrow from '../../assets/right-arrow-svgrepo-com.svg';
import learnenLogo from '../../assets/logo_no_text.svg';

const data = [
  {
    src: "/assets/slider_signup1.png",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Maestra Marielos",
    brand: "/assets/learnen.png",
  },
  {
    src: "/assets/slider_signup2.png",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Nacely Orellana",
    brand: "/assets/learnen.png",
  },
  {
    src: "/assets/slider_signup3.png",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Juana Sanchez",
    brand: "/assets/learnen.png",
  },
  {
    src: "/assets/slider_signup4.png",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Victor Garcia",
    brand: "/assets/learnen.png",
  },
];

export function SignUp() {
  const formArray = [1, 2, 3, 4, 5, 6, 7];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    email: '',
    password: '',
    password_ok: '',
    Name: '',
    Lastname: '',
    BirthDate: '',
    sex: '',
    photoProfile: '',
    mother_language: '',
    more_languages: '',
    languages: '',
    aboutYou: '',
    goals: '',
    topics: '',
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value


    })
  }

  const next = () => {
    if (formNo === 1 && state.email && state.password && state.password_ok) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.Name && state.Lastname && state.BirthDate) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 3 && state.sex) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 4 && state.photoProfile) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 5 && state.mother_language) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 6 && state.more_languages) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 7 && state.languages) {
      setFormNo(formNo + 1)
    }
    else {
      toast.error('Por favor llena todos los campos')
    }
  }

  const pre = () => {
    setFormNo(formNo - 1)
  }

  const finalSubmit = () => {
    if (state.aboutYou && state.goals && state.topics) {
      toast.success('Formulario enviado exitosamente')
    } else {
      toast.error('Por favor, llena todos los campos')
    }
  }

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

  return (
    <>
      <div className='grid grid-cols-2 gap-3 place-items-center font-Poppins'>
        <div className='flex flex-col space-y-12'>
          <div className='space-y-2'>
            <h1 className='text-2xl font-bold'>Crea una cuenta gratis</h1>
            <p>Únete a nuestra comunidad</p>
          </div>
          <div className="flex items-center">
            <ToastContainer />
            <div className="card w-[400px]">
              <div className='text-2xl font-thin mb-3'>Paso {formNo} </div>
              <div className='flex'>
                {

                  formArray.map((v, i) => <><div className={`my-6`}>
                  </div>
                    {
                      i !== formArray.length - 1 && <div className={`w-full h-[7px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-black' : 'bg-slate-400'}`}></div>
                    }
                  </>)
                }
              </div>
              {
                formNo === 1 &&
                <div className='space-y-10'>
                  <div className='flex flex-col'>
                    <label htmlFor="email">Tu correo electrónico<span className='text-red-600'>*</span></label>
                    <input value={state.email} onChange={inputHandle} className='p-2  bg-slate-100 rounded-md focus:outline-none focus:shadow-lg' type="email" name='email' placeholder='Por favor introduzca su correo electrónico' id='email' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="password">Contraseña<span className='text-red-600'>*</span></label>
                    <div className='relative'>
                      <input value={state.password} onChange={inputHandle} className='p-2 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg w-full' type={showPassword ? 'text' : 'password'} name='password' placeholder='Ingrese su contraseña' id='password' />
                      <div
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                      </div>
                    </div>

                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="password_ok">Confirmar Contraseña<span className='text-red-600'>*</span></label>
                    <div className='relative'>
                      <input value={state.password_ok} onChange={inputHandle} className='p-2 bg-slate-100 rounded-md w-full focus:outline-none
                      focus:shadow-lg' type={showPassword ? 'text' : 'password'} name='password_ok' placeholder='Introducir la contraseña' />
                      <div
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                      </div>
                    </div>

                  </div>
                  <div className='mt-4 flex justify-center'>
                    <button onClick={next} className='px-2 py-2 text-xl rounded-md text-[#FF8399] hover:text-red-500'> Following<img className='w-10 fill-[#FF8399]' src={rightArrow} alt="" srcset="" />
                    </button>
                  </div>
                </div>
              }
              {
                formNo === 2 && <div>
                  <div className='flex flex-col '>
                    <label className='' htmlFor="Name">Nombre<span className='text-red-600'>*</span></label>
                    <input value={state.Name} onChange={inputHandle} className='p-2 mt-1 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg' type="text" name='Name' placeholder='Por favor, escriba su nombre' id='Name' />
                  </div>
                  <div className='flex flex-col mb-4'>
                    <label className='' htmlFor="Lastname">Apellido<span className='text-red-600'>*</span></label>
                    <input value={state.Lastname} onChange={inputHandle} className='p-2 mt-1 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg' type="text" name='Lastname' placeholder='Ingresa tu apellido' id='Lastname' />
                  </div>
                  <div className='flex flex-col mb-4'>
                    <label className='' htmlFor="BirthDate">Fecha de cumpleaños<span className='text-red-600'>*</span></label>
                    <DatePicker
                      selected={state.BirthDate}
                      onChange={(date) => inputHandle({ target: { name: 'BirthDate', value: date } })}
                      className='p-2 mt-1 bg-slate-100 w-full rounded-md focus:outline-none focus:shadow-lg'
                      dateFormat="dd/MM/yyyy"
                      placeholderText='dd/MM/yyyy'
                    />
                  </div>
                  <div className='mt-4 gap-3 flex justify-center items-center'>
                    <button onClick={pre} className='px-2 py-2 text-xl rounded-md w-full text-[#FF8399] hover:text-red-500'>Regresar</button>
                    <button onClick={next} className='px-2 py-2 text-xl rounded-md w-full text-[#FF8399] hover:text-red-500'>Siguiente</button>
                  </div>
                </div>
              }

              {
                formNo === 3 && <div>
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="Sex" className='flex justify-center'>Selecciona tu género<span className='text-red-600'>*</span></label>
                    <div className='flex justify-center'>
                      <input className='w-5' value={state.BirthDate} onChange={inputHandle} type="radio" name="gender" id="masculino" /> <p className='p-6 text-lg '>Masculino</p>
                      <input className='w-5' value={state.BirthDate} onChange={inputHandle} type="radio" name="gender" id="femenino" /> <p className='p-6 text-lg'>Femenino</p>
                    </div>

                  </div>
                  <div className='mt-4 gap-3 flex justify-center items-center'>
                    <button onClick={pre} className='px-2 py-2 text-xl rounded-md w-full text-[#FF8399] '>Siguiente</button>
                    <button onClick={next} className='px-2 py-2 text-xl rounded-md w-full text-[#FF8399] '>Enviar</button>
                  </div>
                </div>
              }
              <div className='mt-2 flex justify-center'>
                <div className=' text-neutral-500 underline decoration-solid'>
                  <a href="">¿Ya tienes una cuenta?</a>
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
          <div className="absolute bottom-60 p-2 rounded backdrop-contrast-50 left-20 w-[700px] h-fit flex items-end ">
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

    </>
  );
}