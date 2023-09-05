import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSession } from '../../components/Header/useSession';
export const Navbar = ({ userName, userRole }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const { logout, usuario } = useSession(); 

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  }

    return (
      <nav className="flex-col items-start gap-4 flex md:flex-row md:justify-between bg-white p-6">
        <div>
        <div className="text-xl font-bold" translate="no">{userName}</div>
        <div className="text-sm">¡Veamos que hay de nuevo hoy!</div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src='/src/assets/administrador.png'
            alt="Foto de perfil"
          />
          <div>
            <div className="text-sm font-medium" translate="no">{userName}</div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
        </div>

    
        <div className='md:hidden block'>
          <div className="flex flex-col gap-8">
            <button className="w-full rounded flex items-center">
              <img
                className="w-6 h-6 mr-2 invert"
                src="/src/assets/House.png"
                alt="Ícono General"
              />
              <Link to={"/dashboard"}>
                <div className="pl-2">General</div>
              </Link>
            </button>

            <button className="w-full rounded flex items-center">
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
                className="w-full rounded flex items-center"
                onClick={handleDropdownToggle}
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="/src/assets/Users.png"
                  alt="Ícono Opciones"
                />
                <div className="pl-2">Usuarios</div>
                <img
                  className={`w-6 h-6 ml-2 ${
                    isDropdownVisible ? "rotate-180" : ""
                  }`}
                  src="/src/assets/arrow.png"
                  alt="Flecha"
                />
              </button>
              <div
                id="dropdown-content"
                className={`dropdown-content p-2 flex flex-col  right-0 top-full mt-2 ${
                  isDropdownVisible ? "" : "hidden"
                }`}
              >
                <Link to={"/dashboard/users"}>
                  <div className="font-bold text-sm text-left pb-2 pl-12">
                    Cliente
                  </div>
                </Link>
                {/* <Link to={"/dashboard/administradores"}>
                <div className="font-bold text-sm text-left pb-2 pl-12">
                  Administradores
                </div>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <button className="w-full rounded flex items-center ">
            <img
              className="w-6 h-6 mr-2"
              src="/src/assets/reports-icon.png"
              alt="Ícono General"
            />
            <Link to={"/dashboard/reportes"}>
              <div className="pl-2">Reportes</div>
            </Link>
          </button>
        </div>
        <div className="md:hidden block">
          <Link
            to="/"
            className="focus:outline-none "
          >
            <button
              className="w-full  rounded flex items-center"
              onClick={logout}
            >
              <img
                className="w-6 h-6 mr-2"
                src="/src/assets/SignOut.png"
                alt="Ícono Cerrar Sesión"
              />
              <div>Cerrar sesión</div>
            </button>{" "}
          </Link>
        </div>
      </nav>
    );
  };