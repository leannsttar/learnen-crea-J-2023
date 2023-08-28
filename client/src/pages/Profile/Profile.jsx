import React, { useEffect, useState } from "react";
import { UpperProfile } from "./UpperProfile";
import { LowerProfile } from "./LowerProfile";
import { clienteAxios } from "../../config/clienteAxios";
import { useParams } from "react-router-dom";
import { headers } from "../../helpers/headers";
import { useSession } from "../../components/Header/useSession";

export function Profile() {


  const [usuarioPerfil, setUsuarioPerfil] = useState({});

  console.log(usuarioPerfil)

  const [cargando, setCargando] = useState(true);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingsCount, setfollowingsCount] = useState(0)
  const [alreadyFollow, setAlreadyFollow] = useState(0)

  const { usuario } = useSession()


  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await clienteAxios("/usuarios/" + id)
        const response = await clienteAxios.get(`/follow/followers/${data.id}`, headers());

        const { seguidores } = response.data
        const { seguidos } = response.data

        setfollowingsCount(seguidores.length);
        setFollowersCount(seguidos.length);

        setUsuarioPerfil(data);


        const isAlreadyFolliwngThisAccount = seguidos.some((element) => {
          return element.id_user_sigue_a == usuario.id
        })

        setAlreadyFollow(isAlreadyFolliwngThisAccount)

        setCargando(false)
      } catch (error) {
        console.log(error)
      }

    })()
  }, [id])
  

  if (cargando) return <p>Cargando...</p>

  return (
    <div className="font-Poppins">
      <UpperProfile alreadyFollow={alreadyFollow} usuarioPerfil={usuarioPerfil} setFollowersCount={setFollowersCount} followersCount={followersCount} followingsCount={followingsCount} />
      <LowerProfile usuarioPerfil={usuarioPerfil} setfollowingsCount={setfollowingsCount} followersCount={followersCount} followingsCount={followingsCount} />
    </div>
  );
}
