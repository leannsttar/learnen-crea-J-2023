import React, { useState, useEffect } from "react";

const data = [
  {
    src: "/assets/slider-blog1.jpg",
    text: "Nacely Orellana",
  },
  {
    src: "/assets/slider-blog2.jpg",
    text: "Leandro Valencia",
  },
  {
    src: "/assets/slider-blog3.jpg",
    text: "Estos son los nombres de esta historia",
  },
  {
    src: "/assets/slider-blog4.jpg",
    text: "Historia de un amor inolvidable",
  },
  {
    src: "/assets/slider-blog5.jpg",
    text: "Que vivirá siempre en el corazón de todos",
  },
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
          style={{ maxHeight: "700px" }}
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

export function CardPrincipal() {
  const dataTop = [
    {
      /*aquí debería ir la imagen de top poster para que se impriman con map y así xd, después se hace */
    },
  ];

  return (
    <>
      <p className="text-pink-400 font-bold text-4xl ml-24 mt-24 mb-24">
        Nuestro blog
      </p>

      <div className="flex flex-row justify-center mx-auto pl-24 pr-24 mb-32">
  <div className="flex flex-col bg-custom-bg w-[60%] bg-cover h-[500px] rounded">
    <div className="flex flex-col w-[50%] overflow-hidden">
      <h1 className="text-4xl mt-10 ml-10">
        Something about <br /> lenguages
      </h1>
      <p className="mt-8 ml-10">Rodri Pineda</p>
      <p className="mt-8 ml-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
        facere nobis itaque doloremque, accusamus magnam iste, voluptatibus
        dignissimos quis numquam repellendus modi architecto error praesentium
        possimus?
      </p>
    </div>
  </div>
  <div>
    <div className="flex flex-col bg-gray-100 ml-20 w-full rounded flex-grow">
      <h3 className="mt-4 ml-8 font-bold text-xl">Top posters</h3>

      <div className="flex flex-row ml-6 mt-6 mb-6">
        <img className="w-[60px]" src="/assets/Group3.png" alt="" />
        <div className="flex flex-col">
          <p className="ml-4">Andrea Wise</p>
          <p className="ml-4 mt-2 text-xs">135 Articles</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export function CardsBlog() {
  const dataCards = [
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
    {
      language: "ESPAÑOL",
      title: "Simple juice recipes to boost your immune system",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
      img: "/assets/blog-image.png",
    },
  ];

  return (
    <>
      <div className="mb-24">
        <div className="flex flex-wrap gap-10 justify-center mt-20">
          {dataCards.map((card, index) => (
            <div key={index} className="mb-8 w-96">
              <div className="">
                <img src={card.img} className="w-full" alt="" />
              </div>
              <div className="bg-gray-200 p-10 relative">
                <h6 className="text-blue-400 text-sm">{card.language}</h6>
                <h2 className="mt-4 font-bold text-[1.3rem]">{card.title}</h2>
                <h4 className="mt-4 text-base">{card.p}</h4>
                <hr className="mt-12 border border-gray-400" />
                <p className="text-sm absolute bottom-2 right-10">2 días</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export function AllBlogContent() {
  return (
    <>
      <SliderBlog />
      <CardPrincipal />
      <CardsBlog/>
    </>
  );
}
