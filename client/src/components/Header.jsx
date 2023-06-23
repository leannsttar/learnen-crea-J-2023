import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoMobile from "/src/assets/logo_right_text.svg";
import LogoDesktop from "/src/assets/logo_right_text_desktop.svg";
import Arrow from "../assets/arrow.svg";
import { MobileNav } from "./MobileNav.jsx";

export function ButtonHeader(props) {
  return (
    <Link to={props.to}>
      <button className={props.className}>
        <img src={Arrow} alt="" className={props.imgClassName} />
        {props.text}
      </button>
    </Link>
  );
}

const linksClass = {
  nonactive: "hover:border-b-4 border-[#FFEC45] font-medium transition-border ease-in-out duration-100",
  active: "border-b-4 border-[#FFEC45] font-medium",
};

export function Header() {
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-30 h-[100px] lg:h-[100px] flex items-center">
      <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
        {/*logo*/}
        <Link to={"/"}>
          <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
        </Link>
        <nav className="hidden lg:flex lg:gap-5 lg:translate-x-10">
          <div className="space-x-8">
            <Link
              to={"/"}
              className={
                activeLink === "/" ? linksClass.active : linksClass.nonactive
              }
            >
              Home
            </Link>
            <Link
              to={"/community"}
              className={
                activeLink === "/community"
                  ? linksClass.active
                  : linksClass.nonactive
              }
            >
              Comunidad
            </Link>
            <Link
              to={"/blog"}
              className={
                activeLink === "/blog"
                  ? linksClass.active
                  : linksClass.nonactive
              }
            >
              Blog
            </Link>
          </div>
        </nav>
        <div className="lg:flex lg:gap-5 hidden">
          <ButtonHeader
            className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-white hover:scale-105 hover: transition-scale ease-in duration-200"
            to="/"
            text="Iniciar sesión"
          />
          <ButtonHeader
            className="flex gap-3 px-6 py-2.5 shadow-square border border-white bg-black text-white flex-row-reverse hover:scale-105 hover: transition-scale ease-in duration-200"
            imgClassName="invert"
            to="/"
            text="Registrarse"
          />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
