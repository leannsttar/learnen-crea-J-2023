import { LanguagesCommunityCard } from "./LanguagesCommunityCard";

import FemalePhoto from "../../assets/FemaleCommunity.png";
import GreenCircle from "../../assets/greencircle.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";
import { useSession } from "../../components/Header/useSession";

const german = germanFlag;
const greek = greekFlag;
const french = frenchFlag;

const person1LanguagesKnown = [german, greek];
const person1LanguagesLearning = [french];

export function CommunityCard() {
  const { usuario } = useSession();
  return (
    <>
      <div className="flex gap-x-5 bg-[#F7F2EF] p-4 rounded-xl hover:scale-[101%] hover:transition-scale ease-in duration-150 cursor-pointer">
        <div>
          <img
            src={`http://localhost:5000${usuario.imagen_perfil}`}
            alt=""
            className="object-cover w-32"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          />
        </div>
        <div className="justify-between flex flex-col gap-y-2">
          <div>
            <div className="flex gap-x-3 items-center">
              <p className="font-bold text-xl">{usuario.nombre} {usuario.apellido}</p>
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
    </>
  );
}
