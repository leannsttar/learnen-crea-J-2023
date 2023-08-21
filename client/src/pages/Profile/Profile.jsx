import React, { useEffect, useState } from "react";
import { UpperProfile } from "./UpperProfile";
import { LowerProfile } from "./LowerProfile";
import { clienteAxios } from "../../config/clienteAxios";
import { useParams } from "react-router-dom";

export function Profile() {


  const [usuarioPerfil, setUsuarioPerfil] = useState({});
  const [cargando, setCargando] = useState(true);

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

  if(cargando) return <p>Cargando...</p>


  return (
    <div className="font-Poppins">
      <UpperProfile usuarioPerfil={usuarioPerfil} />
      <LowerProfile usuarioPerfil={usuarioPerfil} />
    </div>
  );
}
