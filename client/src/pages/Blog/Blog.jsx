import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Fade, Slide } from "react-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <motion.div
        className="w-full h-[60vh] md:h-1/6 overflow-hidden relative font-Poppins"
        key={currentIndex}
        initial={{ opacity: 1, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={data[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="w-full h-full md:h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-4xl md:text-4xl font-bold text-center">
            {data[currentIndex].text}
          </div>
        </div>
      </motion.div>
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
      <Element>
        <Slide bottom delay={500}>
          <div className="font-Poppins">
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
                    Los idiomas, tejidos de comunicación, reflejan la identidad
                    de sociedades. Aprendizaje amplía horizontes, revelando
                    culturas y creencias. Traducción conecta, compartiendo
                    visiones, enriqueciendo un mundo diverso y entrelazado.
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
          </div>
        </Slide>
      </Element>
    </>
  );
}

export function CardsBlog() {
  const dataCards = [
    {
      url: "/blog/article/info/card-1",
      language: "Sobre Idiomas",
      title: "El políglota más famoso:",
      p: "Ziad Fazah es un libanés que ostenta el récord Guinness por hablar 59 idiomas. Su capacidad lingüística excepcional lo ha llevado a ser un maestro del lenguaje y a brindar conferencias sobre la importancia de la comunicación intercultural.",
      img: "/assets/p-card1.jpg",
    },
    {
      url: "/blog/article/info/card-2",
      language: "Sobre Idiomas",
      title: "Palabras intraducibles:",
      p: "Algunos idiomas contienen términos que no pueden traducirse directamente a otros idiomas debido a su singularidad cultural. Por ejemplo, saudade en portugués describe una sensación de profunda nostalgia y añoranza.",
      img: "/assets/p-card2.jpg",
    },
    {
      url: "/blog/article/info/card-3",
      language: "Sobre Idiomas",
      title: "El idioma más hablado:",
      p: "El chino mandarín es el idioma con más hablantes nativos en el mundo, superando los mil millones. Su compleja estructura y los tonos tonales hacen que sea un desafío intrigante para los estudiantes.",
      img: "/assets/p-card3.jpg",
    },
    {
      url: "/blog/article/info/card-4",
      language: "Sobre Idiomas",
      title: "Orígenes del alfabeto:",
      p: "El alfabeto que usamos en gran parte del mundo, incluyendo inglés y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí, donde las antiguas inscripciones hebreas evolucionaron con el tiempo para dar lugar a lo que hoy conocemos como el alfabeto.",
      img: "/assets/p-card4.jpg",
    },
    {
      url: "/blog/article/info/card-5",
      language: "Sobre Idiomas",
      title: "Aprender mientras duermes:",
      p: "Aunque la idea de aprender mientras duermes ha sido objeto de debate, algunos estudios sugieren que la exposición a un idioma durante el sueño puede ayudar a familiarizarse con los sonidos, aunque no con el significado",
      img: "/assets/p-card5.jpg",
    },
    {
      url: "/blog/article/info/card-6",
      language: "Sobre Idiomas",
      title: "Idioma de signos universal:",
      p: "El International Sign es una forma de comunicación gestual utilizada en eventos internacionales para superar las barreras lingüísticas entre personas sordas de diferentes países. Aunque no es un idioma en sí mismo, permite una comunicación básica.",
      img: "/assets/p-card6.jpg",
    },
  ];

  return (
    <>
      <div className="pb-24 font-Poppins">
        <div className="flex flex-row flex-wrap justify-center mt-20">
          {dataCards.map((card, index) => (
            <Link to={card.url} key={index}>
              <Element className="mb-8 w-[350px] mx-4" name={`card-${index}`}>
                <Fade bottom delay={index * 300}>
                  <div className="relative">
                    <img
                      src={card.img}
                      className="w-full h-56 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-100 p-10 relative">
                    <h6 className="text-blue-400 text-sm">{card.language}</h6>
                    <h2 className="mt-4 font-bold text-[1.3rem]">
                      {card.title}
                    </h2>
                    <h4 className="mt-4 text-base">{card.p}</h4>
                    <hr className="mt-12" />
                    <p className="text-sm absolute bottom-2 right-10">2 días</p>
                  </div>
                </Fade>
              </Element>
            </Link>
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
      <CardsBlog />
    </>
  );
}
