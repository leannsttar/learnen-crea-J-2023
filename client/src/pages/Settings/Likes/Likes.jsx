import React from "react";

const userLikes = [
  {
    id: 2901,
    picture: "src/assets/Posts/post1.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post2.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post3.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post4.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post5.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post6.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post7.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post8.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post9.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post10.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post11.jpg",
  },
  {
    id: 2901,
    picture: "src/assets/Posts/post12.jpg",
  },
];

export function Likes() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-5 px-10">
        {userLikes.map((post, index) => (
          <img key={index} src={post.picture} className="w-[200px]" />
        ))}
      </div>
    </div>
  );
}
