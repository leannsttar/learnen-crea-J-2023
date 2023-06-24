import React, { useState, useEffect } from "react";

export function SliderBlog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = [
      "/assets/slider-blog1.png",
      "/assets/slider-blog2.png",
      "/assets/slider-blog3.png",
      "/assets/slider-blog4.png",
      "/assets/slider-blog5.png",
    ];

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="w-full h-1/6 overflow-hidden">
        <img
          src={`/assets/slider-blog${currentIndex + 1}.jpg`}
          alt={`Slider Image ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
          style={{ maxHeight: "500px" }}
        />
      </div>
    </>
  );
}

export function BlogCards() {
  return <></>;
}

export function AllBlogContent() {
    return(
        <>
        <SliderBlog />
        <BlogCards />
      </>
    )
}
