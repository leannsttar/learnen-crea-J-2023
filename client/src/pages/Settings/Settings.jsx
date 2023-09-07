import { React, useState, useEffect } from "react";
import { AppTitle } from "../../components/AppTitle.jsx";
import { Cuenta } from "./Cuenta/Cuenta.jsx";
import { SobreMi } from "./SobreMi/SobreMi.jsx";
import { Idiomas } from "./Idiomas/Idiomas.jsx";
import { Likes } from "./Likes/Likes.jsx";
import { Bloqueados } from "./Bloqueados/Bloqueados.jsx";
import { Select, Option } from "@material-tailwind/react";

export function LinkMiniNav({ name, onClick, layout }) {
  return (
    <>
      <div
        onClick={onClick}
        className={
          name === layout
            ? "w-auto px-5 py-3 text-white  bg-black rounded-xl cursor-pointer transition-all ease-in duration-150"
            : "w-auto px-5 py-3 hover:bg-black hover:text-white rounded-xl cursor-pointer transition-all ease-in duration-150"
        }
      >
        <p>{name}</p>
      </div>
    </>
  );
}


export function Settings() {
  const [layout, setLayout] = useState("Cuenta");
  const [selectedTab, setSelectedTab] = useState("Cuenta");

  const changeLayout = (newLayout) => {
    setLayout(newLayout);
    setSelectedTab(newLayout);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <>
          <div className="min-h-screen flex flex-col items-center font-Poppins">
            <div className="mt-10 w-[90%] mb-16">
              <div className="flex justify-center items-center py-3 mb-10">
                <Select className="rounded-lg pb-7" value={selectedTab}>
                  <Option>
                    <LinkMiniNav
                      layout={layout}
                      name="Cuenta"
                      onClick={() => changeLayout("Cuenta")}
                    /></Option>
                  <Option>
                    <LinkMiniNav
                      layout={layout}
                      name="Sobre mí"
                      onClick={() => changeLayout("Sobre mí")}
                    /></Option>
                  <Option>
                    <LinkMiniNav
                      layout={layout}
                      name="Idiomas"
                      onClick={() => changeLayout("Idiomas")}
                    /></Option>
                  <Option>
                    <LinkMiniNav
                      layout={layout}
                      name="Likes"
                      onClick={() => changeLayout("Likes")}
                    /></Option>
                </Select>

              </div>
              <div className="w-full">
                {layout === "Cuenta" ? (
                  <Cuenta />
                ) : layout === "Sobre mí" ? (
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
        </>
      ) : (
        <>
          <div className="min-h-screen flex flex-col items-center font-Poppins">
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
                    name="Sobre mí"
                    onClick={() => changeLayout("Sobre mí")}
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
                  {/* <LinkMiniNav
              layout={layout}
              name="Bloqueados"
              onClick={() => changeLayout("Bloqueados")}
            /> */}
                </div>
              </div>
              <div>
                {layout === "Cuenta" ? (
                  <Cuenta />
                ) : layout === "Sobre mí" ? (
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
        </>
      )}
    </div>

  );

}
