import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { clienteAxios } from "../../config/clienteAxios";
import { data } from "autoprefixer";
import { headers } from "../../helpers/headers";
import { useSession } from "../../components/Header/useSession";
import { BsArrowLeft } from "react-icons/bs";

import io from "socket.io-client";

let socket = io("http://localhost:5000");

function timeAgoSincePublication(publicationDate) {
  const now = new Date();
  const publicationTime = new Date(publicationDate);

  const timeDifferenceInSeconds = Math.floor((now - publicationTime) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} segundos`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minutos`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} horas`;
  } else {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} días`;
  }
}

export function Chat() {
  const { id } = useParams();

  const chat = useRef();
  const sonidoNotificacion = useRef();
  const [usuariosChats, setUsuariosChats] = useState([]);
  const [usuarioPerfil, setUsuarioPerfil] = useState({});

  const { usuario } = useSession();
  const [messages, setMessages] = useState([]);

  const [chatVisible, setChatVisible] = useState(true);

  //Obtener Datos del otro men
  useEffect(() => {
    (async () => {
      try {
        const { data: usuarioChat } = await clienteAxios("/usuarios/" + id);
        setUsuarioPerfil(usuarioChat);

        const { data: misChats } = await clienteAxios("/mis-chats", headers());
        setUsuariosChats(misChats);

        socket.emit("unirse-chat", "chat-" + usuarioChat.id + "-" + usuario.id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  //ObtenerMensajesDelChat
  useEffect(() => {
    (async () => {
      try {
        const { data } = await clienteAxios("/mensajes/" + id, headers());

        setMessages(data);

        setTimeout(() => {
          if (chat.current) {
            chat.current.scrollTo(0, 99999999999999);
          }
        }, 10);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  //Obtener Chats
  useEffect(() => {
    (async () => {
      try {
        const { data } = await clienteAxios("/mis-chats", headers());
        setUsuariosChats(data);
      } catch (error) {}
    })();
  }, []);

  const [inputValue, setInputValue] = useState("");

  //Socket IO
  useEffect(() => {
    socket.once("nuevo-mensaje", (mensaje) => {
      setMessages([...messages, mensaje]);
      sonidoNotificacion.current.pause();
      sonidoNotificacion.current.currentTime = 0;
      sonidoNotificacion.current.play();
      console.log("mario.wav");
    });
    setTimeout(() => {
      if (chat.current) {
        chat.current.scrollTo(0, 99999999999999);
      }
    }, 10);
  }, [messages]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //Enviar Mensaje
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const usuarioRecibeID = usuarioPerfil.id;
      if (!inputValue) return;
      const { data } = await clienteAxios.post(
        "/enviar-mensaje/" + usuarioRecibeID,
        {
          mensaje: inputValue,
        },
        headers()
      );

      setMessages([...messages, data]);

      socket.emit("enviar-mensaje", {
        mensaje: data,
        chats_ids: [
          "chat-" + usuarioPerfil.id + "-" + usuario.id,
          "chat-" + usuario.id + "-" + usuarioPerfil.id,
        ],
      });

      setTimeout(() => {
        chat.current.scrollTo(0, 99999999999999);
      }, 10);
    } catch (error) {}

    // setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const [ventanaMenos800px, setVentanaMenos800px] = useState(false);

  const verificarTamañoVentana = () => {
    if (window.innerWidth <= 874) {
      setVentanaMenos800px(true);
    } else {
      setVentanaMenos800px(false);
    }
  };

  useEffect(() => {
    verificarTamañoVentana();
    window.addEventListener("resize", verificarTamañoVentana);

    return () => {
      window.removeEventListener("resize", verificarTamañoVentana);
    };
  }, []);

  const toggleChatVisibility = () => {
    console.log("toggleChatVisibility called");
    setChatVisible((prevState) => !prevState);
    console.log(chatVisible);
  };
  
  return (
    <>
      {ventanaMenos800px ? (
        <div className=" w-full  font-Poppins">
          <div
            className={`px-5 py-5 flex ${
              !id && "justify-between "
            } w-full items-center bg-white border-b-2`}
          >
            {!id && (
              <div className="font-semibold text-black text-4xl">Mensajes</div>
            )}

            <audio ref={sonidoNotificacion}>
              <source src="/mario.wav" type="audio/wav" />
            </audio>
            {console.log(chatVisible)}
            {id && (
              <div className="w-full flex items-center gap-3">
                <Link to={"/chat"}>
                  <BsArrowLeft
                    className="cursor-pointer"
                    size={50}
                    // onClick={toggleChatVisibility}
                  />
                </Link>
                <img
                  src={"http://localhost:5000" + usuarioPerfil.imagen_perfil}
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                  srcset=""
                />
                <div className="w-full flex items-center">
                  <div className="">
                    <span
                      translate="no"
                      className="text-black font-bold text-xl"
                    >
                      {usuarioPerfil.nombre} {usuarioPerfil.apellido}
                    </span>

                    {/* <div className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ backgroundColor: isOnline ? 'green' : 'red' }}
                                ></div>
                                <span>{isOnline ? 'En línea' : 'Desconectado'}</span>
                            </div> */}
                  </div>
                </div>
              </div>
            )}
            {/* <div className="invisible">aawdawdawdad</div> */}
          </div>

          <div className="flex flex-row h-full justify-between bg-white">
            <div
              className={`${!id ? "flex" : "hidden"} flex-col  ${
                id ? "h-[calc(100vh-205px)]" : "h-[calc(100vh-186px)]"
              } w-2/5 lgv:w-full border-r-2 overflow-y-auto`}
            >
              {/* <div className="border-b-2 py-4 px-2">
                        <input
                            type="text"
                            placeholder="Buscar chat"
                            className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                        />
                    </div> */}

              <div className="flex flex-col overflow-y-auto">
                {usuariosChats.length === 0 && (
                  <div className="flex flex-col items-center gap-5 mt-10">
                    <p className="text-2xl text-center mx-8">
                      Parece que no tienes conversaciones con nadie. Visita
                      nuestra comunidad y encuentra a alguien para conversar
                    </p>
                    <Link className="" to={"/community"}>
                      <button className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#ffa6b6] hover:transition-bg ease-in duration-200 flex-row-reverse">
                        Comunidad
                      </button>
                    </Link>
                  </div>
                )}
                <div className=" border-red-600 w-full flex justify-center items-center lgv:hidden"></div>
                {usuariosChats.map((user) => (
                  <Link
                    to={"/chat/" + user.id}
                    key={user.id}
                    className="flex flex-row py-4 px-2 items-center hover:bg-gray-100"
                  >
                    <div className="w-1/4">
                      <img
                        src={"http://localhost:5000" + user.imagen_perfil}
                        className="object-cover h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="w-full ml-4">
                      <div className="flex justify-between items-center">
                        <div translate="no" className="text-lg font-semibold">
                          {user.nombre} {user.apellido}
                        </div>
                        <div translate="no" className="text-gray-600 text-sm">
                          {user.id == id && messages.length
                            ? timeAgoSincePublication(
                                messages[messages.length - 1].fecha
                              )
                            : timeAgoSincePublication(user.mensajes[0].fecha)}
                        </div>
                      </div>
                      <p
                        className="text-gray-500 max-w-[20ch] truncate"
                        translate="no"
                      >
                        {user.id == id && messages.length
                          ? messages[messages.length - 1].mensaje
                          : user.mensajes[0].mensaje}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {id ? (
              <div
                ref={chat}
                className={`w-full relative h-[78vh] px-1 flex-col justify-between bg-[url(/assets/chatbg.jpg)]"`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="pt-4 pr-4 overflow-y-auto h-full">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex justify-${
                          message.id_cliente_envia == usuario.id
                            ? "end"
                            : "start"
                        } mb-3`}
                      >
                        <div
                          className={`flex ${
                            message.id_cliente_envia == usuario.id
                              ? "flex-row-reverse"
                              : "flex-row"
                          } items-center`}
                          translate="no"
                        >
                          <img
                            src={
                              "http://localhost:5000" +
                              message.cliente_envia.imagen_perfil
                            }
                            className={`object-cover h-8 w-8 rounded-full ${
                              message.id_cliente_envia == usuario.id
                                ? "ml-2"
                                : "mr-2"
                            }`}
                            alt=""
                          />
                          <div
                            className={`bg-gray-100 py-2 px-4 rounded-full ${
                              message.id_cliente_envia == usuario.id
                                ? "text-right !bg-[#FF8399]"
                                : "text-left text-gray-800"
                            }`}
                            onClick={setChatVisible}
                          >
                            {message.mensaje}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 flex justify-center items-center mt-5 mb-7">
                    <form onSubmit={handleSubmit} className="w-full flex">
                      <input
                        type="text"
                        placeholder="Escribe tu mensaje"
                        className="rounded-full border-2 border-[#A7A7A7] hover:border-[#FF8399] py-3 px-5 flex-1"
                        value={inputValue}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="text-white py-3 px-6 rounded-full mr-2"
                      >
                        <img
                          src="/assets/enviarbtn.png"
                          className="w-11 invert"
                          alt=""
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" border-red-600 w-full flex justify-center items-center lgv:hidden">
                {usuariosChats.length === 0 ? (
                  <div className="flex flex-col items-center gap-5">
                    <p className="text-2xl text-center px-[10rem]">
                      Parece que no tienes conversaciones con nadie. Visita
                      nuestra comunidad y encuentra a alguien para conversar
                    </p>
                    <Link className="" to={"/community"}>
                      <button className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#ffa6b6] hover:transition-bg ease-in duration-200 flex-row-reverse">
                        Comunidad
                      </button>
                    </Link>
                  </div>
                ) : (
                  <p className="font-black text-4xl text-center">
                    Da click a un nuevo chat
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className=" w-full font-Poppins">
          <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2 ">
            <div className="font-semibold text-black text-4xl w-2/5 lgv:w-full">Mensajes</div>
            <audio ref={sonidoNotificacion}>
              <source src="/mario.wav" type="audio/wav" />
            </audio>
            {id && (
              <div className="w-full flex items-center">
                <img
                  src={"http://localhost:5000" + usuarioPerfil.imagen_perfil}
                  className="object-cover h-16 w-16 rounded-full"
                  alt=""
                  srcset=""
                />
                <div className="w-1/2 flex items-center">
                  <div className="p-3">
                    <span
                      translate="no"
                      className="text-black font-bold text-xl"
                    >
                      {usuarioPerfil.nombre} {usuarioPerfil.apellido}
                    </span>

                    {/* <div className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ backgroundColor: isOnline ? 'green' : 'red' }}
                                ></div>
                                <span>{isOnline ? 'En línea' : 'Desconectado'}</span>
                            </div> */}
                  </div>
                </div>
              </div>
            )}
            {/* <div className="invisible">aawdawdawdad</div> */}
          </div>

          <div className="flex flex-row justify-between bg-white">
            <div
              className={`flex flex-col  ${
                id ? "h-[calc(100vh-205px)]" : "h-[calc(100vh-186px)]"
              } w-2/5 lgv:w-full border-r-2 overflow-y-auto`}
            >
              {/* <div className="border-b-2 py-4 px-2">
                        <input
                            type="text"
                            placeholder="Buscar chat"
                            className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                        />
                    </div> */}

              <div className="flex flex-col overflow-y-auto">
                {usuariosChats.map((user) => (
                  <Link
                    to={"/chat/" + user.id}
                    key={user.id}
                    className="flex flex-row py-4 px-2 items-center hover:bg-gray-100"
                  >
                    <div className="w-1/4">
                      <img
                        src={"http://localhost:5000" + user.imagen_perfil}
                        className="object-cover h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="w-full ml-4">
                      <div className="flex justify-between items-center">
                        <div translate="no" className="text-lg font-semibold">
                          {user.nombre} {user.apellido}
                        </div>
                        <div translate="no" className="text-gray-600 text-sm">
                          {user.id == id && messages.length
                            ? timeAgoSincePublication(
                                messages[messages.length - 1].fecha
                              )
                            : timeAgoSincePublication(user.mensajes[0].fecha)}
                        </div>
                      </div>
                      <p
                        className="text-gray-500 max-w-[20ch] truncate"
                        translate="no"
                      >
                        {user.id == id && messages.length
                          ? messages[messages.length - 1].mensaje
                          : user.mensajes[0].mensaje}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {id ? (
              <div
                ref={chat}
                className="w-full relative max-h-[calc(100vh-220px)] overflow-auto px-5 flex flex-col justify-between bg-[url(/assets/chatbg.jpg)]"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="mt-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex justify-${
                          message.id_cliente_envia == usuario.id
                            ? "end"
                            : "start"
                        } mb-3`}
                      >
                        <div
                          className={`flex ${
                            message.id_cliente_envia == usuario.id
                              ? "flex-row-reverse"
                              : "flex-row"
                          } items-center`}
                          translate="no"
                        >
                          <img
                            src={
                              "http://localhost:5000" +
                              message.cliente_envia.imagen_perfil
                            }
                            className={`object-cover h-8 w-8 rounded-full ${
                              message.id_cliente_envia == usuario.id
                                ? "ml-2"
                                : "mr-2"
                            }`}
                            alt=""
                          />
                          <div
                            className={`bg-gray-100 py-2 px-4 rounded-full ${
                              message.id_cliente_envia == usuario.id
                                ? "text-right !bg-[#FF8399]"
                                : "text-left text-gray-800"
                            }`}
                          >
                            {message.mensaje}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 flex justify-center items-center mt-5 mb-7">
                    <form onSubmit={handleSubmit} className="w-full flex">
                      <input
                        type="text"
                        placeholder="Escribe tu mensaje"
                        className="rounded-full border-2 border-[#A7A7A7] hover:border-[#FF8399] py-3 px-5 flex-1"
                        value={inputValue}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="text-white py-3 px-6 rounded-full mr-2"
                      >
                        <img
                          src="/assets/enviarbtn.png"
                          className="w-11 invert"
                          alt=""
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" border-red-600 w-full flex justify-center items-center lgv:hidden">
                {usuariosChats.length === 0 ? (
                  <div className="flex flex-col items-center gap-5">
                    <p className="text-2xl text-center px-[10rem]">
                      Parece que no tienes conversaciones con nadie. Visita
                      nuestra comunidad y encuentra a alguien para conversar
                    </p>
                    <Link className="" to={"/community"}>
                      <button className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#ffa6b6] hover:transition-bg ease-in duration-200 flex-row-reverse">
                        Comunidad
                      </button>
                    </Link>
                  </div>
                ) : (
                  <p className="font-black text-4xl text-center">
                    Da click a un nuevo chat
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
