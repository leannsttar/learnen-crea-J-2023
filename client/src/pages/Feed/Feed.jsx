import { React, Fragment, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsChatText, BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa'
import { AppTitle } from "../../components/AppTitle";
import { Dialog, Transition } from "@headlessui/react";
import galleryAdd from "../../assets/gallery-add.svg";
import ProfilePhoto from "../../assets/Female.png";
import { allLanguages } from "../../data/languages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const feedData = {
  id: 1,
  name: "Esteban",
  time: "3 minutes ago",
  image: "/assets/person-post.png",
  avatar: "/assets/german.png",
  imagePost: "/assets/post1.png",
  likes: 12,
  comments: 13,
};
const peopleData = [
  {
    id: 1,
    name: "Esteban Villeda",
    image: "/assets/person-post.png",
  },
];

const blogData = {
  title: "La naranja es buena para que la vida te mejore",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam iusto molestiae, eos quis voluptas!",
  image: "/assets/feed-blog.png",
};

const PostCard = ({ keyProp, posts }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
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

  return (
    <div key={keyProp} className="flex flex-col items-center mt-16">
      <div className="border-l border-r border-t border-black bg-gray-100 flex flex-col p-4 w-[431px]">
        <div className="flex flex-row items-center justify-between w-full">
          <img className="w-12 h-12 -mr-3 z-[1]" src={feedData.image} alt="" />
          <img className="w-12 h-12 " src={matchingLanguage[1]} alt="" />

          <div className="flex flex-col ml-6">
            <h6 className="font-bold">{feedData.name}</h6>
            <h6 className="text-sm">Hace {timeAgo}</h6>
          </div>
          <AiOutlineEllipsis className="ml-auto w-12 h-12" />
        </div>
        <div className="mt-4">
          <p>{posts.descripcion}</p>
        </div>
      </div>
      <img
        className="w-[431px] border-black border-[1px]"
        src={`http://localhost:5000/imagenes/processed-${posts.imagen}`}
        alt=""
      />
      <div className="border-l border-r border-b border-black bg-gray-100 flex flex-row items-center w-[431px] p-4">
        <AiOutlineHeart className="mr-2 w-6 h-6" />
        <p>{feedData.likes}</p>
        <div className="flex-grow"></div>
        <div onClick={openModal} className="cursor-pointer flex">
          <BsChatText className="mr-2 w-6 h-5" />
          <p className="text-sm">{feedData.comments} comments</p>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 h-screen"
            onClose={closeModal}
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
                  <Dialog.Panel className="h-[95vh] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                    {/* <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                    </Dialog.Title> */}
                    <div className="h-full flex">
                      <div className=" bg-black flex items-center justify-center">
                        <img
                          src={`http://localhost:5000/imagenes/processed-${posts.imagen}`}
                          alt=""
                          className="w-auto"
                        />
                      </div>
                      <div className="w-[25vw] h-full flex-col justify-between">
                        <div className=" border-b-[1px] p-5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src={feedData.image} alt="" className="w-10" />
                            <p className="font-semibold">nacelyorellana_</p>
                          </div>
                          <div>
                            <BsThreeDots size={"20"} />
                          </div>
                        </div>
                        <div className="">No comments yet</div>
                        <div className="">
                          <div className="p-5 border-t-[1px] flex items-center gap-3">
                            <AiOutlineHeart size={30} className="cursor-pointer"/>
                            <div>
                              <p className="font-semibold">9,944 likes</p>
                              <p className="text-[#9c9c9c] text-sm">
                                Hace 3 días
                              </p>
                            </div>
                          </div>
                          <div className="p-5 border-t-[1px] flex justify-between">
                            <input type="text" className="outline-none" placeholder="Añade un comentario..."/>
                            <input type="submit" value='Publicar' className="text-[#ff8399] font-semibold"/>
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
      </div>
    </div>
  );
};

const PeopleSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-400 mt-14 ml-10">People</h1>
      <div className="flex flex-row mt-16 ml-8 items-center">
        <img className="p-2" src={peopleData[0].image} alt="" />
        <h3 className="p-6 font-bold text-lg">{peopleData[0].name}</h3>
        <div className="ml-auto flex items-center">
          <button className="shadow-circle border-2 border-black bg-white h-[45px] w-[100px] m-6 hover:scale-105 hover: transition-scale ease-in duration-200">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-400 mt-32 ml-10">Our blog</h1>
      <div className="flex flex-row mt-12 p-8">
        <img className="w-[170px] h-[120px]" src={blogData.image} alt="" />
        <div className="flex flex-col">
          <p className="font-bold text-xl ml-6">{blogData.title}</p>
          <p className="ml-6 mt-4">{blogData.content}</p>
        </div>
      </div>
    </div>
  );
};

