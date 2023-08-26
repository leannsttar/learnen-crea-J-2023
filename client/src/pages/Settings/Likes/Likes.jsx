import React, { useState, useEffect } from "react";
import { useSession } from "../../../components/Header/useSession.js";
import axios from "axios";

const userLikes = [
  {
    id: 2901,
    picture: "/src/assets/Posts/post1.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post2.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post3.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post4.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post5.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post6.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post7.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post8.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post9.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post10.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post11.jpg",
  },
  {
    id: 2901,
    picture: "/src/assets/Posts/post12.jpg",
  },
];

export function Likes() {
  const { usuario } = useSession();

  const [likes, setLikes] = useState(null);

  const getLikedPosts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/settings/likes/${usuario.id}`
      );
      console.log(data);
      setLikes(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLikedPosts();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-5 px-10">
        {likes &&
          likes.map((post, index) => (
            <img
              key={index}
              src={`http://localhost:5000/imagenes/processed-${post.imagen}`}
              className="w-[12rem] h-[12rem] object-cover"
            />
          ))}
        {/* {userLikes.map((post, index) => (
          <img key={index} src={post.picture} className="w-[200px]" />
        ))} */}
      </div>
    </div>
  );
}
