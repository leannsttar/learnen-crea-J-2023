import React from "react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSession } from "../../components/Header/useSession";

export function AboutProfile({ usuarioPerfil }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="bg-[#F4F4F4] py-2 800:py-7 px-5 1280:px-10 flex flex-col gap-2 rounded-2xl text-[16px]">
      {isSmallScreen ? (
        <Accordion open={open === 0}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="flex justify-center">
              <p className="font-semibold text-[23px]">About {usuarioPerfil.nombre}</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-[700]">Me gusta:</p>
                <p>{usuarioPerfil.me_gusta}</p>
              </div>
              <div>
                <p className="font-[700]">
                  Mis objetivos para aprender idiomas:
                </p>
                <p>{usuarioPerfil.objetivos}</p>
              </div>
              <div>
                <p className="font-[700]">Cómo soy:</p>
                <p>{usuarioPerfil.como_soy}</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      ) : (
        <>
          <div className="flex justify-center">
            <p className="font-semibold text-[23px]">Sobre {usuarioPerfil.nombre}</p>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="font-[700]">Me gusta:</p>
              <p>{usuarioPerfil.me_gusta}</p>
            </div>
            <div>
              <p className="font-[700]">Mis objetivos para aprender idiomas:</p>
              <p>{usuarioPerfil.objetivos}</p>
            </div>
            <div>
              <p className="font-[700]">Cómo soy:</p>
              <p>{usuarioPerfil.como_soy}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
