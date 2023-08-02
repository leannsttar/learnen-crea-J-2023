import React from "react";

export function Reportes() {
  const dataReports = [
    {
      id: 1,
      problema: "Contenido inapropiado",
      causante: "Rodri Pineda",
      fecha: "03/27/2024",
    },
    {
      id: 2,
      problema: "Contenido de Nacely",
      causante: "Leandro Valencia",
      fecha: "03/27/2024",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[1000px] h-[500px] p-8 flex flex-col items-start gap-6 bg-white">
        <h2 className="text-2xl font-semibold">Reportes</h2>
        {dataReports.map((data) => (
          <div key={data.id} className="flex items-center justify-between w-full border-gray-300 border-b">
            <div className="">
              <h3 className="text-lg font-medium">{data.problema}</h3>
              <p className="text-sm text-gray-500">{data.causante}</p>
            </div>
            <p className="text-base font-bold">{data.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
