import React from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { ChangePhoto } from "./ChangePhoto";
import { EditInfoAccount } from "./EditInfoAccount";

export function Cuenta() {
  return (
    <div className="flex flex-col gap-8">
      <ChangePhoto />
      <div className="flex flex-col gap-3">
        <EditInfoAccount dataName="Nombre" dataUser="Nacely" />
        <EditInfoAccount dataName="Apellido" dataUser="Orellana" />
        <EditInfoAccount dataName="Fecha de nacimiento" dataUser="11/09/2005" />
        <EditInfoAccount dataName="Correo" dataUser="nacely@gmail.com" />
        <EditInfoAccount dataName="Contraseña" dataUser="********" />
      </div>
      <div>
        <button className="text-white hover:bg-red-600 bg-[#FF8399] px-7 py-3 rounded-lg text-[20px]">Cerrar sesión</button>
      </div>
    </div>
  );
}
