import React from "react";

export function Notificaciones() {
  return (
    <>
      <h1 className="text-3xl font-bold text-pink-400 ml-16 mt-32">
        Notificaciones
      </h1>
      <div className="flex items-center ml-10 mr-10 mt-14 mb-8 bg-gray-100 border-b border-zinc-400 p-2 rounded-xl">
        <div className="flex-shrink-0">
          <img
            src="src/assets/message-notif.png"
            alt=""
            className="w-6 h-6 mr-2 ml-2"
          />
        </div>
        <div className="ml-2">
          <img
            className="w-8 h-8 rounded-full"
            src="/assets/person-post.png"
            alt="Avatar"
          />
        </div>
        <div className="ml-2">
          <h3 className="text-base font-medium text-gray-900">
            Sergio comentó
          </h3>
          <p className="text-xs text-gray-500">4 minutos</p>
        </div>
        <div className="flex-grow"></div>
        <div className="w-3 h-3 bg-pink-300 rounded-full mr-4"></div>
      </div>
    </>
  );
}
