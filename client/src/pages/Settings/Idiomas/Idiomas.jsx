import React, { useState, useEffect } from "react";
import { DiffLanguages } from "./DiffLanguages";
import { flags } from "../../../data/languages";
import { allLanguages } from "../../../data/languages";
import { useSession } from "../../../components/Header/useSession";
import axios from 'axios'

const userLanguages = {
  motherLanguages: [["Alemán", flags.Aleman]],
  fluentLanguages: [["Portugués", flags.Portugues]],
  learningLanguages: [
    ["Griego", flags.Griego],
    ["Francés", flags.Frances],
  ],
};

export function Idiomas() {
  const { usuario } = useSession();

  const [lenguajes, setLenguajes] = useState([])

  const obtenerLenguajes = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/dashboard/lenguajes"
      );
      setLenguajes(data.map(idioma => [idioma.idioma, idioma.imagen_bandera]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerLenguajes();
  }, []);



  return (
    <div className="flex flex-col gap-12">
      <DiffLanguages
        label="Soy nativo en"
        languages={usuario.idioma_materno}
        allUserLanguages={{
          motherLanguages: [usuario.idioma_materno.idioma, usuario.idioma_materno.imagen_bandera],
          fluentLanguages: usuario.idiomas_fluidos ? usuario.idiomas_fluidos.map(idioma => [idioma.idioma, idioma.imagen_bandera]) : [],
          learningLanguages: usuario.idiomas_aprendiendo.map(idioma => [idioma.idioma, idioma.imagen_bandera])
        }}
        native
        allLanguages={lenguajes}
      />
      
        <DiffLanguages
          label="También hablo"
          languages={usuario.idiomas_fluidos ? usuario.idiomas_fluidos : []}
          allUserLanguages={{
            motherLanguages: [usuario.idioma_materno.idioma, usuario.idioma_materno.imagen_bandera],
            
            fluentLanguages: usuario.idiomas_fluidos ? usuario.idiomas_fluidos.map(idioma => [idioma.idioma, idioma.imagen_bandera]) : [],
            learningLanguages: usuario.idiomas_aprendiendo.map(idioma => [idioma.idioma, idioma.imagen_bandera])
          }}
          fluent
          allLanguages={lenguajes}
        />
     

      <DiffLanguages
        label="Estoy aprendiendo"
        languages={usuario.idiomas_aprendiendo}
        allUserLanguages={{
          motherLanguages: [usuario.idioma_materno.idioma, usuario.idioma_materno.imagen_bandera],
          fluentLanguages: usuario.idiomas_fluidos ? usuario.idiomas_fluidos.map(idioma => [idioma.idioma, idioma.imagen_bandera]) : [],
          learningLanguages: usuario.idiomas_aprendiendo.map(idioma => [idioma.idioma, idioma.imagen_bandera])
        }}
        learning
        allLanguages={lenguajes}
      />
    </div>
  );
}
