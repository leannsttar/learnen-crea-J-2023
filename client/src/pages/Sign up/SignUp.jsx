import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rightArrow from '../../assets/right-arrow-svgrepo-com.svg'

const data = [
  {
    src: "/assets/slider-blog2.jpg",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Maestra Marielos",
  },
  {
    src: "/assets/slider-blog4.jpg",
    text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
    author: "Maestra Marielos",
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

  return (
    <>
    <div className='grid grid-cols-2 gap-20'>
      <div className='flex justify-center'>
        <div className=''>
          <h1 className='text-2xl font-bold mt-20'>Crea una cuenta gratis</h1>
          <p>Únete a nuestra comunidad</p>
        </div>
        <div className="flex items-center">
            <ToastContainer />
            <div className="card w-[400px] ">
            <div className='text-2xl mb-3'>Paso {formNo} </div>
              <div className='flex'>
                {
                  
                  formArray.map((v, i) => <><div className={`my-7 flex justify-center items-center`}>
                  </div>
                    {
                      i !== formArray.length - 1 && <div className={`w-[85px] h-[7px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-black' : 'bg-slate-400'}`}></div>
                    }
                  </>)
                }
              </div>
              {
                formNo === 1 && 
                <div>
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="email">Tu correo electrónico*</label>
                    <input value={state.email} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="email" name='email' placeholder='Por favor introduzca su correo electrónico' id='email' />
                  </div>
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="password">Contraseña*</label>
                    <input value={state.password} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="password" name='password' placeholder='Ingrese su contraseña' id='password' />
                  </div>
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="password_ok">Confirmar Contraseña*</label>
                    <input value={state.password_ok} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="password" name='password_ok' placeholder='Introducir la contraseña' />
                  </div>
                  <div className='mt-4 flex justify-center'>
                    <button onClick={next} className='px-2 py-2 text-xl rounded-md w-full text-[#FF8399] '> Following<img className='w-10 fill-[#FF8399]' src={rightArrow} alt="" srcset="" />
                    </button>
                  </div>
                </div>
              }
              {
                formNo === 2 && <div>
                  <div className='flex flex-col mb-2'>
                    <label className='text-slate-500' htmlFor="Name">Nombre*</label>
                    <input value={state.Name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='Name' placeholder='Por favor, escriba su nombre' id='Name' />
                  </div>
                  <div className='flex flex-col mb-2'>
                    <label className='text-slate-500' htmlFor="Lastname">Apellido*</label>
                    <input value={state.Lastname} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='Lastname' placeholder='Ingresa tu apellido' id='Lastname' />
                  </div>
                  <div className='flex flex-col mb-2'>
                    <label className='text-slate-500' htmlFor="BirthDate">Fecha de cumpleaños*</label>
                    <input value={state.BirthDate} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="date" name='BirthDate' id='BirthDate' />
                  </div>
                  <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Regresar</button>
                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Siguiente</button>
            </div>
                </div>
              }

              {
                formNo === 3 && <div>
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="Sex" className='flex justify-center'>Selecciona tu género</label>
                    <div className='flex justify-center'>
                      <input value={state.BirthDate} onChange={inputHandle} type="radio" name="" id="" /> <p className='p-6 text-lg'>Masculino</p>
                      <input value={state.BirthDate} onChange={inputHandle} type="radio" name="" id="" /> <p className='p-6'>Femenino</p>
                    </div>

                  </div>
                  <div className='mt-4 gap-3 flex justify-center items-center'>
                    <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Siguiente</button>
                    <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Enviar</button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

      <div className="flex justify-start w-50 h-screen md:h-1/6 overflow-hidden relative">
        <img
          src={data[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="w-full h-auto md:h-full object-cover"
        />
        <div className="absolute bottom-20 left-0 w-full h-full flex items-end justify-center">
          <div className="text-white text-xl md:text-xl italic break-words m-20 p-5">
            {data[currentIndex].text}
          </div>
          <div className="text-white text-xl right-0 md:text-xl">
            {data[currentIndex].author}
          </div>
          <img src="/assets/" alt="" srcset="" />
        </div>
        
      </div>
      </div>
    </>
  );
}