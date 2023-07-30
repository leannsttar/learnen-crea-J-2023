import React from "react";

export function Dashboard() {
  const administradoresData = [
    {
      id: 1,
      foto: "src/assets/administrador.png",
      nombre: "Rodrigo Pineda",
      puesto: "Diseñador",
    },
  ];

  return (
    <div className="flex h-screen">
      {/*la parte de la izquierda del menú */}
      <aside className="w-1/5 pl-6 pr-8 mr-4  flex flex-col justify-between h-screen">
        <div>
          <div className="flex flex-row items-center mb-4 p-4">
            <img className="w-18 h-16" src="/assets/learnen.png" alt="Ícono" />
            <div className="flex flex-col">
              <img
                className="mr-2 w-24 h-24 mb-4"
                src="src/assets/learnen-palabra.png"
                alt="Texto"
              />
              <p className="absolute mt-16">Admin Dashboard</p>
            </div>
          </div>

          <div className="mb-8 p-8">
            <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
              <img
                className="w-6 h-6 mr-2 invert"
                src="src/assets/House.png"
                alt="Ícono General"
              />
              <div className="pl-2">General</div>
            </button>

            <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src="src/assets/ChartPieSlice.png"
                alt="Ícono Publicaciones"
              />
              <div className="pl-2">Publicaciones</div>
            </button>

            <div className="relative">
              <button
                className="w-full py-2 px-4 rounded flex items-center"
                onClick={() => {
                  const dropdownContent =
                    document.getElementById("dropdown-content");
                  dropdownContent.classList.toggle("hidden");
                }}
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="src/assets/Users.png"
                  alt="Ícono Opciones"
                />
                <div className="pl-2">Usuarios </div>
                <img
                  className="w-6 h-6 ml-2"
                  src="src/assets/arrow.png"
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

        <button className="w-full py-2 px-4 rounded flex items-center mb-8 pr-4">
          <img
            className="w-6 h-6 mr-2"
            src="src/assets/SignOut.png"
            alt="Ícono Cerrar Sesión"
          />
          <div>Cerrar sesión</div>
        </button>
      </aside>

      {/* Main content */}
      <div className="w-4/5 p-4 bg-gray-100">
        {/* Navbar */}
        <nav className="flex justify-between mb-16 bg-white p-6">
          <div className="text-xl font-bold">Hola Rodri</div>
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="src/assets/chica-admin.png"
              alt="Foto de perfil"
            />
            <div>
              <div className="text-sm font-medium">Nombre Usuario</div>
              <div className="text-xs text-gray-500">Cargo</div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* los div de los usuarios*/}
          <div className="w-1/2 pl-8">
            <div className="flex p-2">
              <div className="flex-1">
                <div className="mb-4 m-2 flex items-center p-4 gap-2 bg-white rounded border border-purple-100">
                  <img
                    src="src/assets/users-div.png"
                    alt="Ícono"
                    className="w-8 h-8 m-2"
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-lg mb-0">Usuarios</h1>
                    <h1 className="text-base font-bold mb-0">100</h1>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4 m-2 flex items-center p-4 gap-2 bg-white rounded border border-purple-100">
                  <img
                    src="src/assets/file-div.png"
                    alt="Ícono"
                    className="w-8 h-8 m-2"
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-lg mb-0">Publicaciones</h1>
                    <h1 className="text-base font-bold mb-0">678</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <div className="mb-4 m-2 flex items-center p-4 gap-2 bg-white rounded border border-purple-100">
                  <img
                    src="src/assets/reports-div.png"
                    alt="Ícono"
                    className="w-8 h-8 m-2"
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-lg mb-0">Reportes</h1>
                    <h1 className="text-base font-bold mb-0">45</h1>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4 m-2 flex items-center p-4 gap-2 bg-white rounded border border-purple-100">
                  <img
                    src="src/assets/articles-div.png"
                    alt="Ícono"
                    className="w-8 h-8 m-2"
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <h1 className="text-lg mb-0">Artículos</h1>
                    <h1 className="text-base font-bold mb-0">345</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* la sección de los administradores */}
            <div className="mt-16">
              <div className="">
                <div className="text-2xl font-bold mb-6">Administradores</div>
                <div className="flex flex-row gap-12">
                  {administradoresData.map((administrador) => (
                    <div
                      key={administrador.id}
                      className="relative p-4 rounded bg-white flex flex-col items-center w-52 gap-4"
                    >
                      <button className="absolute top-0 right-0 text-gray rounded-full p-2">
                        X
                      </button>
                      <img
                        className="w-20 h-20 rounded-full mb-2"
                        src={administrador.foto}
                        alt={`Foto de ${administrador.nombre}`}
                      />
                      <div className="text-lg mb-2 text-center">
                        {administrador.nombre}
                      </div>
                      <div className="text-sm mb-2">{administrador.puesto}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha de los usuarios que postean xdd */}
          <aside className="w-1/2 pr-16 pl-16">
            <div className="bg-white pl-4 pr-4 pt-4 pb-8 rounded">
              <h1 className="text-2xl">Últimos usuarios</h1>
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="src/assets/chica-usuario.png"
                  alt="Foto de último usuario"
                />
                <div className="">
                  <div className="text-sm font-medium mb-2">Nombre Usuario</div>
                  <div className="text-sm text-gray-500">
                    correo@example.com
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
