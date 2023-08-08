import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Slider } from "../../components/slider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import portugalFlag from "../../assets/Flags/portugalFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import englishFlag from "../../assets/Flags/englishFlag.svg";
import norwayFlag from "../../assets/Flags/norwayFlag.svg";
import axios from "axios";

const LanguageFlags = [
  {
    src: greekFlag,
    country: "日本語",
  },
  {
    src: frenchFlag,
    country: "Francia",
  },
  {
    src: germanFlag,
    country: "Aleman",
  },
  {
    src: englishFlag,
    country: "Ingles",
  },
  {
    src: norwayFlag,
    country: "Noruega",
  },
  {
    src: portugalFlag,
    country: "Portugal",
  },
];

//register xd
export function SignUp() {
  const formArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [formNo, setFormNo] = useState(formArray[0]);

  const [state, setState] = useState({
    email: "",
    password: "",
    password_ok: "",
    Name: "",
    Lastname: "",
    BirthDate: "",
    sex: "",
    BirthDate: "",
    photoProfile: "",
    mother_language: "",
    more_languages: "",
    languages: "",
    aboutYou: "",
    goals: "",
    topics: "",
  });

  const sendRegister = async ({data}) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", state);

    } catch (error) {
      console.log(error)
    }
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (
      (formNo === 1 && state.email && state.password && state.password_ok) ||
      (formNo === 2 && state.Name && state.Lastname && state.BirthDate) ||
      (formNo === 3 && state.sex) ||
      (formNo === 4 && state.photoProfile) ||
      (formNo === 5 && state.mother_language) ||
      (formNo === 6 && state.more_languages) ||
      (formNo === 7 && state.languages)
    ) {
      setFormNo(formNo + 1);
    } else {
      if (formNo === 4 && !state.photoProfile) {
        toast.error("Por favor sube una foto de perfil");
      } else {
        toast.error("Por favor llena todos los campos");
      }
      if (idioma) {
        setFormNo(formNo + 1);
      }
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    if (state.aboutYou && state.goals && state.topics) {
      toast.success("Formulario enviado exitosamente");
    } else {
      toast.error("Por favor, llena todos los campos");
    }
  };

  const [idioma, updateIdioma] = useState();

  const [idiomasSeleccionados, updateIdiomasSeleccionados] = useState([]);
  const selectIdioma = (idioma) => {
    if (idiomasSeleccionados.includes(idioma)) {
      updateIdiomasSeleccionados(
        idiomasSeleccionados.filter((item) => item !== idioma)
      );
    } else {
      updateIdiomasSeleccionados([...idiomasSeleccionados, idioma]);
    }
  };

  const eliminarIdiomaSeleccionado = (idioma) => {
    updateIdiomasSeleccionados(
      idiomasSeleccionados.filter((item) => item !== idioma)
    );
  };

  // Vista previa de la imagen
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setState({
          ...state,
          photoProfile: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };


  // Codigo del ojito
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  console.log(state)
  return (
    <>
      <div className="grid grid-cols-2 gap-3 place-items-center font-Poppins">
        <div className="flex flex-col space-y-12">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Crea una cuenta gratis</h1>
            <p>Únete a nuestra comunidad</p>
          </div>
          <div className="flex items-center">
            <ToastContainer />
            <div className="card w-[400px]">
              <div className="text-2xl font-thin mb-3">Paso {formNo} </div>
              <div className="flex">
                {formArray.map((v, i) => (
                  <>
                    <div className={`my-6`}></div>
                    {i !== formArray.length - 1 && (
                      <div
                        className={`w-full h-[7px] ${formNo === i + 2 || formNo === formArray.length
                          ? "bg-black"
                          : "bg-slate-400"
                          }`}
                      ></div>
                    )}
                  </>
                ))}
              </div>
              {formNo === 1 && (
                <div className="space-y-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">
                      Tu correo electrónico
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      value={state.email}
                      onChange={inputHandle}
                      className="p-2  bg-slate-100 rounded-md focus:outline-none focus:shadow-lg"
                      type="email"
                      name="email"
                      placeholder="Por favor introduzca su correo electrónico"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password">
                      Contraseña<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={state.password}
                        onChange={inputHandle}
                        className="p-2 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg w-full"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Ingrese su contraseña"
                        id="password"
                      />
                      <div
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible size={24} />
                        ) : (
                          <AiOutlineEye size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password_ok">
                      Confirmar Contraseña
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={state.password_ok}
                        onChange={inputHandle}
                        className="p-2 bg-slate-100 rounded-md w-full focus:outline-none
                      focus:shadow-lg"
                        type={showPassword ? "text" : "password"}
                        name="password_ok"
                        placeholder="Introducir la contraseña"
                      />
                      <div
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible size={24} />
                        ) : (
                          <AiOutlineEye size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={next}
                      className="px-2 py-2 text-xl rounded-md text-[#FF8399] hover:text-red-500"
                    >
                      <div className="flex flex-row items-center space-x-2">
                        <div>Following</div>
                        <div>
                          <svg
                            className="w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 23"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                              fill="#FF8399"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
              {formNo === 2 && (
                <div className="space-y-5">
                  <div className="flex flex-col">
                    <label className="" htmlFor="Name">
                      Nombre<span className="text-red-600">*</span>
                    </label>
                    <input
                      value={state.Name}
                      onChange={inputHandle}
                      className="p-2 mt-1 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg"
                      type="text"
                      name="Name"
                      placeholder="Por favor, escriba su nombre"
                      id="Name"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="" htmlFor="Lastname">
                      Apellido<span className="text-red-600">*</span>
                    </label>
                    <input
                      value={state.Lastname}
                      onChange={inputHandle}
                      className="p-2 mt-1 bg-slate-100 rounded-md focus:outline-none
                    focus:shadow-lg"
                      type="text"
                      name="Lastname"
                      placeholder="Ingresa tu apellido"
                      id="Lastname"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="" htmlFor="BirthDate">
                      Fecha de cumpleaños<span className="text-red-600">*</span>
                    </label>
                    <DatePicker
                      selected={state.BirthDate}
                      onChange={(date) =>
                        inputHandle({
                          target: { name: "BirthDate", value: date },
                        })
                      }
                      className="p-2 mt-1 bg-slate-100 rounded-md focus:outline-none focus:shadow-lg"
                    />
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] hover:text-red-500"
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] hover:text-red-500"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 3 && (
                <div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="Sex" className="flex justify-center">
                      Selecciona tu género
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="flex justify-center">
                      <input
                        className="w-5"
                        value="Masculino"
                        checked={state.sex === "Masculino"}
                        onChange={inputHandle}
                        type="radio"
                        name="sex"
                        id="masculino"
                      />{" "}
                      <p className="p-6 text-lg ">Masculino</p>
                      <input
                        className="w-5"
                        value="Femenino"
                        checked={state.sex === "Femenino"}
                        onChange={inputHandle}
                        type="radio"
                        name="sex"
                        id="femenino"
                      />{" "}
                      <p className="p-6 text-lg">Femenino</p>
                    </div>
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 4 && (
                <div>
                  <div className="flex flex-col mb-4">
                    <div className="flex flex-row items-center space-x-2 text-indigo-800 mb-10">
                      <div>
                        <button
                          className="text-xl"
                          onClick={() => setFormNo(formNo + 1)}
                        >
                          Omitir
                        </button>
                      </div>
                      <div>
                        <svg
                          className="w-7 fill-indigo-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 23"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-10">
                      <label htmlFor="Sex" className="flex justify-center">
                        Sube una foto de perfil
                      </label>
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-64 h-48 bg-zinc-100 rounded-2xl cursor-pointer">
                            <div className="relative flex flex-col items-center justify-center pt-7">
                              {previewImage && (
                                <button
                                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
                                  onClick={() => setPreviewImage(null)}
                                >
                                  <svg
                                    className="w-5 h-5 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              )}
                              {previewImage ? (
                                <img
                                  src={previewImage}
                                  onChange={inputHandle}
                                  alt="Preview"
                                  className="w-48 h-32 object-cover rounded-2xl"
                                />
                              ) : (
                                <svg
                                  width="150"
                                  height="104"
                                  viewBox="0 0 150 104"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M150 7.08002H0V103.358H150V7.08002Z"
                                    fill="#954F4F"
                                  />
                                  <path
                                    d="M150 7.08002H0V34.341H150V7.08002Z"
                                    fill="#EF8686"
                                  />
                                  <path
                                    d="M17.148 40.571C20.5887 40.571 23.378 37.7818 23.378 34.341C23.378 30.9003 20.5887 28.111 17.148 28.111C13.7072 28.111 10.918 30.9003 10.918 34.341C10.918 37.7818 13.7072 40.571 17.148 40.571Z"
                                    fill="#3F2E20"
                                  />
                                  <path
                                    d="M140.192 0H119.363V7.081H140.192V0Z"
                                    fill="#2B2520"
                                  />
                                  <path
                                    d="M74.9987 89.148C92.9408 89.148 107.486 74.6031 107.486 56.661C107.486 38.7189 92.9408 24.174 74.9987 24.174C57.0566 24.174 42.5117 38.7189 42.5117 56.661C42.5117 74.6031 57.0566 89.148 74.9987 89.148Z"
                                    fill="#3D332B"
                                  />
                                  <path
                                    d="M74.9994 83.012C89.5527 83.012 101.35 71.2142 101.35 56.661C101.35 42.1077 89.5527 30.31 74.9994 30.31C60.4462 30.31 48.6484 42.1077 48.6484 56.661C48.6484 71.2142 60.4462 83.012 74.9994 83.012Z"
                                    fill="#DBD6D2"
                                  />
                                  <path
                                    d="M74.999 77.535C86.5274 77.535 95.873 68.1894 95.873 56.661C95.873 45.1326 86.5274 35.787 74.999 35.787C63.4706 35.787 54.125 45.1326 54.125 56.661C54.125 68.1894 63.4706 77.535 74.999 77.535Z"
                                    fill="#3D332B"
                                  />
                                </svg>
                              )}
                            </div>
                            <input
                              type="file"
                              className="opacity-0"
                              onChange={handleImageChange}
                              accept="image/*"
                              name="photoProfile"
                              id="photoProfile"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 5 && (
                <div>
                  <div className="flex flex-col mb-4 space-y-7">
                    <div className="space-y-10">
                      <label htmlFor="Sex" className="flex justify-center">
                        Selecciona tu lengua materna
                      </label>
                    </div>
                    <div className="w-full h-48 overflow-y-scroll justify-start items-start">
                      <div className="flex-col w-full justify-start items-start inline-flex">
                        {LanguageFlags.map((idioma) => (
                          <div
                            key={idioma.country}
                            onClick={() => updateIdioma(idioma)}
                            name={state.mother_language}
                            className="p-[14px] w-full border-b-2 border-stone-200 hover:bg-stone-200 bg-stone-50 justify-start items-center gap-3.5 inline-flex"
                          >
                            <img
                              className="w-8"
                              src={idioma.src}
                              alt=""
                              srcset=""
                            />
                            <div className="text-neutral-500 font-normal">
                              {idioma.country}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {idioma && (
                      <div className="flex space-x-3 w-full py-1 rounded-2xl bg-neutral-100 text-neutral-500 items-center justify-center">
                        <img
                          className="w-8"
                          src={idioma.src}
                          alt=""
                          srcset=""
                        />
                        <h1>{idioma.country}</h1>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      disabled={!idioma}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 6 && (
                <div>
                  <div className="flex flex-col mb-4 space-y-7">
                    <div className="flex flex-row items-center space-x-2 text-indigo-800 mb-2">
                      <div>
                        <button
                          className="text-xl"
                          onClick={() => setFormNo(formNo + 1)}
                        >
                          Omitir
                        </button>
                      </div>
                      <div>
                        <svg
                          className="w-7 fill-indigo-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 23"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-10">
                      <label htmlFor="Sex" className="flex justify-center">
                        ¿Qué otros idiomas hablas con fluidez?
                      </label>
                    </div>
                    <div className="w-full h-48 overflow-y-scroll justify-start items-start">
                      <div className="flex-col w-full justify-start items-start inline-flex">
                        {LanguageFlags.map((idioma) => (
                          <div
                            key={idioma.country}
                            onClick={() => selectIdioma(idioma)}
                            className={`p-[14px] w-full border-b-2 ${idiomasSeleccionados.includes(idioma)
                              ? "border-[#FF8399]"
                              : "border-stone-200"
                              } hover:bg-stone-200 bg-stone-50 justify-start items-center gap-3.5 inline-flex cursor-pointer`}
                          >
                            <img
                              className="w-8"
                              src={idioma.src}
                              alt=""
                              srcSet=""
                            />
                            <div className="text-neutral-500 font-normal">
                              {idioma.country}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {idiomasSeleccionados.length > 0 && (
                      <div className="flex flex-wrap gap-y-5 rounded-2xl text-neutral-500 items-center justify-start">
                        {idiomasSeleccionados.map((idioma) => (
                          <div
                            key={idioma.country}
                            className="flex items-center px-2 py-1 bg-neutral-100 rounded-full space-x-2"
                          >
                            <img
                              className="w-8"
                              src={idioma.src}
                              alt=""
                              srcSet=""
                            />
                            <h1>{idioma.country}</h1>
                            <button
                              onClick={() => eliminarIdiomaSeleccionado(idioma)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#686868"
                                width="20px"
                                viewBox="-3.5 0 19 19"
                                class="cf-icon-svg"
                              >
                                <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399]"
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      disabled={!idioma}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 7 && (
                <div>
                  <div className="flex flex-col mb-4 space-y-7">
                    <div className="space-y-10">
                      <label htmlFor="Sex" className="flex justify-center">
                        ¿Qué idiomas quieres practicar?
                      </label>
                    </div>
                    <div className="w-full h-48 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] justify-start items-start">
                      <div className="flex-col w-full justify-start items-start inline-flex">
                        {LanguageFlags.map((idioma) => (
                          <div
                            key={idioma.country}
                            onClick={() => selectIdioma(idioma)}
                            className={`p-[14px] w-full border-b-2 ${idiomasSeleccionados.includes(idioma)
                              ? "border-[#FF8399]"
                              : "border-stone-200"
                              } hover:bg-stone-200 bg-stone-50 justify-start items-center gap-3.5 inline-flex cursor-pointer`}
                          >
                            <img
                              className="w-8"
                              src={idioma.src}
                              alt=""
                              srcSet=""
                            />
                            <div className="text-neutral-500 font-normal">
                              {idioma.country}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {idiomasSeleccionados.length > 0 && (
                      <div className="flex flex-wrap gap-y-5 rounded-2xl text-neutral-500 items-center justify-start">
                        {idiomasSeleccionados.map((idioma) => (
                          <div
                            key={idioma.country}
                            className="flex items-center px-2 py-1 bg-neutral-100 rounded-full space-x-2"
                          >
                            <img
                              className="w-8"
                              src={idioma.src}
                              alt=""
                              srcSet=""
                            />
                            <h1>{idioma.country}</h1>
                            <button
                              onClick={() => eliminarIdiomaSeleccionado(idioma)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#686868"
                                width="20px"
                                viewBox="-3.5 0 19 19"
                                class="cf-icon-svg"
                              >
                                <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399]"
                    >
                      Regresar
                    </button>
                    <button
                      onClick={next}
                      disabled={!idioma}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399] "
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
              {formNo === 8 && (
                <div className="space-y-10">
                  <div className="flex flex-col h-24 max-w-20">
                    <label htmlFor="email">Describe como eres</label>
                    <textarea
                      value={state.aboutYou}
                      onChange={inputHandle}
                      className="p-2  bg-zinc-100 rounded-md overflow-y-scroll resize-none focus:outline-none focus:shadow-lg"
                      name="aboutYou"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col h-24 max-w-20">
                    <label htmlFor="email">
                      ¿Cuáles son tus metas para aprender idiomas?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={state.goals}
                      name="goals"
                      onChange={inputHandle}
                      className="p-2  bg-zinc-100 rounded-md overflow-y-scroll resize-none focus:outline-none focus:shadow-lg"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col h-24 max-w-20">
                    <label htmlFor="email">
                      ¿Sobre qué temas te gustaría hablar?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={state.topics}
                      name="topics"
                      onChange={inputHandle}
                      className="p-2  bg-zinc-100 rounded-md overflow-y-scroll resize-none focus:outline-none focus:shadow-lg"
                      id="email"
                    />
                  </div>
                  <div className="mt-4 gap-3 flex justify-center items-center">
                    <button
                      onClick={pre}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399]"
                    >
                      Regresar
                    </button>
                    <button
                      onClick={sendRegister}
                      className="px-2 py-2 text-xl rounded-md w-full text-[#FF8399]"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-2 flex justify-center">
                <Link to={"/login"}>
                  <div className=" text-neutral-500 underline decoration-solid">
                    <a href="">¿Ya tienes una cuenta?</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider/>
      </div>
    </>
  );
}
