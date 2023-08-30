import React from "react";
import editProfile from "../../../assets/editProfile.svg";


export function EditButtonLanguages({ size, fontSize, onClick, text }) {
  return (
    <>
        <button
          onClick={onClick}
          className="flex gap-3 items-center font-[600] text-[16px]"
        >
          <img src={editProfile} alt="" className={size} />
          <div className={fontSize}>
            {text ? <p className="text-[#FF8399]">{text}</p> : <p className="text-[#FF8399]">"Editar"</p>}
            
          </div>
        </button>
    </>
  );
}