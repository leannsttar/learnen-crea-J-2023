import React from "react";
import FemalePhoto from "../../assets/FemaleCommunity.png";
import GreenCircle from "../../assets/greencircle.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";

export function AppTitle({ title, className }) {
  return <h1 className={className}>{title}</h1>;
}

function SearchBar() {
  return (
    <>
      <div className="w-full 450:w-96">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#F5F5F5] overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#F5F5F5]"
            type="text"
            id="search"
            placeholder="Encuentra personas o temas.."
          />
        </div>
      </div>
    </>
  );
}

export function RoundedFlag(props) {
  return <img src={props.country} alt="" className={props.className} />;
}



export function LanguagesCommunityCard( {languages} ) {
  return (
    <div className="flex items-center gap-2">
      <p className="font-[700] text-[13px]">HABLA</p>
      <div className="flex">
        {languages.map((language, index) => (
          <RoundedFlag key={index} country={language} className="w-6 h-6" />
        ))}
        
        {/* <RoundedFlag country={greekFlag} className="w-6 h-6" /> */}
      </div>
    </div>
  );
}

const german = germanFlag;
const greek = greekFlag;
const french = frenchFlag;

const person1LanguagesKnown = [german, greek]
const person1LanguagesLearning = [french]

export function CommunityCard() {

  return (
    <>
      <div className="flex gap-x-5 bg-[#F7F2EF] p-4 rounded-xl">
        <div>
          <img src={FemalePhoto} alt="" className="" />
        </div>
        <div className="justify-between flex flex-col">
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
            <LanguagesCommunityCard languages={person1LanguagesKnown}/>
            <LanguagesCommunityCard languages={person1LanguagesLearning} />
            {/* <div className="flex items-center gap-2">
              <p className="font-[700] text-[13px]">HABLA</p>
              <div className="flex">
                <RoundedFlag country={germanFlag} className="w-6 h-6" />
                <RoundedFlag country={greekFlag} className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-[700] text-[13px]">APRENDE</p>
              <RoundedFlag country={frenchFlag} className="w-6 h-6" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export function Community() {
  return (
    <>
      <div className="">
        <div className="pt-[40px] 1800:px-[80px] px-[20px] 1080:w-full ">
          <div className="800:flex 800:justify-between 800:items-center 800:mb-[70px] mb-[30px] space-y-6">
            <AppTitle
              title="Comunidad"
              className="text-[2.4rem] text-[#FF8399] font-bold"
            />
            <SearchBar />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 800:grid-cols-2 1280:grid-cols-3 1920:grid-cols-4 gap-4 justify-center">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </>
  );
}
