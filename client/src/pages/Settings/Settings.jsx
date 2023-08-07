import { React, useState } from "react";
import { AppTitle } from "../../components/AppTitle.jsx";
import { Cuenta } from "./Cuenta/Cuenta.jsx";
import { SobreMi } from "./SobreMi/SobreMi.jsx";
import { Idiomas } from "./Idiomas/Idiomas.jsx";
import { Likes } from "./Likes/Likes.jsx";
import { Bloqueados } from "./Bloqueados/Bloqueados.jsx";

export function LinkMiniNav({ name, onClick, layout }) {
  return (
    <div
      onClick={onClick}
      className={
        name === layout
        ? "w-auto px-5 py-3 text-black border-b-[4px] border-black cursor-pointer transition-all ease-in duration-150"
        : "w-auto px-5 py-3 hover:border-b-[4px] hover:border-black  cursor-pointer transition-all ease-in duration-150"
      }
    >
      <p>{name}</p>
    </div>
  );
}

export function Settings() {
  const [layout, setLayout] = useState("Cuenta");

  const changeLayout = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="flex flex-col items-center font-Poppins">
      <div className="mt-12 w-[90%] mb-16">
        <div className="mb-14">
          <AppTitle title="Configuración" />
          <div className="w-full flex border-[1px] gap-3 border-[#cfcfcf] rounded-xl p-1 mt-6">
            <LinkMiniNav
              layout={layout}
              name="Cuenta"
              onClick={() => changeLayout("Cuenta")}
            />
            <LinkMiniNav
              layout={layout}
              name="Sobre Mi"
              onClick={() => changeLayout("Sobre Mi")}
            />
            <LinkMiniNav
              layout={layout}
              name="Idiomas"
              onClick={() => changeLayout("Idiomas")}
            />
            <LinkMiniNav
              layout={layout}
              name="Likes"
              onClick={() => changeLayout("Likes")}
            />
            <LinkMiniNav
              layout={layout}
              name="Bloqueados"
              onClick={() => changeLayout("Bloqueados")}
            />
          </div>
        </div>
        <div>
          {layout === "Cuenta" ? (
            <Cuenta />
          ) : layout === "Sobre Mi" ? (
            <SobreMi />
          ) : layout === "Idiomas" ? (
            <Idiomas />
          ) : layout === "Likes" ? (
            <Likes />
          ) : layout === "Bloqueados" ? (
            <Bloqueados />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
