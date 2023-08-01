import React from "react";
import { Link } from "react-router-dom";

export const AsideMenu = ({ onLogout }) => {
  return (
    <aside className="pl-6 pr-8 mr-4 flex flex-col justify-between h-screen">
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

      {/*hover:bg-pink-300 hover:rounded-lg hover:border-4 hover:border-pink-300 */}
        <div className="mb-8 p-8">
          <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
            <img
              className="w-6 h-6 mr-2 invert"
              src="/src/assets/House.png"
              alt="Ícono General"
            />
            <Link to={"/dashboard"}>
              <div className="pl-2">General</div>
            </Link>
          </button>

          <button className="w-full py-2 px-4 mb-2 rounded flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src="/src/assets/ChartPieSlice.png"
              alt="Ícono Publicaciones"
            />
            <Link to={"/dashboard/lenguajes"}>
              <div className="pl-2">Lenguajes</div>
            </Link>
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
              {/* <a href="#" className="font-bold text-sm text-left pb-2 pl-12">
                Estadísticas
              </a> */}
              <Link to={"/dashboard/users"}>
                <div className="font-bold text-sm text-left pb-2 pl-12">
                  Cliente
                </div>
              </Link>
              <Link to={"/dashboard/administradores"}>
                <div className="font-bold text-sm text-left pb-2 pl-12">
                  Administradores
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-8 pb-12">
        <button className="w-full py-2 px-4 mb-2 rounded flex items-center ">
          <img
            className="w-6 h-6 mr-2"
            src="/src/assets/reports-icon.png"
            alt="Ícono General"
          />
          <Link to={"dashboard/reportes"}>
            <div className="pl-2">Reportes</div>
          </Link>
        </button>
      </div>
      <div className="pl-8">
        <button
          className="w-full py-2 px-4 rounded flex items-center mb-8 pr-6"
          onClick={onLogout}
        >
          <img
            className="w-6 h-6 mr-2"
            src="/src/assets/SignOut.png"
            alt="Ícono Cerrar Sesión"
          />
          <div>Cerrar sesión</div>
        </button>
      </div>
    </aside>
  );
};
