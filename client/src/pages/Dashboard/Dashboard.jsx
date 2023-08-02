import React from "react";
import { AsideMenu } from "./AsideMenu.jsx";
import { Navbar } from "./NavBar.jsx";

export const InfoCard = ({ title, value, icon }) => {
  return (
    <div className="flex-1 mb-4 m-2 flex items-center p-4 gap-3 rounded-2xl border border-purple-100 bg-white">
      <img src={icon} alt="Ícono" className="w-8 h-8 m-2" />
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-lg mb-0">{title}</h1>
        <h1 className="text-base font-bold mb-0">{value}</h1>
      </div>
    </div>
  );
};
{/*<style>
        {`
      *{
        font-family: 'Poppins'
      }
    `}
      </style> */}
export const AdminCard = ({ admin }) => {
  return (
    <div
      key={admin.id}
      className="relative p-4 rounded-2xl flex flex-col items-center w-52 gap-4 bg-white ml-16"
    >
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

export const LastUsers = ({ users }) => {
  return (
    <div className="bg-white pl-8 pr-8 pt-6 pb-8 rounded-2xl">
      <h1 className="text-2xl">Últimos usuarios</h1>
      {/* Renderizar la lista de últimos usuarios */}
      {users.map((user) => (
        <div key={user.id} className="flex items-center mt-8">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={user.avatar}
            alt="Foto de último usuario"
          />
          <div className="">
            <div className="text-sm font-medium mb-2">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export function Dashboard() {
  const administradoresData = [
    {
      id: 1,
      foto: "/src/assets/administrador.png",
      nombre: "Rodrigo Pineda",
      puesto: "Diseñador",
    },
    {
      id: 1,
      foto: "/src/assets/administrador.png",
      nombre: "Leandro Valencia",
      puesto: "Nancero",
    }
  ];

  const lastUsersData = [
    {
      id: 1,
      name: "Nombre Usuario 1",
      email: "correo1@example.com",
      avatar: "/src/assets/chica-usuario.png",
    },
    {
      id: 2,
      name: "Nombre Usuario 1",
      email: "correo1@example.com",
      avatar: "/src/assets/chica-usuario.png",
    } 
  ];

  return (
    <div className="flex h-screen">
      {/* AsideMenu reutilizable para las demás páginas XD */}
      <AsideMenu onLogout={() => console.log("Cerrar sesión")} />

      {/* Main content de lo demás */}
      <div className="w-full bg-gray-100">
        {/* Navbar */}
        <Navbar
          userName="Hola Rodri"
          userRole="Cargo"
          userAvatar="/src/assets/chica-admin.png"
        />
        <div className="grid grid-cols-[1fr_max-content] p-4 gap-6 max-w-6xl ml-12">
        <div className="">
          <div className="grid grid-cols-2 max-w-xl ml-16">
            <InfoCard
              title="Usuarios"
              value="100"
              icon="/src/assets/users-div.png"
            />
            <InfoCard
              title="Publicaciones"
              value="678"
              icon="/src/assets/file-div.png"
            />
            <InfoCard
              title="Reportes"
              value="45"
              icon="/src/assets/reports-div.png"
            />
            <InfoCard
              title="Artículos"
              value="345"
              icon="/src/assets/articles-div.png"
            />
          </div>
          
          <div className="text-2xl font-bold mb-6 mt-20 ml-16">Administradores</div>
          <div className="flex flex-row gap-12">
            {administradoresData.map((administrador) => (
              <AdminCard key={administrador.id} admin={administrador} />
            ))}
          </div>
        </div>

        {/* LastUsers */}
        <LastUsers users={lastUsersData} />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
