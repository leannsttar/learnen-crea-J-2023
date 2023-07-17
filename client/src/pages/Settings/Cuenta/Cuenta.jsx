import React from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { ChangePhoto } from "./ChangePhoto";
import { EditInfoAccount } from "./EditInfoAccount";
import ProfilePhoto from "../../../assets/Female.jpg"

export function Cuenta() {

  const userInfoAccount = { 
    "userName": "Nacely",
    "userLastName": "Orellana",
    "userBirth": "11/09/2005",
    "userMail": "nacely@gmail.com",
    "userPassword": "*******",
    "userPhoto": ProfilePhoto
    
  }

  return (
    <div className="flex flex-col gap-8">
      <ChangePhoto userPhoto={userInfoAccount.userPhoto}/>
      <div className="flex flex-col gap-3">
        <EditInfoAccount dataName="Nombre" dataUser={userInfoAccount.userName}/>
        <EditInfoAccount dataName="Apellido" dataUser={userInfoAccount.userLastName} />
        <EditInfoAccount dataName="Fecha de nacimiento" dataUser={userInfoAccount.userBirth} />
        <EditInfoAccount dataName="Correo" dataUser={userInfoAccount.userMail} />
        <EditInfoAccount dataName="Contraseña" dataUser={userInfoAccount.userPassword} pass/>
      </div>
      <div>
        <button className="text-white hover:bg-red-600 bg-[#FF8399] px-7 py-3 rounded-lg text-[20px]">Cerrar sesión</button>
      </div>
    </div>
  );
}
