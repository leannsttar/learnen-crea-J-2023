import React from "react";

export function Usuarios() {
  const data = [
    {
      id: 1,
      user: {
        name: "Leandro Nance",
        photo: "/src/assets/chica-usuario.png",
      },
      email: "leandro@gmail.com",
      gender: "Nacely",
      native: "English",
      fluent: "Spanish",
      learning: "German",
    },
    {
      id: 1,
      user: {
        name: "Leandro Nance",
        photo: "/src/assets/chica-usuario.png",
      },
      email: "leandro@gmail.com",
      gender: "Nacely",
      native: "English",
      fluent: "Spanish",
      learning: "German",
    },
    {
      id: 1,
      user: {
        name: "Leandro Nance",
        photo: "/src/assets/chica-usuario.png",
      },
      email: "leandro@gmail.com",
      gender: "Nacely",
      native: "English",
      fluent: "Spanish",
      learning: "German",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className=" rounded-lg overflow-hidden h-96 mt-24 mx-20">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-2 border text-center">User</th>
              <th className="px-4 py-2 border text-center">Email</th>
              <th className="px-4 py-2 border text-center">Gender</th>
              <th className="px-4 py-2 border text-center">Native</th>
              <th className="px-4 py-2 border text-center">Fluent</th>
              <th className="px-4 py-2 border text-center">Learning</th>
              <th className="px-4 py-2 border text-center">Fluent</th>
              <th className="px-4 py-2 border text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border-b flex items-center border-l">
                  <img
                    src={item.user.photo}
                    alt="User Photo"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {item.user.name}
                </td>
                <td className="px-4 py-2 border text-center">{item.email}</td>
                <td className="px-4 py-2 border text-center">{item.gender}</td>
                <td className="px-4 py-2 border text-center">{item.native}</td>
                <td className="px-4 py-2 border text-center">{item.fluent}</td>
                <td className="px-4 py-2 border text-center">
                  {item.learning}
                </td>
                <td className="px-4 py-2 border text-center">{item.fluent}</td>
                <td className="px-4 py-2 border-b border-r flex items-center justify-center">
                  <img
                    src="/src/assets/MoreVert.png"
                    alt=""
                    className="w-7 h-7"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
