import React, { useState } from "react";


export const Administradores = () => {
  const administradoresData = [
    {
      id: 1,
      foto: "/src/assets/administrador.png",
      nombre: "Rodrigo Pineda",
      puesto: "Diseñador",
    },
    {
      id: 2,
      foto: "/src/assets/administrador.png",
      nombre: "Leandro Valencia",
      puesto: "Nancero",
    },
  ];

  return (
    <>
      <div className="flex bg-gray-100">
        {administradoresData.map((administrador) => (
          <div key={administrador.id}>
            <AdminCard admin={administrador} />
          </div>
        ))}
        <AddAdmin />
      </div>
    </>
  );
};

export const AdminCard = ({ admin }) => {
  return (
    <div className="relative p-4 m-16 rounded-2xl bg-white flex flex-col items-center w-52 gap-4 h-52">
      <button className="absolute top-0 right-0 text-gray rounded-full p-2">
        X
      </button>
      <img
        className="w-20 h-20 rounded-full mb-2"
        src={admin.foto}
        alt={`Foto de ${admin.nombre}`}
      />
      <div className="text-lg mb-2 text-center">{admin.nombre}</div>
      <div className="text-sm mb-2">{admin.puesto}</div>
    </div>
  );
};


export const AddAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="p-4 m-16 border-pinkish border rounded-2xl bg-white flex flex-col justify-center items-center w-52 gap-4 h-52 cursor-pointer"
        onClick={openModal}
      >
        <button className="font-bold text-pinkish text-6xl">+</button>
        <p className="text-pinkish">Añadir admin</p>
      </div>
      
      {/*todo esto es el modal xd */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-544 h-451">
            <h2 className="text-2xl font-bold mb-6">Agregar Admin</h2>
            <div className="mb-4">
              <label className="block font-semibold text-gray-800 mb-2">
                Nombre:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-pinkish"
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Rol:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-pinkish"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-pinkish text-white rounded font-semibold w-full"
                onClick={closeModal}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
