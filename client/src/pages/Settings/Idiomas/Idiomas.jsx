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

  const [lenguajes, setLenguajes] = useState('aña')

  const obtenerLenguajes = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/dashboard/lenguajes"
      );
      console.log('jflaksdjfsafjsal')
      console.log(data);
      setLenguajes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerLenguajes();
  }, []);

  console.log(lenguajes)

  return (
    <div className="flex flex-col gap-12">
      <DiffLanguages
        label="Soy nativo en"
        languages={usuario.idioma_materno}
        allUserLanguages={userLanguages}
        native
        allLanguages={allLanguages}
      />
      {usuario.idiomas_fluidos && (
        <DiffLanguages
          label="También hablo"
          languages={usuario.idiomas_fluidos}
          allUserLanguages={userLanguages}
          fluent
          allLanguages={allLanguages}
        />
      )}

      <DiffLanguages
        label="Estoy aprendiendo"
        languages={usuario.idiomas_aprendiendo}
        allUserLanguages={userLanguages}
        learning
        allLanguages={allLanguages}
      />
    </div>
  );
}
