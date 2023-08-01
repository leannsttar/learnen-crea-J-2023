import React from "react";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";

export function Feed() {
  return (
    <>
      <div className="grid grid-cols-[1fr_650px] h-screen font-Poppins">
        <div className="">
          <h1 className="text-4xl font-bold text-pink-400 mt-24 ml-28 mb-12">
            Your feed
          </h1>
          <div className="border-l border-r border-t border-black bg-gray-100 flex flex-row items-center pl-6 w-1/2 mx-auto p-4">
            <img
              className="w-12 h-12 -mr-6"
              src="/assets/person-post.png"
              alt=""
            />
            <img className="w-12 h-12" src="/assets/german.png" alt="" />
            <div className="flex flex-col ml-6">
              <h6 className="font-bold">Esteban</h6>
              <h6 className="text-sm">3 minutes ago</h6>
            </div>
            <AiOutlineEllipsis className="ml-auto w-12 h-12" />
          </div>
          <img className="w-1/2 mx-auto" src="/assets/post1.png" alt="" />
          <div className="border-l border-r border-b border-black bg-gray-100 flex flex-row items-center w-1/2 mx-auto p-4">
            <AiOutlineHeart className="mr-2 w-6 h-6" />
            <p>12</p>
            <div className="flex-grow"></div>
            <BsChatText className="mr-2 w-6 h-5" />
            <p className="text-sm">13 comments</p>
          </div>
        </div>
        <div className="border-l border-solid border-black">
          <h1 className="text-4xl font-bold text-pink-400 mt-14 ml-10">
            People
          </h1>
          <div className="flex flex-row mt-16 ml-8">
            <h3 className="p-6">1</h3>
            <img className="p-2" src="/assets/person-post.png" alt="" />
            <h3 className="p-6 font-bold text-lg">Esteban Villeda</h3>
            <div className="ml-auto flex items-center">
              <button className="shadow-circle border-2 border-black bg-white h-[45px] w-[100px] m-6">
                Seguir
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-pink-400 mt-32 ml-10">
            Our blog
          </h1>
          <div className="flex flex-row mt-12 p-8">
            <img
              className="w-[170px] h-[120px]"
              src="/assets/feed-blog.png"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold text-xl ml-6">
                La naranja es buena para que <br />
                la vida te mejore
              </p>
              <p className="ml-6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                ipsam iusto molestiae, eos quis voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
