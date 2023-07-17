import { React, useState, useRef, useEffect } from "react";
import { SobreMiData } from "./SobreMiData";
import { EditButton } from "./EditButton";

export function SobreMi() {
  const sobreMiUserData = {
    comoEres: "Reservada, tímida pero muy empática",
    tusMetas: "Vivir en otro pais",
    gustosConversacion: "Los deportes, la comida, los idiomas y los libros",
  };

  let [onEdit, setOnEdit] = useState(false);

  function yesOnEdit() {
    setOnEdit(true);
    // inputRef.current.focus();
  }

  function notOnEdit() {
    setOnEdit(false);
  }

  return (
    <>
        <EditButton
          onEdit={onEdit ? true : false}
          setEdit={() => setOnEdit(true)}
          setNotEdit={() => setOnEdit(false)}
          size="w-7"
          fontSize={"text-[25px]"}
        />
      <div className="flex flex-col gap-10 mt-10 text-[20px]">
        <SobreMiData
        
          onEdit={onEdit ? true : false}
          label="Describe cómo eres"
          data={sobreMiUserData.comoEres}
        />
        <SobreMiData
          onEdit={onEdit ? true : false}
          label="Cuáles son tus metas para aprender idiomas?"
          data={sobreMiUserData.tusMetas}
        />
        <SobreMiData
          onEdit={onEdit ? true : false}
          label="De qué te gusta hablar?"
          data={sobreMiUserData.gustosConversacion}
        />
      </div>
    </>
  );
}
