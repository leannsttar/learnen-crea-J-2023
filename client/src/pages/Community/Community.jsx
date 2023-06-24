import React from "react";
import { AppTitle } from "../../components/AppTitle";
import { SearchBar } from "../Community/SearchBar";
import { CommunityCard } from "./CommunityCard";

export function Community() {
  return (
    <>
      <div className="">
        <div className="pt-[40px] 1800:px-[80px] px-[20px] 1080:w-full ">
          <div className="800:flex 800:justify-between 800:items-center 800:mb-[70px] mb-[30px] space-y-6">
            <AppTitle title="Comunidad" />
            <SearchBar />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 800:grid-cols-2 1280:grid-cols-3 1920:grid-cols-4 gap-4 justify-center">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </>
  );
}
