import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { DataProfile } from "./DataProfile";
import { LanguagesProfile } from "./LanguagesProfile";
import { AboutProfile } from "./AboutProfile";
import { flags } from "../../data/languages";
import { useSession } from "../../components/Header/useSession";
import { clienteAxios } from "../../config/clienteAxios";

export function LowerProfile({
  usuarioPerfil,
  setFollowersCount,
  followersCount,
  followingsCount,
}) {
  const [userImages, setUserImages] = useState([]);
  const [numPublicaciones, setNumPublicaciones] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true); 
  const [errorImages, setErrorImages] = useState(null); 

  useEffect(() => {
    async function fetchUserImages() {
      try {
        const response = await clienteAxios.get(`/user/images/${usuarioPerfil.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setUserImages(response.data.images);
        setNumPublicaciones(response.data.numPublicaciones);
        setLoadingImages(false); 
      } catch (error) {
        console.log("Error", error);
        setErrorImages(error.message);
        setLoadingImages(false); 
      }
    }

    fetchUserImages();
  }, [usuarioPerfil]);

  const userLanguages = {
    motherLanguages: ["Alemán", flags.Aleman],
    fluentLanguages: [["Francés", flags.Frances]],
    learningLanguages: [
      ["Griego", flags.Griego],
      ["Francés", flags.Frances],
    ],
  };

  return (
    <Element className=" flex justify-center mx-auto">
      <Fade bottom delay={300}>
        <div className=" mb-20 flex flex-col 800:flex-row-reverse gap-8 800:gap-4 1280:gap-20 1280:w-[80%] w-[95%]">
          <div className="800:w-[25%] 800:h-full flex flex-col w-full gap-5">
            <DataProfile
              posts={numPublicaciones} 
              followers={followersCount}
              following={followingsCount}
              usuarioPerfil={usuarioPerfil}
            />

            {/* {Acá solo mando la info de userLanguages} */}
            <LanguagesProfile
              motherLanguages={userLanguages.motherLanguages}
              fluentLanguages={userLanguages.fluentLanguages}
              learningLanguages={userLanguages.learningLanguages}
            />

            <AboutProfile usuarioPerfil={usuarioPerfil} />
          </div>
          <div className="grid grid-cols-3 auto-rows-min gap-1 relative w-full 800:w-[75%] h-auto">
            {loadingImages ? (
              <p>Cargando imágenes...</p>
            ) : errorImages ? (
              <p>Error al cargar imágenes: {errorImages}</p>
            ) : (
              userImages.map((imgSrc, index) => (
                <Fade bottom key={index} delay={index * 300}>
                  <img
                    src={`http://localhost:5000/imagenes/processed-${imgSrc}`}
                    className=""
                  />
                </Fade>
              ))
            )}
          </div>
        </div>
      </Fade>
    </Element>
  );
}
