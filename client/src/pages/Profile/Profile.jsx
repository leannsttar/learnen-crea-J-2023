import React, { useEffect, useState } from "react";
import { UpperProfile } from "./UpperProfile";
import { LowerProfile } from "./LowerProfile";
import { clienteAxios } from "../../config/clienteAxios";
import { useParams } from "react-router-dom";

export function Profile() {


  const [usuarioPerfil, setUsuarioPerfil] = useState({});
  const [cargando, setCargando] = useState(true);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingsCount, setfollowingsCount] = useState(0)


  const {id} = useParams();

  useEffect(()=>{
    (async () => { 
      try {
        const {data} = await clienteAxios("/usuarios/"+id)
        setUsuarioPerfil(data);
        setCargando(false)
      } catch (error) {
        console.log(error)
      }

     })()
  },[])

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const response = await clienteAxios.get(`/follow/followers/${usuarioPerfil.id}`, headers());
        setfollowingsCount(response.data.seguidores.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowersCount();
  }, []);

  if(cargando) return <p>Cargando...</p>

  return (
    <div className="font-Poppins">
      <UpperProfile usuarioPerfil={usuarioPerfil} setFollowersCount={setFollowersCount} followersCount={followersCount} followingsCount={followingsCount}/>
      <LowerProfile usuarioPerfil={usuarioPerfil} setfollowingsCount={setfollowingsCount} followersCount={followersCount} followingsCount={followingsCount}/>
    </div>
  );
}
