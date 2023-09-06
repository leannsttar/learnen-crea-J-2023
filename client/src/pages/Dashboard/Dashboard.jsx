import React, { useState, useEffect } from "react";
import { AsideMenu } from "./AsideMenu.jsx";
import { Navbar } from "./NavBar.jsx";
import axios from 'axios';
import { clienteAxios } from "../../config/clienteAxios.js";
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
      {/* <button className="absolute top-0 right-0 text-gray rounded-full p-2">
        X
      </button> */}
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

  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:5000/usuarios", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setUsuarios(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="bg-white pl-8 pr-8 pt-6 pb-8 rounded-2xl">
      <h1 className="text-2xl">Últimos usuarios</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="flex items-center mt-8">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={`http://localhost:5000${usuario.imagen_perfil}`}
            alt="Foto de último usuario"
          />
          <div className="">
            <div className="text-sm font-medium mb-2">{usuario.nombre}</div>
            <div className="text-sm text-gray-500">{usuario.correo}</div>
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
      nombre: "Rodri Pineda",
      puesto: " Administrador",
    },
    // {
    //   id: 1,
    //   foto: "/src/assets/administrador.png",
    //   nombre: "Leandro Valencia",
    //   puesto: "Nancero",
    // }
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

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    async function fetchTotalUsers() {
      try {
        const response = await clienteAxios.get('/dashboard/countUsers'); 
        setTotalUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchTotalUsers();
  }, []);


  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    async function fetchTotalPosts() {
      try {
        const response = await clienteAxios.get('/dashboard/countPosts'); 
        setTotalPosts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchTotalPosts();
  }, []);

  const [totalReports, setTotalReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await clienteAxios.get('/dashboard/allReports');
        setTotalReports(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    }

    fetchReports();
  }, []);


  return (
    <div className="flex min-h-screen">
      {/* AsideMenu reutilizable para las demás páginas XD */}
      <AsideMenu onLogout={() => console.log("Cerrar sesión")} />

      {/* Main content de lo demás */}
      <div className="w-full bg-gray-100 pb-12">
        {/* Navbar */}
        <Navbar
          userName="Rodri"
          userRole="Cargo"
          userAvatar="/src/assets/chica-admin.png"
        />
        <div className="flex flex-col md:grid grid-cols-[1fr_max-content] md:p-4 gap-6 max-w-6xl md:ml-12">
          <div className="">
            <div className="flex md:ml-16 mb-10">
              <InfoCard
                title="Usuarios"
                value={totalUsers}
                icon="/src/assets/users-div.png"
              />
              <InfoCard
                title="Publicaciones"
                value={totalPosts}
                icon="/src/assets/file-div.png"
              />
              <InfoCard
                title="Reportes"
                value={totalReports.length}
                icon="/src/assets/reports-div.png"
              />
            </div>

          {/* LastUsers */}
          <LastUsers users={lastUsersData} />
          </div>
        </div>

        <div className="text-2xl font-bold mb-6 mt-20 ml-16">Administrador</div>
          <div className="flex flex-row gap-12">
            {administradoresData.map((administrador) => (
              <AdminCard key={administrador.id} admin={administrador} />
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
