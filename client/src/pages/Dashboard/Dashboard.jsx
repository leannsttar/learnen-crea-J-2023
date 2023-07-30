import React from "react";

export const AsideMenu = ({ onLogout }) => {
  return (
    <aside className="w-1/5 pl-6 pr-8 mr-4 flex flex-col justify-between h-screen">
      <div>
        <div className="flex flex-row items-center mb-4 p-4">
          <img className="w-18 h-16" src="/assets/learnen.png" alt="Ícono" />
          <div className="flex flex-col">
            <img
              className="mr-2 w-24 h-24 mb-4"
              src="/src/assets/learnen-palabra.png"
              alt="Texto"
            />
            <p className="absolute mt-16">Admin Dashboard</p>
          </div>
        </div>

        <div className="mb-8 p-8">
          <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
            <img
              className="w-6 h-6 mr-2 invert"
              src="/src/assets/House.png"
              alt="Ícono General"
            />
            <div className="pl-2">General</div>
          </button>

          <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src="/src/assets/ChartPieSlice.png"
              alt="Ícono Publicaciones"
            />
            <div className="pl-2">Publicaciones</div>
          </button>

          <div className="relative">
            <button
              className="w-full py-2 px-4 rounded flex items-center"
              onClick={() => {
                const dropdownContent = document.getElementById("dropdown-content");
                dropdownContent.classList.toggle("hidden");
              }}
            >
              <img
                className="w-6 h-6 mr-2"
                src="/src/assets/Users.png"
                alt="Ícono Opciones"
              />
              <div className="pl-2">Usuarios</div>
              <img
                className="w-6 h-6 ml-2"
                src="/src/assets/arrow.png"
                alt="Flecha"
              />
            </button>
            <div
              id="dropdown-content"
              className="dropdown-content p-2 flex flex-col"
            >
              <a href="#" className="font-bold text-sm text-left pb-2 pl-12">
                Estadísticas
              </a>
              <a href="#" className="font-bold text-sm text-left pb-2 pl-12">
                Usuarios
              </a>
              <a href="#" className="font-bold text-sm text-left pb-2 pl-12">
                Reportes
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-full py-2 px-4 rounded flex items-center mb-8 pr-4"
        onClick={onLogout}
      >
        <img
          className="w-6 h-6 mr-2"
          src="/src/assets/SignOut.png"
          alt="Ícono Cerrar Sesión"
        />
        <div>Cerrar sesión</div>
      </button>
    </aside>
  );
};

export const Navbar = ({ userName, userRole, userAvatar }) => {
  return (
    <nav className="flex justify-between mb-16 bg-white p-6">
      <div className="text-xl font-bold">{userName}</div>
      <div className="flex items-center justify-center">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={userAvatar}
          alt="Foto de perfil"
        />
        <div>
          <div className="text-sm font-medium">{userName}</div>
          <div className="text-xs text-gray-500">{userRole}</div>
        </div>
      </div>
    </nav>
  );
};

export const InfoCard = ({ title, value, icon }) => {
  return (
    <div className="flex-1 mb-4 m-2 flex items-center p-4 gap-2 bg-white rounded border border-purple-100">
      <img src={icon} alt="Ícono" className="w-8 h-8 m-2" />
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-lg mb-0">{title}</h1>
        <h1 className="text-base font-bold mb-0">{value}</h1>
      </div>
    </div>
  );
};


export const AdminCard = ({ admin }) => {
  return (
    <div key={admin.id} className="relative p-4 rounded bg-white flex flex-col items-center w-52 gap-4">
      <button className="absolute top-0 right-0 text-gray rounded-full p-2">X</button>
      <img className="w-20 h-20 rounded-full mb-2" src={admin.foto} alt={`Foto de ${admin.nombre}`} />
      <div className="text-lg mb-2 text-center">{admin.nombre}</div>
      <div className="text-sm mb-2">{admin.puesto}</div>
    </div>
  );
};

export const LastUsers = ({ users }) => {
  return (
    <aside className="w-1/2 pr-16 pl-16">
      <div className="bg-white pl-4 pr-4 pt-4 pb-8 rounded">
        <h1 className="text-2xl">Últimos usuarios</h1>
        {/* Renderizar la lista de últimos usuarios */}
        {users.map((user) => (
          <div key={user.id} className="flex items-center mt-8">
            <img className="w-12 h-12 rounded-full mr-4" src={user.avatar} alt="Foto de último usuario" />
            <div className="">
              <div className="text-sm font-medium mb-2">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
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
  ];

  const lastUsersData = [
    {
      id: 1,
      name: "Nombre Usuario 1",
      email: "correo1@example.com",
      avatar: "/src/assets/chica-usuario.png",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* AsideMenu reutilizable para las demás páginas XD */}
      <AsideMenu onLogout={() => console.log("Cerrar sesión")} />

      {/* Main content de lo demás */}
      <div className="w-4/5 p-4 bg-gray-100">
        {/* Navbar */}
        <Navbar userName="Hola Rodri" userRole="Cargo" userAvatar="/src/assets/chica-admin.png" />

        <div className="flex">
          {/* InfoCards de las que están los div purpuras*/}
          <div className="w-1/2 pl-8">
            <div className="flex p-2">
              <InfoCard title="Usuarios" value="100" icon="/src/assets/users-div.png" />
              <InfoCard title="Publicaciones" value="678" icon="/src/assets/file-div.png" />
            </div>
            <div className="flex">
              <InfoCard title="Reportes" value="45" icon="/src/assets/reports-div.png" />
              <InfoCard title="Artículos" value="345" icon="/src/assets/articles-div.png" />
            </div>

            {/* Administradores */}
            <div className="mt-16">
              <div className="text-2xl font-bold mb-6">Administradores</div>
              <div className="flex flex-row gap-12">
                {administradoresData.map((administrador) => (
                  <AdminCard key={administrador.id} admin={administrador} />
                ))}
              </div>
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
