import React from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { ChangePhoto } from "./ChangePhoto";
import { EditInfoAccount } from "./EditInfoAccount";
import ProfilePhoto from "../../../assets/Female.jpg";
import { useSession } from "../../../components/Header/useSession.js";

export function Cuenta() {
  // const userInfoAccount = {
  //   "userName": "Nacely",
  //   "userLastName": "Orellana",
  //   "userBirth": "11/09/2005",
  //   "userMail": "nacely@gmail.com",
  //   "userPassword": "*******",
  //   "userPhoto": ProfilePhoto

  // }
  const { usuario } = useSession();

  const originalDateTime = usuario.fecha_nacimiento;
  const onlyDate = originalDateTime.slice(0, 10);

  return (
    <div className="flex flex-col gap-8">
      <ChangePhoto
        userPhoto={`http://localhost:5000${usuario.imagen_perfil}`}
      />
      <div className="flex flex-col gap-3">
        <EditInfoAccount
          dataName="Nombre"
          dataUser={usuario.nombre}
          name="nombre"
        />
        <EditInfoAccount
          dataName="Apellido"
          dataUser={usuario.apellido}
          name="apellido"
        />
        <EditInfoAccount
          dataName="Fecha de nacimiento"
          dataUser={onlyDate}
          name="fecha_nacimiento"
        />
        <EditInfoAccount
          dataName="Correo"
          dataUser={usuario.correo}
          name="correo"
        />
        <EditInfoAccount
          dataName="Contraseña"

          pass
          name="contrasenia"
        />
      </div>
      <div>
        <button className="text-white hover:bg-red-600 bg-[#FF8399] px-7 py-3 rounded-lg text-[20px]">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
