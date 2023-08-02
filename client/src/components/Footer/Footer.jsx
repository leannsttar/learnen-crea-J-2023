import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <div className="bg-[#1E2833] font-Poppins">
        <div className="flex flex-col items-center pt-16 pb-20 bottom-0 w-full">
            <Link to={"/"}>
              <img className="w-[104px] h-[104px]" src="../../assets/learnen.png" alt="" />
            </Link>
          <p className="text-white text-center pt-8 pb-8 text-lg italic">
            La red social donde todo el mundo <br />puede aprender y practicar.
          </p>
          <div className="lg:flex">
            <ul className="text-white flex flex-col lg:flex-row lg:gap-12 pt-10">
              {/* Home */}
              <Link to={"/"}>
                <li className="text-base">Home</li>
              </Link>
              <Link to={"/feed"}>
                <li className="text-base">Posts</li>
              </Link>
              <Link to={"/community"}>
                <li className="text-base">Comunidad</li>
              </Link>
              <Link to={"/chat"}>
                <li className="text-base">Chat</li>
              </Link>
              <Link to={"/blog"}>
                <li className="text-base">Blog</li>
              </Link>
              <Link to={"/notifications"}>
                <li className="text-base">Notificaciones</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-row pt-14 gap-8">
            <img className="w-[13px] h-[20px]" src="/assets/facebook.png" alt="" />
            <img className="w-[19px] h-[19px]" src="/assets/instagram.png" alt="" />
            <img className="w-[19px] h-[19px]" src="/assets/twitter.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
