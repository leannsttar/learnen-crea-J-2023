import React from "react";
import { AiOutlineEllipsis, AiOutlineHeart } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';

export function Feed() {
  return (
    <>
      <div className="grid grid-cols-[1fr_650px] h-screen">
        <div className="">
          <h1 className="text-4xl font-bold text-pink-400 mt-24 ml-28 mb-12">Your feed</h1>
          <div className="border-1.5 border-solid bg-gray-100 rounded-md flex flex-row items-center pl-6 w-1/2 mx-auto p-4">
            <img className="w-12 h-12 -mr-6" src="/assets/person-post.png" alt="" />
            <img className="w-12 h-12" src="/assets/german.png" alt="" />
            <div className="flex flex-col ml-6">
              <h6 className="font-bold">Esteban</h6>
              <h6 className="text-sm">3 minutes ago</h6>
            </div>
            <AiOutlineEllipsis className="ml-auto w-12 h-12" />
          </div>
          <img className="w-1/2 mx-auto" src="/assets/post1.png" alt="" />
          <div className="border-1.5 border-solid bg-gray-100 rounded-md flex flex-row items-center w-1/2 mx-auto p-4">
            <AiOutlineHeart className="mr-2 w-6 h-6" />
            <BsChatText className="mr-2" />
            <p className="text-sm justify-end">13 comments</p>
          </div>
        </div>
        <div className="bg-green-300">
          <h1 className="text-xl font-bold">People</h1>
        </div>
      </div>
    </>
  );
}
