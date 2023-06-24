import React, { useState, useEffect } from "react";

const data = [
  {
    src: "/assets/slider-blog1.jpg",
    text: "Nacely Orellana"
  },
  {
    src: "/assets/slider-blog2.jpg",
    text: "Leandro Valencia"
  },
  {
    src: "/assets/slider-blog3.jpg",
    text: "Estos son los nombres de esta historia"
  },
  {
    src: "/assets/slider-blog4.jpg",
    text: "Historia de un amor inolvidable"
  },
  {
    src: "/assets/slider-blog5.jpg",
    text: "Que vivirá siempre en el corazón de todos"
  }
];

export function SliderBlog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="w-full h-1/6 overflow-hidden relative">
        <img
          src={data[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
          style={{ maxHeight: "500px" }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-2xl font-bold">
            {data[currentIndex].text}
          </div>
        </div>
      </div>
    </>
  );
}


export function BlogCards() {
  return 
  
  <>
  
  
  
  </>;
}

export function AllBlogContent() {
    return(
        <>
        <SliderBlog />
        <BlogCards />
      </>
    )
}
