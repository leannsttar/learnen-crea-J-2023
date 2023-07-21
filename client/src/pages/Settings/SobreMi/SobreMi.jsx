import { React, useState} from "react";
import { SobreMiData } from "./SobreMiData";
// import { EditButton } from "./EditButton";
import editProfile from "../../../assets/editProfile.svg";

export function SobreMi() {
  const sobreMiUserData = {
    comoEres: "Reservada, tímida pero muy empática",
    tusMetas: "Vivir en otro pais",
    gustosConversacion: "Los deportes, la comida, los idiomas y los libros",
  };

  let [onEdit, setOnEdit] = useState(false);
  let [notEdit, setNotEdit] = useState(true);

  function yesOnEdit() {
    setOnEdit(true);
    setNotEdit(false)
    // inputRef.current.focus();
  }

  function notOnEdit() {
    setOnEdit(false);
    setNotEdit(true)

  }

  return (
    <>
      {/* <EditButton
          onEdit={onEdit ? true : false}
          setEdit={() => setOnEdit(true)}
          setNotEdit={() => setOnEdit(false)}
          size="w-7"
          fontSize={"text-[25px]"}
        /> */}
      {onEdit ? (
        <div className="flex gap-5 text-[19px]">
          <button onClick={() => notOnEdit()} className="font-bold  ">
            Cancelar
          </button>
          <button className="bg-[#FF8399] rounded-3xl text-white py-1 px-3 ">
            Guardar
          </button>
        </div>
      ) : (
        <button
          onClick={() => yesOnEdit()}
          className="flex gap-3 items-center font-[600] text-[16px]"
        >
          <img src={editProfile} alt="" className="w-7" />
          <div className="text-[25px]">
            <p className="text-[#FF8399]">Editar</p>
          </div>
        </button>
      )}
      <div className="flex flex-col gap-10 mt-10 text-[20px]">
        <SobreMiData
          notEdit={notEdit ? true : false}
          onEdit={onEdit ? true : false}
          label="Describe cómo eres"
          data={sobreMiUserData.comoEres}
        />
        <SobreMiData
          notEdit={notEdit ? true : false}
          onEdit={onEdit ? true : false}
          label="Cuáles son tus metas para aprender idiomas?"
          data={sobreMiUserData.tusMetas}
        />
        <SobreMiData
          notEdit={notEdit ? true : false}
          onEdit={onEdit ? true : false}
          label="De qué te gusta hablar?"
          data={sobreMiUserData.gustosConversacion}
        />
      </div>
    </>
  );
}
