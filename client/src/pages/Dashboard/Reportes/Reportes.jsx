import React, { useEffect, useState } from "react";
import axios from "axios";

export function Reportes() {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    async function fetchReportes() {
      try {
        const res = await axios.get("http://localhost:5000/reports");
        setReportes(res.data.reportes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchReportes();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[1000px] h-[500px] p-8 flex flex-col items-start gap-6 bg-white">
        <h2 className="text-2xl font-semibold">Reportes</h2>
        {reportes.map((reporte) => (
          <div key={reporte.id} className="flex items-center justify-between w-full border-gray-300 border-b">
            <div className="">
              <h3 className="text-lg font-medium">{reporte.descripcion}</h3>
              <p className="text-sm text-gray-500">{reporte.id_cliente}</p>
            </div>
            <p className="text-base font-bold">Enviado con éxito</p>
          </div>
        ))}
      </div>
    </div>
  );
}
