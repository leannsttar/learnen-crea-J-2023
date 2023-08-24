import React, { useState, Fragment, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import selectPhoto from "../../../assets/ssd.svg";

export const FlagCard = ({
  flagImg,
  buttonImg1,
  buttonImg2,
  keyProp,
  idioma,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div key={keyProp} className="flex justify-between items-start ">
        <div className="flex flex-row items-center gap-6 justify-between w-[25rem]">
          <div className="flex items-center gap-6">
            <img
              src={`http://localhost:5000${idioma.imagen_bandera}`}
              alt="Bandera"
              className="w-[3rem] h-[3rem] object-cover rounded-full"
            />
            <p className="text-xl">{idioma.idioma}</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={buttonImg1}
              alt="Botón 1"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={openEditModal}
            />
            <img
              src={buttonImg2}
              alt="Botón 2"
              className="w-6 h-5 object-contain cursor-pointer"
              onClick={openDeleteModal}
            />
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div
          // onClick={closeEditModal}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-8 w-544 h-451">
            {isEditModalOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 w-544 h-451">
                  <h2 className="text-2xl font-bold mb-6">Editar Idioma</h2>
                  <div className="mb-4 flex flex-row items-center justify-center gap-6 shadow-sm">
                    <img
                      src={flagImg}
                      alt="Bandera"
                      className="w-16 h-32 object-contain mb-2"
                    />
                    <p className="text-xl">Francia</p>
                  </div>
                  <div className="mb-6">
                    <p className="font-semibold text-gray-800">
                      Actualizar Bandera
                    </p>
                    <label
                      className="my-2 p-4 border h-48 rounded-lg border-dashed border-gray-400 bg-light-light flex flex-col justify-center items-center"
                      htmlFor="modalImg"
                    >
                      <img
                        src="/src/assets/dragfile.png"
                        className="absolute w-[100px] h-[100px] object-contain rounded-lg"
                      />
                      <input type="file" className="hidden" id="modalImg" />
                      <p className="absolute mt-36 text-sm">
                        Agregar una nueva imagen
                      </p>
                    </label>
                  </div>
                  <div className="mb-6">
                    <p className="font-semibold text-gray-800">
                      Actualizar Nombre
                    </p>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-pinkish"
                    />
                    <button className="bg-pinkish text-white px-4 py-2 rounded font-semibold mt-2 w-full">
                      Actualizar
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded font-semibold"
                      onClick={closeEditModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          // onClick={closeDeleteModal}
        >
          <div className="bg-white rounded-lg p-8 w-544">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/Icontrash.svg"
                alt="Delete Icon"
                className="w-12 h-14 mb-6"
              />
              <p className="text-xl font-bold mb-2">¿Quieres eliminar esto?</p>
              <p className="text-sm text-gray-600 mb-4">
                Esta acción no puede revertirse.
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded text-base"
                onClick={closeDeleteModal}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded text-base"
                onClick={() => {
                  closeDeleteModal();
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Lenguajes = () => {
  const [lenguajes, setLenguajes] = useState(null);

  const obtenerLenguajes = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/dashboard/lenguajes"
      );
      console.log(data);
      setLenguajes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerLenguajes();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(selectPhoto);
  const [imageFile, setImageFile] = useState(null);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleImageUpload = (event) => {
    //Acá guardamos la imagen como un objeto 'FileList', ponemos cero ya que es la primera imagen, igual solo va a ser una pero igualmente se pone cero, y si queremos mas imagenes se pone un atributo
    setImageFile(event.target.files[0]);

    const file = event.target.files[0];
    //Instanciamos un objeto de tipo filereader para leer el contenido de lo subido
    const reader = new FileReader();

    //Cuando se termine de leer vamos a cambiar el state a ese resultado, asi para cambiar la imagen que se muestra
    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    //Acá decimos que si existe un file vamos a usar el metodo 'readAsDataURL()' que es del objeto filreader y esto basicamente convierte el archivo en una url de datos para poder mostrar la vista previa de la imagen
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmitLanguage = async (data) => {
    if (selectedImage === selectPhoto) {
      toast.warning("Debes seleccionar una imagen, clickea el icono azul");
      return;
    }

    const { imagen_bandera, idioma } = getValues();

    const formData = new FormData();
    formData.append("imagen_bandera", imageFile);
    formData.append("idioma", idioma);

    setValue("imagen_bandera", imageFile);

    if (idioma.trim() === "") {
      toast.warning("Debes digitar el idioma");
      return;
    }

    // if (!/^[A-Za-z\s]+$/.test(idioma)) {
    //   toast.warning(
    //     "El idioma solo puede contener caracteres del alfabeto y espacios"
    //   );
    //   return;
    // }

    try {
      console.log(imagen_bandera);
      console.log(idioma);
      const response = await axios.post(
        "http://localhost:5000/dashboard/lenguajes",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Image uploaded successfully:", response.data);
      closeCreateModal();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded shadow-md p-10 flex flex-col items-start h-4/5 w-4/5 gap-8 mt-4 overflow-y-auto">
          <button
            onClick={openCreateModal}
            className="flex items-center gap-3 px-5 py-2.5 shadow-square border border-black bg-[#FFE9E9] hover:bg-[#FFD0D0] hover:transition-bg ease-in duration-200"
          >
            <AiOutlinePlus className="w-6 h-6" />
            <p>Crear un nuevo idioma</p>
          </button>
          <div className="flex flex-wrap gap-x-5 gap-y-10 p-8 w-full justify-between">
            {lenguajes &&
              lenguajes.map((lenguaje) => (
                <FlagCard
                  flagImg={lenguaje.imagen_bandera}
                  idioma={lenguaje}
                  keyProp={lenguaje.id}
                  buttonImg1="/src/assets/Pencil.png"
                  buttonImg2="/src/assets/delete.png"
                />
              ))}
          </div>
          <ToastContainer />
          <Transition appear show={isCreateModalOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10 h-screen"
              onClose={closeCreateModal}
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
                        className="text-lg font-medium leading-6 text-gray-900"
                      ></Dialog.Title>
                      <form onSubmit={handleSubmit(onSubmitLanguage)}>
                        <h2 className="text-2xl font-bold mb-6">
                          Crear Idioma
                        </h2>
                        <div className="mb-6">
                          <p className="font-semibold text-gray-800">
                            Adjuntar Bandera
                          </p>
                          <label
                            className="cursor-pointer rounded-lg border-gray-400 bg-light-light flex flex-col justify-center items-center"
                            htmlFor="modalImg"
                          >
                            <img
                              src={selectedImage}
                              alt=""
                              className="w-48 h-48 rounded-full object-cover cursor-pointer"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="modalImg"
                            />
                            <p className="mt-5 text-sm">Agregar una imagen</p>
                          </label>
                        </div>
                        <div className="mb-6">
                          <p className="font-semibold text-gray-800">Nombre</p>
                          <input
                            {...register("idioma")}
                            type="text"
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-pinkish"
                          />
                          <button
                            type="submit"
                            className="bg-pinkish text-white px-4 py-2 rounded font-semibold mt-2 w-full"
                          >
                            Crear idioma
                          </button>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="px-4 py-2 bg-red-600 text-white rounded font-semibold"
                            onClick={closeCreateModal}
                          >
                            Cerrar
                          </button>
                        </div>
                        <input
                          type="text"
                          className="hidden"
                          {...register("imagen_bandera")}
                        />
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          {/* {isCreateModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          // onClick={closeCreateModal}
        >
          <div className="bg-white rounded-lg p-8 w-544 h-451">
            <h2 className="text-2xl font-bold mb-6">Crear Idioma</h2>
            <div className="mb-6">
              <p className="font-semibold text-gray-800">Subir Bandera</p>
              <label
                className="my-2 p-4 border h-48 rounded-lg border-dashed border-gray-400 bg-light-light flex flex-col justify-center items-center"
                htmlFor="modalImg"
              >
                <img
                  src="/src/assets/dragfile.png"
                  className="absolute w-[100px] h-[100px] object-contain rounded-lg"
                />
                <input type="file" className="hidden" id="modalImg" />
                <p className="absolute mt-36 text-sm">Agregar una imagen</p>
              </label>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-800">Nombre</p>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-pinkish"
              />
              <button className="bg-pinkish text-white px-4 py-2 rounded font-semibold mt-2 w-full">
                Actualizar
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded font-semibold"
                onClick={closeCreateModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )} */}
        </div>
      </div>
    </>
  );
};
