import React from "react";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";

const feedData = {
  name: "Esteban",
  time: "3 minutes ago",
  image: "/assets/person-post.png",
  avatar: "/assets/german.png",
  imagePost: "/assets/post1.png",
  likes: 12,
  comments: 13,
};

const peopleData = [
  {
    id: 1,
    name: "Esteban Villeda",
    image: "/assets/person-post.png",
  },
];

const blogData = {
  title: "La naranja es buena para que la vida te mejore",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam iusto molestiae, eos quis voluptas!",
  image: "/assets/feed-blog.png",
};

const PostCard = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="text-4xl font-bold text-pink-400 absolute top-36">Your feed</h1>
      <div className="border-l border-r border-t border-black bg-gray-100 flex flex-row items-center p-4 w-[431px]">
        <img className="w-12 h-12 -mr-6" src={feedData.image} alt="" />
        <img className="w-12 h-12" src={feedData.avatar} alt="" />
        <div className="flex flex-col ml-6">
          <h6 className="font-bold">{feedData.name}</h6>
          <h6 className="text-sm">{feedData.time}</h6>
        </div>
        <AiOutlineEllipsis className="ml-auto w-12 h-12" />
      </div>
      <img className="w-[431px]" src={feedData.imagePost} alt="" />
      <div className="border-l border-r border-b border-black bg-gray-100 flex flex-row items-center w-[431px] p-4">
        <AiOutlineHeart className="mr-2 w-6 h-6" />
        <p>{feedData.likes}</p>
        <div className="flex-grow"></div>
        <BsChatText className="mr-2 w-6 h-5" />
        <p className="text-sm">{feedData.comments} comments</p>
      </div>
    </div>
  );
};

const PeopleSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-400 mt-14 ml-10">People</h1>
      <div className="flex flex-row mt-16 ml-8">
        <h3 className="p-6">1</h3>
        <img className="p-2" src={peopleData[0].image} alt="" />
        <h3 className="p-6 font-bold text-lg">{peopleData[0].name}</h3>
        <div className="ml-auto flex items-center">
          <button className="shadow-circle border-2 border-black bg-white h-[45px] w-[100px] m-6">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-400 mt-32 ml-10">Our blog</h1>
      <div className="flex flex-row mt-12 p-8">
        <img className="w-[170px] h-[120px]" src={blogData.image} alt="" />
        <div className="flex flex-col">
          <p className="font-bold text-xl ml-6">{blogData.title}</p>
          <p className="ml-6 mt-4">{blogData.content}</p>
        </div>
      </div>
    </div>
  );
};

export function Feed() {
  return (
    <>

      <div className="grid grid-cols-[1fr_650px] h-screen">
        <div className="flex flex-col mt-16">
          <PostCard />
        </div>
        <div className="border-l border-solid border-black">
          <PeopleSection />
          <BlogSection />
        </div>
      </div>
    </>
  );
}
