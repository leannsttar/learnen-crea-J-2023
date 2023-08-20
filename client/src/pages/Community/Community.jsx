import React from "react";
import { Flip } from "react-reveal";
import { Element } from "react-scroll";
import { AppTitle } from "../../components/AppTitle";
import { SearchBar } from "../Community/SearchBar";
import { CommunityCard } from "./CommunityCard";

export function Community() {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };
  return (
    <>
      <div className="font-Poppins">
        <div className="pt-[40px] 1800:px-[80px] px-[20px] 1080:w-full mb-64">
          <div className="800:flex 800:justify-between 800:items-center 800:mb-[70px] mb-[30px] space-y-6">
            <AppTitle title="Comunidad" />
            <SearchBar />
          </div>
          <Element className="grid auto-cols-fr grid-cols-1 800:grid-cols-2 1280:grid-cols-3 1920:grid-cols-4 gap-4 justify-center">
            <Flip left delay={700}>
              <CommunityCard />
            </Flip>
          </Element>
        </div>
      </div>
    </>
  );
}
