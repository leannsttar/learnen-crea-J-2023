import React from "react";

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
    <div className="flex bg-gray-100">
      {administradoresData.map((administrador) => (
        <div key={administrador.id}>
        <AdminCard admin={administrador} />
      </div>
    ))}
    <AddAdmin />
  </div>
  );
};

export const AdminCard = ({ admin }) => {
  return (
    <div className="relative p-4 m-16 rounded-2xl bg-gray-100 flex flex-col items-center w-52 gap-4 h-52">
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
  return (
    <>
      <div className="p-4 m-16 border-pinkish border rounded-2xl flex flex-col justify-center items-center w-52 gap-4 h-52">
        <p className="font-bold text-pinkish text-6xl">+</p>
        <p className="text-pinkish">Añadir admin</p>
      </div>
    </>
  );
};
