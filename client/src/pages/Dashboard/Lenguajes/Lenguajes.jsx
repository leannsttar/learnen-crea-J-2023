import React, { useState } from "react";

export const FlagCard = ({ flagImg, buttonImg1, buttonImg2 }) => {
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
      <div className="bg-white rounded shadow-md p-4 flex flex-row justify-between items-start h-4/5 w-4/5 gap-8 mt-4">
        <div className="flex flex-row items-center gap-6 pl-16">
          <img
            src={flagImg}
            alt="Bandera"
            className="w-16 h-32 object-contain mb-2"
          />
          <p className="text-xl">Francés</p>
          <img
            src={buttonImg1}
            alt="Botón 1"
            className="w-8 h-8 object-contain mt-2 cursor-pointer"
            onClick={openEditModal}
          />
          <img
            src={buttonImg2}
            alt="Botón 2"
            className="w-6 h-5 object-contain mt-2 cursor-pointer"
            onClick={openDeleteModal}
          />
        </div>
        <div className="flex flex-row items-center gap-6 pr-16">
          <img
            src={flagImg}
            alt="Bandera"
            className="w-16 h-32 object-contain mb-2"
          />
          <p className="text-xl">Francés</p>
          <img
            src={buttonImg1}
            alt="Botón 1"
            className="w-8 h-8 object-contain mt-2 cursor-pointer"
            onClick={openEditModal}
          />
          <img
            src={buttonImg2}
            alt="Botón 2"
            className="w-6 h-5 object-contain mt-2 cursor-pointer"
            onClick={openDeleteModal}
          />
        </div>{" "}
      </div>

      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-544 h-451">
          {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
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
              <p className="font-semibold text-gray-800">Actualizar Bandera</p>
              <label className="my-2 p-4 border h-48 rounded-lg border-dashed border-gray-400 bg-light-light flex flex-col justify-center items-center" htmlFor="modalImg">
                <img
                  src="/src/assets/dragfile.png"
                  className="absolute w-[100px] h-[100px] object-contain rounded-lg"
                />
                <input
                  type="file"
                  className="hidden" 
                  id='modalImg'
                />
                <p className="absolute mt-36 text-sm">Agregar una nueva imagen</p>
              </label>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-800">Actualizar Nombre</p>
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
          onClick={closeDeleteModal}
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
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <FlagCard
        flagImg="/src/assets/french.png"
        buttonImg1="/src/assets/Pencil.png"
        buttonImg2="/src/assets/delete.png"
      />
    </div>
  );
};
