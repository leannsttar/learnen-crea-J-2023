import React from "react";
import { Link } from "react-router-dom";
import LogoMobile from "/src/assets/logo_right_text.svg";
import LogoDesktop from "/src/assets/logo_right_text_desktop.svg";
import Arrow from "../assets/arrow.svg";

function ButtonHeader(props) {
  return (
    <Link to={props.to}>
      <button className={props.className}>
        <img src={Arrow} alt="" className={props.imgClassName} />
        {props.text}
      </button>
    </Link>
  );
}

export function Header() {
  return (
    <header className="border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-30 h[100px] lg:h-[100px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/*logo*/}
        <Link to={"/"}>
          <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
        </Link>
        <nav className="hidden lg:flex lg:gap-5">
          <div className="space-x-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/community"}>Comunidad</Link>
            <Link to={"/"}>Blog</Link>
          </div>
        </nav>
        <div className="lg:flex lg:gap-5 hidden">
          <ButtonHeader
            className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-white"
            to="/"
            text="Iniciar sesión"
          />
          <ButtonHeader
            className="flex gap-3 px-6 py-2.5 shadow-square border border-white bg-black text-white flex-row-reverse"
            imgClassName="invert"
            to="/"
            text="Registrarse"
          />
        </div>
      </div>
    </header>
  );
}
