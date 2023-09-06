import React, { useState, useEffect } from "react";
import { useSession } from "../../../components/Header/useSession.js";
import axios from "axios";
import { PostProfile } from "../../Profile/LowerProfile.jsx";

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
  const [posts, setPosts] = useState([]);

  const getLikedPosts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/settings/likes/${usuario.id}`
      );
      console.log(data);
      setPosts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const obtenerPosts = async () => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:5000/feed/userPosts/${usuario.id}`);
  //     console.log(data);
  //     setPosts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getLikedPosts();
    // obtenerPosts()
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-wrap gap-5 justify-center 800:justify-start">
        {/* {likes &&
          likes.map((post, index) => (
            <img
              key={index}
              src={`http://localhost:5000/imagenes/processed-${post.imagen}`}
              className="w-[12rem] h-[12rem] object-cover"
            />
          ))} */}
        {console.log(posts)}
        {posts &&
          posts.map((post) => (
            <div className="w-[15rem] h-[15rem]">
              <PostProfile
                keyProp={post.id}
                posts={post}
                key={post.id}
                setPosts={setPosts}
              />
            </div>
          ))
        }
       {posts.length === 0 && 'No has likeado ninguna publicación'}

      </div>
    </div>
  );
}
