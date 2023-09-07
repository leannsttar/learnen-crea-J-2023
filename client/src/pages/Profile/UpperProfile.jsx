import React, { useEffect, useState } from "react";
import axios from "axios";
import { clienteAxios } from "../../config/clienteAxios";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { ButtonHeader } from "../../components/Header/ButtonHeader";
import { useSession } from "../../components/Header/useSession";
import { useNavigate } from "react-router-dom";
import { headers } from '../../helpers/headers'

export function UpperProfile({ alreadyFollow, usuarioPerfil, followersCount, setFollowersCount }) {
  const [userImage, setUserImage] = useState("");

  const { logout, usuario } = useSession(); //datos del usuario funcion para el login y funcion para cerrar sesion
  const [following, setFollowing] = useState(alreadyFollow);

  //el del seguir xd
  const handleFollowClick = async () => {
    try {
      if (following) {
        await clienteAxios.get(`/follow/unfollow/${usuarioPerfil.id}`, headers());
        // setFollowersCount(followersCount - 1);
      } else {
        await clienteAxios.get(`/follow/follow/${usuarioPerfil.id}`, headers());
        // setFollowersCount(followersCount + 1);
      }
      setFollowing(!following);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const response = await clienteAxios.get(`/follow/followers/${usuarioPerfil.id}`, headers());
        setFollowersCount(response.data.seguidos.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowersCount();
  }, [following]);

  return (
    <>
      <div className="w-full h-[200px] 800:h-[350px] bg-bgProfile bg-cover"></div>
      <Element className="w-full flex justify-center items-center">
        <Fade bottom delay={500}>
          <div className="flex flex-col items-center 800:flex-row 800:gap-8 mb-4 800:mb-10 1280:w-[80%] w-[95%] ">
            <div className="800:w-[17rem]">
              <img
                src={`http://localhost:5000${usuarioPerfil.imagen_perfil}`}
                alt=""
                className="rounded-full w-full h-full lgv:w-48 translate-y-[-80px] 800:translate-y-[-60px] object-cover"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                }}
              />
            </div>
            <div className="flex gap-[30px] 800:gap-0 items-center 800:mt-10 800:w-full justify-between flex-col 800:flex-row translate-y-[-50px] 800:translate-y-[-40px]">
              <p className="text-[40px] leading-none text-center 800:w-min 880:w-auto" translate="no">
                {usuarioPerfil.nombre} {usuarioPerfil.apellido}
              </p>
              <div className="flex gap-7">
                {usuario.id != usuarioPerfil.id ? (
                  <>
                    <div onClick={handleFollowClick}>
                      <ButtonHeader
                        className={`flex gap-3 px-5 py-2.5 shadow-square border ${following
                            ? "bg-[#FFD0D0] hover:bg-[#FFE9E9]"
                            : "bg-[#FFE9E9] hover:bg-[#FFD0D0]"
                          } hover:transition-bg ease-in duration-200 flex-row-reverse`}
                        text={following ? "Siguiendo" : "Seguir"}
                      />
                    </div>
                    <ButtonHeader
                      to={"/chat/" + usuarioPerfil.id}
                      className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#FFEC45] hover:transition-bg ease-in duration-200 flex-row-reverse"
                      imgClassName="hidden"
                      text="Mensaje"
                    />
                  </>
                ) : (
                  <button
                    className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-red-400 hover:transition-bg ease-in duration-200 flex-row-reverse"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Element>
    </>
  );
}
