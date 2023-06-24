import { LanguagesCommunityCard } from "./LanguagesCommunityCard";

import FemalePhoto from "../../assets/FemaleCommunity.png";
import GreenCircle from "../../assets/greencircle.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";

const german = germanFlag;
const greek = greekFlag;
const french = frenchFlag;

const person1LanguagesKnown = [german, greek];
const person1LanguagesLearning = [french];

export function CommunityCard() {
  return (
    <>
      <div className="flex gap-x-5 bg-[#F7F2EF] p-4 rounded-xl hover:scale-[101%] hover:transition-scale ease-in duration-150 cursor-pointer">
        <div>
          <img src={FemalePhoto} alt="" className="" />
        </div>
        <div className="justify-between flex flex-col gap-y-2">
          <div>
            <div className="flex gap-x-3 items-center">
              <img src={GreenCircle} />
              <p className="font-bold text-xl">Adri</p>
            </div>
            <p className="text-md font-normal line-clamp-2">
              I wanna learn a new language by the end of the year. Who can help
              me?
            </p>
          </div>
          <div className="flex gap-x-6">
            <LanguagesCommunityCard languages={person1LanguagesKnown} />
            <LanguagesCommunityCard languages={person1LanguagesLearning} />
          </div>
        </div>
      </div>
    </>
  );
}
