import React, { useState, useEffect } from "react";
import { clienteAxios } from "../../config/clienteAxios";

export function DataProfile({ following, followers, usuarioPerfil }) {

  const UserProfile = () => {
    const [userImages, setUserImages] = useState([]);
    const [numPublicaciones, setNumPublicaciones] = useState(0);

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
        } catch (error) {
          console.log("Error", error);
        }
      }

      fetchUserImages();
    }, []);

    return (
      <div className="bg-[#F4F4F4] py-2 800:py-7 px-5 1280:px-10 flex flex-col gap-5 rounded-2xl text-[18px]">
        <p>
          <span className="font-bold">{numPublicaciones}</span> publicaciones
        </p>
        <p>
          <span className="font-bold">{followers}</span> seguidores
        </p>
        <p>
          <span className="font-bold">{following}</span> siguiendo
        </p>
      </div>
    );
  };

  return <UserProfile />;
}
