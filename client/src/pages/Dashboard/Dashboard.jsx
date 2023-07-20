import React from "react";

export function Dashboard () {
  return (
    <div className="flex h-screen">
      {/* Aside */}
      <aside className="w-1/5 bg-green-500 p-4">
        
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
            <div className="dropdown-content bg-black p-2">
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
          <div className="flex items-center">
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
          <div className="w-1/2 p-4">
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Usuarios</h1>
              <h1 className="text-2xl">100</h1>
            </div>
            <div>
              <div className="text-xl font-bold mb-2">Administradores</div>
              <div className="p-4 bg-white rounded">
                <img
                  className="w-16 h-16 rounded-full mb-2"
                  src="url_de_la_imagen_admin.jpg"
                  alt="Foto de administrador"
                />
                <div className="text-xl mb-2">Nombre Admin</div>
                <button className="bg-red-500 text-white rounded p-1">
                  X
                </button>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <aside className="w-1/2 p-4">
            <div className="mb-4">
              <div className="text-xl font-bold mb-2 bg-red-500">Last Users
              <img
                className="w-12 h-12 rounded-full mb-2"
                src="url_de_la_imagen_usuario.jpg"
                alt="Foto de último usuario"
              />
              <div className="text-lg font-medium mb-2">Nombre Usuario</div>
              <div className="text-sm text-gray-500">correo@example.com</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