export function Feed() {
  const [posts, setPosts] = useState(null);

  const [sentPost, setSentPost] = useState(null);

  const obtenerPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/feed");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPosts();
  }, [sentPost]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (selectedImage !== null && selectedLanguage !== null) {
      try {
        console.log(selectedImage2);
        console.log(selectedImage3);
        console.log(caption);
        const response = await axios.post(
          "http://localhost:5000/feed",
          {
            imagen: selectedImage3,
            idioma: selectedLanguage[0],
            descripcion: caption,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        console.log(response.data);

        setSentPost(data);

        setSelectedLanguage(null);
        setSelectedImage(null);
        setCaption("");
        closeModal();
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  let [isOpen, setIsOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

  const [caption, setCaption] = useState("");

  const handleLanguageClick = (language) => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === language ? null : language
    );
    setValue("idioma", language[0]);
  };

  //no voy a mentir, esto de la imagen me lo hizo mi papi chat
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage3(event.target.files[0]);

      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);

      const reader2 = new FileReader();
      reader2.onload = (e) => {
        setSelectedImage2(e.target.result);
      };
      reader2.readAsArrayBuffer(file);
    }
  };

  const handleCaptionChange = (event) => {
    const value = event.target.value;
    if (value.length <= 200) {
      setCaption(value);
    }
  };

  function closeModal() {
    setIsOpen(false);
    // setValue("idioma", null);
    setValue("descripcion", "");
    // setValue("imagen", selectedImage);
  }

  function closeModal2() {
    setSelectedLanguage(null);
    setSelectedImage(null);
    setCaption("");
    setValue("idioma", selectedLanguage);
    setValue("descripcion", "");
    setValue("imagen", selectedImage);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Pasos de cómo funciona */}
      <div className="grid grid-cols-[1fr_650px]">
        <div className="mt-[40px] mx-[80px] h-full mb-10">
          <AppTitle title="Tu feed" />
          <button
            onClick={openModal}
            className="flex items-center gap-3 px-5 mt-6 py-2.5 shadow-square border border-black bg-[#FFE9E9] hover:bg-[#FFD0D0] hover:transition-bg ease-in duration-200"
          >
            <AiOutlinePlus className="w-6 h-6" />
            <p>Crear una publicación</p>
          </button>
          <ToastContainer />
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10 h-screen"
              onClose={closeModal2}
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
                    <Dialog.Panel className="w-full max-w-[70vw] h-[80vh] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        encType="multipart/form-data"
                      >
                        <Dialog.Title
                          as="div"
                          className="flex justify-between border-b-[1px] py-2 px-5"
                        >
                          <button
                            className="text-indigo-800 font-semibold"
                            onClick={closeModal2}
                          >
                            Cancelar
                          </button>
                          <h3 className="text-lg font-medium leading-6 text-gray-900 text-center ">
                            Crea nueva publicación
                          </h3>
                          <input
                            type="submit"
                            // onClick={() => {
                            //   if (selectedImage === null) {
                            //     toast.error("Debes subir una imagen");
                            //   } else if (selectedLanguage === null) {
                            //     toast.error("Debes seleccionar el idioma");
                            //   } else {
                            //     closeModal();
                            //   }
                            // }}
                            onClick={() => {
                              if (selectedImage === null) {
                                toast.error("Debes subir una imagen");
                              } else if (selectedLanguage === null) {
                                toast.error("Debes seleccionar el idioma");
                              } else {
                                // Set the compartirClicked flag to true when the "Compartir" button is clicked
                                closeModal;
                              }
                            }}
                            className="text-[#FF8399] font-semibold cursor-pointer"
                            value={"Compartir"}
                          ></input>
                        </Dialog.Title>

                        <div className="flex h-full">
                          {!selectedImage && (
                            <div className="w-[75%]  flex justify-center items-center border-r-[1px]">
                              <div className="flex flex-col gap-7">
                                <img
                                  src={galleryAdd}
                                  alt=""
                                  className="w-full h-full"
                                />
                                <label className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer">
                                  Selecciona una imagen
                                  <input
                                    {...register("imagen")}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageSelect}
                                  />
                                </label>
                              </div>
                            </div>
                          )}

                          {selectedImage && (
                            <div className="w-[75%] flex justify-center items-center border-r-[1px]">
                              <img
                                src={selectedImage}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex flex-col w-[25%] h-full p-4 pr-5 gap-5">
                            <div className="flex gap-3 items-center">
                              <img src={ProfilePhoto} alt="" className="w-9" />
                              <p className="font-semibold">nacelyorellana_</p>
                            </div>
                            <textarea
                              {...register("descripcion")}
                              className="outline-none resize-none"
                              id=""
                              cols="30"
                              rows="7"
                              placeholder="Escribe un pie de foto"
                              onChange={handleCaptionChange}
                            ></textarea>
                            <p className="text-sm text-end text-gray-500">
                              {caption.length}/200 caracteres
                            </p>
                            <div className="flex flex-col gap-4">
                              <p className="text-[#646464] text-[18px]">
                                Idioma
                              </p>

                              <div className="flex flex-col gap-1 overflow-y-scroll h-[260px]">
                                {allLanguages.map((language, index) => (
                                  <div
                                    key={index}
                                    className="flex gap-4 items-center hover:bg-[#e4e4e4] rounded-lg p-2 cursor-pointer"
                                    onClick={() =>
                                      handleLanguageClick(language)
                                    }
                                  >
                                    <img
                                      src={language[1]}
                                      alt=""
                                      className="w-8"
                                    />
                                    <p>{language[0]}</p>
                                  </div>
                                ))}
                              </div>
                              {selectedLanguage && (
                                <div className="mt-4 flex max-w-[200px] mx-auto py-2 px-5 rounded-lg bg-[#f5f5f5] justify-center items-center gap-2">
                                  <img
                                    src={selectedLanguage[1]}
                                    alt=""
                                    className="w-8"
                                  />
                                  <p>{selectedLanguage[0]}</p>
                                  <input
                                    className="hidden"
                                    {...register("idioma")}
                                    type="text"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {posts &&
            posts.map((post) => (
              <PostCard keyProp={post.id} posts={post} key={post.id} />
            ))}
        </div>
        <div className="border-l border-solid border-black md:flex sm:hidden">
          <PeopleSection />
          <BlogSection />
        </div>
      </div>
    </>
  );
}
