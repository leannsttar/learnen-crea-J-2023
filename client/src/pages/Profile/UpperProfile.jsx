import React from "react";
import { ButtonHeader } from "../../components/Header/ButtonHeader";
import ProfilePhoto from "../../assets/Female.png";

export function UpperProfile() {
  return (
    <>
      <div className="w-full h-[350px] bg-bgProfile"></div>
      <div className="flex mx-[80px] gap-8 mb-10">
        <div className="flex relative items-start">
          <img
            src={ProfilePhoto}
            alt=""
            className="w-[180px] object-cover relative top-[-60px]"
          />
        </div>
        <div className="flex gap-[8rem] mt-10">
          <p className="text-[40px] leading-none">Nacely Orellana</p>
          <div className="flex gap-7">
            <ButtonHeader
              className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#FFE9E9] hover:bg-[#FFD0D0] hover:transition-bg ease-in duration-200 flex-row-reverse"
              text="Follow"
            />
            <ButtonHeader
              className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-[#fff] hover:bg-[#FFEC45] hover:transition-bg ease-in duration-200 flex-row-reverse"
              imgClassName="hidden"
              text="Message"
            />
          </div>
        </div>
      </div>
    </>
  );
}
