import { LanguagesCommunityCard } from "./LanguagesCommunityCard";

import FemalePhoto from "../../assets/FemaleCommunity.png";
import GreenCircle from "../../assets/greencircle.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoundedFlag } from "../../components/RoundedFlag";

const german = germanFlag;
const greek = greekFlag;
const french = frenchFlag;

const person1LanguagesKnown = [german, greek];
const person1LanguagesLearning = [french];

export function CommunityCard() {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:5000/usuarios", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
    <div className="flex flex-wrap gap-8 w-full justify-start items-center 800:flex-row flex-col">
      {usuarios.map((usuario) => (
        <Link
          to={"/profile/" + usuario.id}
          key={usuario.id}
          className="flex gap-x-6 bg-[#F7F2EF] p-4 rounded-xl hover:scale-[101%] hover:transition-scale ease-in duration-150 cursor-pointer h-full w-full 800:w-[45%] 1280:w-[30%] 400:flex-row flex-col gap-y-5 400:gap-y-0"
        >
          <div className="w-full 400:w-[30%] flex items-center justify-center">
            <img
              src={`http://localhost:5000${usuario.imagen_perfil}`}
              alt=""
              className="object-cover w-[70%] h-[70%] 400:w-full 400:h-auto"
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
            />
          </div>
          <div className="justify-between flex flex-col gap-y-4 w-full 500:w-[70%] 400:w-[55%]">
            <div>
              <div className="flex gap-x-3 items-center">
                <p className="font-bold text-xl">
                  {usuario.nombre} {usuario.apellido}
                </p>
              </div>
              <p className="text-sm font-normal line-clamp-2 1370:h-auto h-[40px]">
                {usuario.como_soy}
              </p>
            </div>
            <div className="flex gap-x-6 450:flex-row flex-col">
              <div className="flex items-center gap-2">
                <p className="font-[700] text-[10px] 1080:text-[13px]">HABLA</p>
                <div>
                  <img  src={`http://localhost:5000${usuario.idioma_materno.imagen_bandera}`} alt="" className="h-6 w-6 rounded-full object-fill" />
                </div>
              </div>
             
              <LanguagesCommunityCard
                languages={usuario.idiomas_aprendiendo}
                status="APRENDE"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
