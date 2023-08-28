import React from "react";
import { useState } from "react";
import { Flip } from "react-reveal";
import { Element } from "react-scroll";
import { AppTitle } from "../../components/AppTitle";
import { SearchBar } from "../Community/SearchBar";
import { CommunityCard } from "./CommunityCard";

export function Community() {
  const [searchText, setSearchText] = useState(""); 

  return (
    <>
      <div className="font-Poppins">
        <div className="pt-[40px] 1800:px-[80px] px-[20px] 1080:w-full mb-64">
          <div className="800:flex 800:justify-between 800:items-center 800:mb-[70px] mb-[30px] space-y-6">
            <AppTitle title="Comunidad" />
            <SearchBar setSearchText={setSearchText} />
          </div>
          <Element className=" border-red-600">
            <Flip left delay={700}>
              <CommunityCard searchText={searchText} />            
            </Flip>
          </Element>
        </div>
      </div>
    </>
  );
}