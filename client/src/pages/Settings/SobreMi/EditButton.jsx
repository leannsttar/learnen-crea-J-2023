import React from "react";
import editProfile from "../../../assets/editProfile.svg";
import { SobreMiData } from "./SobreMiData";

export function EditButton({ size, fontSize, setEdit, setNotEdit, onEdit }) {
  return (
    <>
      {onEdit ? (
        <div className="flex gap-5 text-[19px]">
          <button onClick={setNotEdit} className="font-bold  ">
            Cancelar
          </button>
          <button className="bg-[#FF8399] rounded-3xl text-white py-1 px-3 ">
            Guardar
          </button>
        </div>
      ) : (
        <button
          onClick={setEdit}
          className="flex gap-3 items-center font-[600] text-[16px]"
        >
          <img src={editProfile} alt="" className={size} />
          <div className={fontSize}>
            <p className="text-[#FF8399]">Editar</p>
          </div>
        </button>
      )}
    </>
  );
}
