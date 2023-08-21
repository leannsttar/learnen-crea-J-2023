import React, { useEffect, useState } from "react";
import axios from "axios";
import { LanguagesCommunityCard } from "./LanguagesCommunityCard";

import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";
import { Link } from "react-router-dom";

const german = germanFlag;
const greek = greekFlag;
const french = frenchFlag;

const person1LanguagesKnown = [german, greek];
const person1LanguagesLearning = [french];

export function CommunityCard({ searchText }) {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:5000/usuarios",{
        headers: {
          Authorization: "Bearer "+localStorage.getItem("token")
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

  const filteredUsuarios = usuarios.filter((usuario) =>
    `${usuario.nombre} ${usuario.apellido}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <>
      {usuarios.map((usuario) => (
        <div className="mb-6">
          <div
          key={usuario.id}
          className="flex gap-x-6 bg-[#F7F2EF] p-4 rounded-xl hover:scale-[101%] hover:transition-scale ease-in duration-150 cursor-pointer"
        >
          <div>
            <img
              src={`http://localhost:5000${usuario.imagen_perfil}`}
              alt=""
              className="object-cover w-[8rem] h-[8rem]"
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
            />
          </div>
          <div className="justify-between flex flex-col gap-y-4">
            <div>
              <div className="flex gap-x-3 items-center">
                <p className="font-bold text-xl">
                  {usuario.nombre} {usuario.apellido}
                </p>
              </div>
              <p className="text-md font-normal line-clamp-2">
                {usuario.me_gusta}
              </p>
            </div>
            <div className="flex gap-x-6">
              <LanguagesCommunityCard
                languages={person1LanguagesKnown}
                status="HABLA"
              />
              <LanguagesCommunityCard
                languages={person1LanguagesLearning}
                status="APRENDE"
              />
            </div>
          </div>
        </div>
        </div>
      ))}
    </>
  );
}
