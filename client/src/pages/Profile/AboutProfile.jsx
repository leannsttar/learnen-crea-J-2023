import React from "react";

export function AboutProfile({meGusta, Objetivos, ComoSoy, name}) {
  return (
    <div className="bg-[#F4F4F4] py-7 px-10 flex flex-col gap-2 rounded-2xl text-[16px]">
      <div className="flex justify-center">
        <p className="font-semibold text-[23px]">About {name}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div>
            <p className="font-[700]">Me gusta:</p>
            <p>{meGusta}</p>
        </div>
        <div>
            <p className="font-[700]">Mis objetivos para aprender idiomas:</p>
            <p>{Objetivos}</p>
        </div>
        <div>
            <p className="font-[700]">Cómo soy:</p>
            <p>{ComoSoy}</p>
        </div>
      </div>
    </div>
  );
}
