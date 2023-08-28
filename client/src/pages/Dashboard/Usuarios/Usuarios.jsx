import React, { useState, useEffect } from "react";
import axios from "axios";

export function Usuarios() {
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
    <div className="bg-gray-100">
      <div className=" rounded-lg overflow-hidden h-96 mt-24 mx-20">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="px-4 py-2 border text-center">Usuario</th>
                <th className="px-4 py-2 border text-center">Correo</th>
                <th className="px-4 py-2 border text-center">Genero</th>
                <th className="px-4 py-2 border text-center">Me gusta</th>
                <th className="px-4 py-2 border text-center">Objetivos</th>
                <th className="px-4 py-2 border text-center">Como soy</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td className="px-4 py-2 border-b flex items-center border-l">
                    <img
                      src={`http://localhost:5000${usuario.imagen_perfil}`}
                      alt="User Photo"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {usuario.nombre}
                  </td>
                  <td className="px-4 py-2 border text-center">{usuario.correo}</td>
                  <td className="px-4 py-2 border text-center">{usuario.genero ? "Masculino" : "Femenino"}</td>
                  <td className="px-4 py-2 border text-center">{usuario.me_gusta}</td>
                  <td className="px-4 py-2 border text-center">{usuario.objetivos}</td>
                  <td className="px-4 py-2 border text-center">
                    {usuario.como_soy}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
