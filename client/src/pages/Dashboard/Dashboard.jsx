import React from "react";

export function Dashboard() {

  return (
    <div className="flex h-screen">
      {/* Aside */}
      <aside className="w-1/5 bg-green-500 pl-4 pr-8 mr-4">

        <div className="flex flex-row">
          <img className="w-[90px] h-[90px]" src="/assets/learnen.png" alt="" />
          <img className="m-3 w-[95px] h-[30px]" src="src/assets/learnen-palabra.jpg" alt="" />
        </div>
        <div className="mb-8">
          <button className="w-full py-2 px-4 bg-blue-500 text-white mb-2 rounded">
            General
          </button>
          <button className="w-full py-2 px-4 bg-blue-500 text-white mb-2 rounded">
            Publicaciones
          </button>
          <div className="dropdown mb-2">
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded">
              Opciones
            </button>
            <div className="dropdown-content bg-gray-200 p-2">
              <a href="#">Opción 1</a>
              <a href="#">Opción 2</a>
              <a href="#">Opción 3</a>
              <a href="#">Opción 4</a>
            </div>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-red-500 text-white rounded">
          Cerrar Sesión
        </button>
      </aside>

      {/* Main content */}
      <div className="w-4/5 p-4">
        {/* Navbar */}
        <nav className="flex justify-between mb-4 bg-yellow-500">
          <div className="text-xl font-bold">Hola Rodri</div>
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="url_de_la_imagen_de_perfil.jpg"
              alt="Foto de perfil"
            />
            <div>
              <div className="text-sm font-medium">Nombre Usuario</div>
              <div className="text-xs text-gray-500">Cargo</div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="flex">
          {/* Columna izquierda */}
          <div className="w-1/2 pl-8">

            <div className="bg-yellow-400 flex p-2">
              <div className="flex-1 mb-4 bg-slate-300 m-2 flex items-center p-4 gap-2">
                <img src="src/assets/users-div.png" alt="Ícono" className="w-8 h-8 m-2" />
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-lg mb-0">Usuarios</h1>
                  <h1 className="text-base font-bold mb-0">100</h1>
                </div>
              </div>
              <div className="flex-1 mb-4 bg-slate-300 m-2 flex items-center p-4 gap-2">
                <img src="src/assets/file-div.png" alt="Ícono" className="w-8 h-8 m-2" />
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-lg mb-0">Publicaciones</h1>
                  <h1 className="text-base font-bold mb-0">678</h1>
                </div>
              </div>
            </div>
            <div className="bg-yellow-400 flex">
              <div className="flex-1 mb-4 bg-slate-300 m-2 flex items-center p-4 gap-2">
                <img src="src/assets/reports-div.png" alt="Ícono" className="w-8 h-8 m-2" />
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-lg mb-0">Reportes</h1>
                  <h1 className="text-base font-bold mb-0">45</h1>
                </div>
              </div>
              <div className="flex-1 mb-4 bg-slate-300 m-2 flex items-center p-4 gap-2">
                <img src="src/assets/articles-div.png" alt="Ícono" className="w-8 h-8 m-2" />
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-lg mb-0">Artículos</h1>
                  <h1 className="text-base font-bold mb-0">345</h1>
                </div>
              </div>
            </div>



            <div className="mt-16">
              <div>
                <div className="text-xl font-bold mb-2">Administradores</div>
                <div className="relative p-4 rounded bg-pink-300 flex flex-col items-center w-52 gap-2">
                  <button className="absolute top-0 right-0 text-gray rounded-full p-2">
                    X
                  </button>
                  <img
                    className="w-16 h-16 rounded-full mb-2"
                    src="url_de_la_imagen_admin.jpg"
                    alt="Foto de administrador"
                  />
                  <div className="text-base mb-2 text-center">Rodrigo <br /> Pineda</div>
                  <div className="text-sm mb-2">Diseñador</div>
                </div>
              </div>
            </div>


          </div>

          {/* Columna derecha */}
          <aside className="w-1/2 pr-16 pl-16">

            <div className="mb-4 bg-red-500 pl-4 pr-4 pt-2 pb-4 rounded">
              <h1 className="text-2xl">Últimos usuarios</h1>
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="url_de_la_imagen_usuario.jpg"
                  alt="Foto de último usuario"
                />
                <div className="">
                  <div className="text-sm font-medium mb-2">Nombre Usuario</div>
                  <div className="text-sm text-gray-500">correo@example.com</div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
