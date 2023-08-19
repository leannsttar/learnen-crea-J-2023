import React, { useEffect, useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { ButtonHeader } from "../../components/Header/ButtonHeader";
import { useSession } from "../../components/Header/useSession";

export function UpperProfile({ firstName, lastName, userId }) {
  const [userImage, setUserImage] = useState("");

  const { logout, usuario } = useSession(); //datos del usuario funcion para el login y funcion para cerrar sesion
  console.log(usuario);

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/images/profile/${userId}`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob = new Blob([data], { type: "image/jpeg/jpg/svg" });
        const imageUrl = URL.createObjectURL(blob);
        setUserImage(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserImage();
  }, [userId]);

  return (
    <>
      <div className="w-full h-[200px] 800:h-[350px] bg-bgProfile bg-cover"></div>
      <Element className="w-full flex justify-center items-center">
        <Fade bottom delay={500}>
          <div className="flex flex-col items-center 800:flex-row 800:gap-8 mb-4 800:mb-10 1280:w-[80%] w-[95%] ">
            <div className="800:w-[17rem]">
              <img
                src={`http://localhost:5000${usuario.imagen_perfil}`}
                alt=""
                className="rounded-full w-full h-full translate-y-[-80px] 800:translate-y-[-60px] object-cover"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                }}
              />
            </div>
            <div className="flex gap-[30px] 800:gap-0 items-center 800:mt-10 800:w-full justify-between flex-col 800:flex-row translate-y-[-50px] 800:translate-y-[-40px]">
              <p className="text-[40px] leading-none text-center 800:w-min 880:w-auto">
                {usuario.nombre} {usuario.apellido}
              </p>
              <div className="flex gap-7">
                <ButtonHeader
                  className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#FFE9E9] hover:bg-[#FFD0D0] hover:transition-bg ease-in duration-200 flex-row-reverse"
                  text="Follow"
                />
                <ButtonHeader
                  className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#FFEC45] hover:transition-bg ease-in duration-200 flex-row-reverse"
                  imgClassName="hidden"
                  text="Message"
                />
                <button
                  className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-red-400 hover:transition-bg ease-in duration-200 flex-row-reverse"
                  onClick={logout}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Element>
    </>
  );
}
