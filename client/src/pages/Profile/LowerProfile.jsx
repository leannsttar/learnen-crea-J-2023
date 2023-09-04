import React, { useState, useEffect, Fragment } from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { DataProfile } from "./DataProfile";
import { LanguagesProfile } from "./LanguagesProfile";
import { AboutProfile } from "./AboutProfile";
import { flags } from "../../data/languages";
import { useSession } from "../../components/Header/useSession";
import { clienteAxios } from "../../config/clienteAxios";
import { useForm } from "react-hook-form";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsChatText, BsThreeDots } from "react-icons/bs";
import { AppTitle } from "../../components/AppTitle";
import { Dialog, Transition } from "@headlessui/react";
import { RoundedFlag } from "../../components/RoundedFlag";
import galleryAdd from "../../assets/gallery-add.svg";
import { allLanguages } from "../../data/languages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Button, Dropdown, Space } from "antd";
import iconTrash from "../../assets/Icontrash.svg";
import { LanguagesCommunityCard } from "../Community/LanguagesCommunityCard";
import { getComents, postComent, getCommentCount } from "../Feed/authComments";
import { Link } from "react-router-dom";
import { headers } from "../../helpers/headers";
headers;

import { timeAgoSincePublication } from "../Feed/Feed";

export const PostProfile = ({ keyProp, posts, setPosts }) => {
  const { usuario } = useSession();

  let [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenReport, setIsOpenReport] = useState(false);
  const [commentText, setCommentText] = useState("");

  const [commentCount, setCommentCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [like, setLike] = useState(posts.numLikes);

  const [commentData, setCommentData] = useState([]);

  const [newComment, setNewComment] = useState("");

  const addComment = async () => {
    try {
      await postComent({
        datos: {
          comentario: newComment,
          id_publicacion: keyProp,
          id_cliente: usuario.id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/feed");
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const { message } = await getComents(keyProp);
      return message;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getComments();
      setCommentData(data);
    })();
  }, []);

  const alreadyLike = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/feed/like/${usuario.id}/${posts.id}`
      );

      if (response.data.message === "Like") {
        setIsLiked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const countComments = async () => {
    try {
      const response = await getCommentCount(keyProp);
      setCommentCount(response.commentCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    countComments();
  }, []);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const setLikes = async (data) => {
    try {
      if (isLiked) {
        const response = await axios.delete(
          `http://localhost:5000/feed/like/${usuario.id}/${posts.id}`
        );

        setIsLiked(false);
        setLike(like - 1);
        console.log(response);

        return;
      }

      const response = await axios.post("http://localhost:5000/feed/like", {
        id_cliente: usuario.id,
        id_publicacion: posts.id,
      });

      setIsLiked(true);
      setLike(like + 1);
      console.log(like);

      console.log(response);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    alreadyLike();
    // countLikes();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  function closeModalReport() {
    setIsOpenReport(false);
  }

  function openModalReport() {
    setIsOpenReport(true);
  }

  let matchingLanguage;

  allLanguages.forEach((language) => {
    if (posts.idioma === language[0]) {
      matchingLanguage = language;
    }
  });

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

  const postDate = posts.fecha_creacion;
  const timeAgo = timeAgoSincePublication(postDate);

  //cosa del reporte xd
  const [reportDescription, setReportDescription] = useState("");
  const sendReport = async () => {
    try {
      await axios.post("http://localhost:5000/reports", {
        descripcion: reportDescription,
        id_cliente: usuario.id,
        id_publicacion: keyProp,
      });

      closeModalReport();
    } catch (error) {
      console.error("Error al enviar el reporte:", error);
    }
  };
  const DeletePostModal = async () => {
    try {
      await clienteAxios.delete(`/delete-post/${keyProp}`, headers());
      // alert("Publicación eliminada exitosamente");
      obtenerPosts();
      closeModalDelete();
    } catch (error) {
      console.error(error);
    }
  };

  const [ventanaMenos800px, setVentanaMenos800px] = useState(false);

  const verificarTamañoVentana = () => {
    if (window.innerWidth <= 800) {
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

  return (
    <div key={keyProp} className="flex flex-col items-center cursor-pointer">
      {/* Modal de eliminar post */}

      <Transition appear show={isOpenDelete} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10 h-screen"
          onClose={closeModalDelete}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 h-screen z-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex flex-col justify-center items-center gap-5 mb-10">
                      <img src={iconTrash} alt="" className="w-16" />
                      ¿Seguro que quieres eliminar tu publicación?
                    </div>
                  </Dialog.Title>
                  <div className="flex gap-5 justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#000000] px-4 py-2 text-sm font-medium text-white hover:bg-[#364C97] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalDelete}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={DeletePostModal}
                    >
                      Eliminar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal para el reporte */}
      <Transition appear show={isOpenReport} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 h-screen"
          onClose={closeModalReport}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 h-screen z-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-center mb-8"
                  >
                    Reportar publicación
                  </Dialog.Title>
                  <div className="w-full">
                    <textarea
                      onChange={(e) => setReportDescription(e.target.value)}
                      value={reportDescription}
                      placeholder="¿Por qué quieres reportar esta publicación?"
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      className="outline-none resize-none w-full"
                    ></textarea>

                    <div className="mt-4 flex justify-center gap-6">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#000000] px-7 py-2 text-sm font-medium text-white hover:bg-[#364C97] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalReport}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={sendReport}
                      >
                        Enviar reporte
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="">
        
        
        <img
          className="w-full h-full object-cover"
          src={`http://localhost:5000/imagenes/processed-${posts.imagen}`}
          alt=""
          onClick={openModal}
        />
        <div className="flex items-center w-full">
          

          {ventanaMenos800px ? (
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10 h-screen"
                onClose={closeModal}
              >
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50 h-screen z-100" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="h-[95vh] w-[80vw] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                        <div className="h-full flex flex-col">
                          <div className=" border-b-[1px] p-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={`http://localhost:5000${posts.cliente.imagen_perfil}`}
                                alt=""
                                className="w-10 "
                                object-cover
                                style={{
                                  clipPath: "circle(50% at 50% 50%)",
                                }}
                              />
                              <p className="font-semibold">
                                {posts.cliente.nombre} {posts.cliente.apellido}
                              </p>
                            </div>
                            <div>
                              <Space direction="vertical">
                                <Space wrap>
                                  <Dropdown
                                    menu={{
                                      items: [
                                        usuario.id == posts.cliente.id && {
                                          key: "1",
                                          label: (
                                            <button onClick={openModalDelete}>
                                              Eliminar
                                            </button>
                                          ),
                                          danger: true,
                                        },
                                        usuario.id != posts.cliente.id && {
                                          key: "2",
                                          label: (
                                            <button onClick={openModalReport}>
                                              Reportar
                                            </button>
                                          ),
                                        },
                                      ],
                                    }}
                                    placement="bottomLeft"
                                  >
                                    <BsThreeDots className="" size={25} />
                                  </Dropdown>
                                </Space>
                              </Space>
                            </div>
                          </div>
                          <div className=" bg-black w-full flex items-center justify-center">
                            <img
                              src={`http://localhost:5000/imagenes/processed-${posts.imagen}`}
                              alt=""
                              className="w-auto"
                            />
                          </div>
                          <div className="w-full flex flex-col justify-between h-full overflow-y-scroll">
                            <div className="flex flex-col h-full items-start justify-start text-base p-5 border-b-[1px] overflow-y-scroll">
                              {commentData.length !== 0 ? (
                                commentData.map((comentario) => (
                                  <div
                                    key={comentario.id}
                                    className="mb-2 flex items-start gap-2"
                                  >
                                    <img
                                      src={`http://localhost:5000${comentario.cliente.imagen_perfil}`}
                                      alt=""
                                      className="w-7 h-7 rounded-full"
                                      object-cover
                                    />
                                    <p className="">
                                      <span className="font-semibold">
                                        {" "}
                                        {comentario.cliente.nombre}{" "}
                                        {comentario.cliente.apellido}:{" "}
                                      </span>

                                      {comentario.descripcion}
                                    </p>
                                  </div>
                                ))
                              ) : (
                                <p>Sin comentarios aún</p>
                              )}
                            </div>

                            <div className="flex flex-col gap-2">
                              <div className="p-5  flex items-center gap-3">
                                {isLiked ? (
                                  <AiFillHeart
                                    className="mr-2 w-8 h-8 cursor-pointer"
                                    style={{
                                      fill: "#FF0000",
                                      animation: "heartBeat 0.8s ease infinite",
                                      cursor: "pointer",
                                      opacity: 1,
                                    }}
                                    onClick={setLikes}
                                  />
                                ) : (
                                  <AiOutlineHeart
                                    className="mr-2 w-8 h-8 cursor-pointer"
                                    onClick={setLikes}
                                    w
                                  />
                                )}
                                <div>
                                  <p className="font-semibold">{like} likes</p>
                                  <p className="text-[#9c9c9c] text-sm">
                                    Hace {timeAgo}
                                  </p>
                                </div>
                              </div>
                              <div className="p-5 h-full border-t-[1px] flex justify-between gap-3 items-center">
                                <textarea
                                  value={newComment}
                                  onChange={(e) =>
                                    setNewComment(e.target.value)
                                  }
                                  type="text"
                                  className="outline-none w-full resize-none"
                                  placeholder="Añade un comentario..."
                                />
                                <button
                                  onClick={async () => {
                                    await addComment({
                                      comentario: newComment,
                                    });
                                    const data = await getComments();
                                    setCommentData(data);
                                    setNewComment("");
                                  }}
                                  className="text-[#ff8399] font-semibold cursor-pointer"
                                >
                                  Publicar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          ) : (
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10 h-screen"
                onClose={closeModal}
              >
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50 h-screen z-100" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="h-[95vh] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                        <div className="h-full flex">
                          <div className=" bg-black w-[65%] flex items-center justify-center">
                            <img
                              src={`http://localhost:5000/imagenes/processed-${posts.imagen}`}
                              alt=""
                              className="w-auto"
                            />
                          </div>
                          <div className="w-[35%] max-w-[35%] h-full flex-col">
                            <div className=" border-b-[1px] p-5 flex items-center justify-between h-[10%]">
                              <div className="flex items-center gap-3">
                                <img
                                  src={`http://localhost:5000${posts.cliente.imagen_perfil}`}
                                  alt=""
                                  className="w-10 "
                                  object-cover
                                  style={{
                                    clipPath: "circle(50% at 50% 50%)",
                                  }}
                                />
                                <p className="font-semibold">
                                  {posts.cliente.nombre}{" "}
                                  {posts.cliente.apellido}
                                </p>
                              </div>
                              <div>
                                <Space direction="vertical">
                                  <Space wrap>
                                    <Dropdown
                                      menu={{
                                        items: [
                                          usuario.id == posts.cliente.id && {
                                            key: "1",
                                            label: (
                                              <button onClick={openModalDelete}>
                                                Eliminar
                                              </button>
                                            ),
                                            danger: true,
                                          },
                                          usuario.id != posts.cliente.id && {
                                            key: "2",
                                            label: (
                                              <button onClick={openModalReport}>
                                                Reportar
                                              </button>
                                            ),
                                          },
                                        ],
                                      }}
                                      placement="bottomLeft"
                                    >
                                      <BsThreeDots className="" size={25} />
                                    </Dropdown>
                                  </Space>
                                </Space>
                              </div>
                            </div>
                            <div className="flex flex-col h-[70%] items-start justify-start text-base p-5 overflow-y-scroll">
                              {commentData.length !== 0 ? (
                                commentData.map((comentario) => (
                                  <div
                                    key={comentario.id}
                                    className="mb-2 flex items-start gap-2 w-full"
                                  >
                                    <img
                                      src={`http://localhost:5000${comentario.cliente.imagen_perfil}`}
                                      alt=""
                                      className="w-7 h-7 rounded-full"
                                      object-cover
                                    />
                                    <div className="flex gap-1">
                                      <p className="">
                                        <span className="font-semibold">
                                          {" "}
                                          {comentario.cliente.nombre}{" "}
                                          {comentario.cliente.apellido}:{" "}
                                        </span>

                                        {comentario.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p>Sin comentarios aún</p>
                              )}
                            </div>

                            <div className="h-[20%]">
                              <div className="p-5 border-t-[1px] flex items-center gap-3">
                                {isLiked ? (
                                  <AiFillHeart
                                    className="mr-2 w-8 h-8 cursor-pointer"
                                    style={{
                                      fill: "#FF0000",
                                      animation: "heartBeat 0.8s ease infinite",
                                      cursor: "pointer",
                                      opacity: 1,
                                    }}
                                    onClick={setLikes}
                                  />
                                ) : (
                                  <AiOutlineHeart
                                    className="mr-2 w-8 h-8 cursor-pointer"
                                    onClick={setLikes}
                                    w
                                  />
                                )}
                                <div>
                                  <p className="font-semibold">{like} likes</p>
                                  <p className="text-[#9c9c9c] text-sm">
                                    Hace {timeAgo}
                                  </p>
                                </div>
                              </div>
                              <div className="p-5 border-t-[1px] flex justify-between gap-3 items-center">
                                <textarea
                                  value={newComment}
                                  onChange={(e) =>
                                    setNewComment(e.target.value)
                                  }
                                  type="text"
                                  className="outline-none w-full resize-none"
                                  placeholder="Añade un comentario..."
                                />
                                <button
                                  onClick={async () => {
                                    await addComment({
                                      comentario: newComment,
                                    });
                                    const data = await getComments();
                                    setCommentData(data);
                                    setNewComment("");
                                  }}
                                  className="text-[#ff8399] font-semibold cursor-pointer"
                                >
                                  Publicar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          )}
        </div>
        <div className="500:hidden w-full h-[1px] mt-6 rounded-full bg-[#d6d6d6]"></div>
      </div>
    </div>
  );
};



export function LowerProfile({
  usuarioPerfil,
  setFollowersCount,
  followersCount,
  followingsCount,
}) {

  const { usuario } = useSession();

  const [posts, setPosts] = useState(null);

  const [sentPost, setSentPost] = useState(null);

  const obtenerPosts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/feed/userPosts/${usuarioPerfil.id}`);
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPosts();
  }, []);

  const [userImages, setUserImages] = useState([]);
  const [numPublicaciones, setNumPublicaciones] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true); 
  const [errorImages, setErrorImages] = useState(null); 
  useEffect(() => {
    async function fetchUserImages() {
      try {
        const response = await clienteAxios.get(`/user/images/${usuarioPerfil.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setUserImages(response.data.images);
        setNumPublicaciones(response.data.numPublicaciones);
        setLoadingImages(false); 
      } catch (error) {
        console.log("Error", error);
        setErrorImages(error.message);
        setLoadingImages(false); 
      }
    }

    fetchUserImages();
  }, [usuarioPerfil]);


  return (
    <Element className=" flex justify-center mx-auto">
      <Fade bottom delay={300}>
        <div className=" mb-20 flex flex-col 800:flex-row-reverse gap-8 800:gap-4 1280:gap-20 1280:w-[80%] w-[95%]">
          <div className="800:w-[25%] 800:h-full flex flex-col w-full gap-5">
            <DataProfile
              posts={numPublicaciones} 
              followers={followersCount}
              following={followingsCount}
              usuarioPerfil={usuarioPerfil}
            />

            {/* {Acá solo mando la info de userLanguages} */}
            <LanguagesProfile
            
              motherLanguages={usuarioPerfil.idioma_materno}
              fluentLanguages={usuarioPerfil.idiomas_fluidos}
              learningLanguages={usuarioPerfil.idiomas_aprendiendo}
            />

            <AboutProfile usuarioPerfil={usuarioPerfil} />
          </div>
          <div className="grid grid-cols-3 auto-rows-min gap-1 relative w-full 800:w-[75%] h-auto">
            {/* {loadingImages ? (
              <p>Cargando imágenes...</p>
            ) : errorImages ? (
              <p>Error al cargar imágenes: {errorImages}</p>
            ) : (
              userImages.map((imgSrc, index) => (
                <Fade bottom key={index} delay={index * 300}>
                  <img
                    src={`http://localhost:5000/imagenes/processed-${imgSrc}`}
                    className="cursor-pointer"
                  />
                </Fade>
              ))
            )} */}
            {posts &&
            posts.map((post) => (
              <PostProfile
                keyProp={post.id}
                posts={post}
                key={post.id}
                setPosts={setPosts}
              />
            ))}
          </div>
        </div>
      </Fade>
    </Element>
  );
}
