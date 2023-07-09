import React from "react";

export function LanguagesProfile(props) {
  return (
    <div className="bg-[#F4F4F4] py-7 px-10 flex flex-col gap-5 rounded-2xl text-[16px]">
      <div className="flex justify-center">
        <p className="font-semibold text-[23px]">Languages</p>
      </div>

      <div className="flex flex-col gap-9">
        <div className="space-y-2">
          <p className="tracking-widest">LENGUA MATERNA</p>
          <div className="flex items-center gap-2">
            {/* Acá pues mm, traigo las props, que cada prop es un array, [0] es el nombre del idioma y [1] es la bandera */}
            <img src={props.motherLanguages[1]} alt="" className="w-[35px]" />
            <p>{props.motherLanguages[0]}</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="tracking-widest">TAMBIÉN HABLA:</p>
          {/* Acá lo mismo solo que con un map por si habla mas de un idioma fluidamente. */}
          {props.fluentLanguages.map((language, index) => (
            <div className="flex items-center gap-2">
              {/* language[1] es la imagen, language[0] es el nombre del idioma */}
              <img src={language[1]} alt="" className="w-[35px]"/>
              <p key={index}>{language[0]}</p>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <p className="tracking-widest">ESTÁ APRENDIENDO:</p>
          {/* Acá lo mismo que anteriormente */}
          {props.learningLanguages.map((language, index) => (
            <div className="flex items-center gap-2">
              <img src={language[1]} alt="" className="w-[35px]"/>
              <p key={index}>{language[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
