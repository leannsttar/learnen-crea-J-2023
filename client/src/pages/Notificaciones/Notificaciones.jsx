import React from "react";

export function Notificaciones() {
  const dataNotificaciones = [
    {
      id: 1,
      persona: "Sergio",
      fotoPersona: "/assets/person-post.png",
      icono: "src/assets/message-notif.png",
      tiempo: "4 minutos",
    },
    {
      id: 1,
      persona: "Leandro",
      fotoPersona: "/assets/person-post.png",
      icono: "src/assets/gallery-add.png",
      tiempo: "4 minutos",
    },
    {
      id: 1,
      persona: "Saz",
      fotoPersona: "/assets/person-post.png",
      icono: "src/assets/Heart.png",
      tiempo: "4 minutos",
    },
    {
      id: 1,
      persona: "Nacely",
      fotoPersona: "/assets/person-post.png",
      icono: "src/assets/profile-add.png",
      tiempo: "4 minutos",
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-pink-400 ml-16 mt-32">
        Notificaciones
      </h1>
      <div className="flex flex-col gap-2 mb-14 mt-14">
        {dataNotificaciones.map((data) => (
          <div
            className="flex items-center ml-10 mr-10 bg-gray-100 border-b border-zinc-400 p-4 rounded-xl"
            key={data.id}
          >
            <div className="flex-shrink-0">
              <img src={data.icono} alt="" className="w-6 h-6 mr-2 ml-2" />
            </div>
            <div className="ml-2">
              <img
                className="w-8 h-8 rounded-full"
                src={data.fotoPersona}
                alt="Avatar"
              />
            </div>
            <div className="ml-2">
              <h3 className="text-base font-medium text-gray-900">
                {data.persona}
              </h3>
              <p className="text-xs text-gray-500">{data.tiempo}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="w-3 h-3 bg-pink-300 rounded-full mr-4"></div>
          </div>
        ))}
      </div>
    </>
  );
}
