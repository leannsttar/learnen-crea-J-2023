import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Fade, Slide } from "react-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  {
    src: "/assets/slider-blog1.jpg",
    text: "¡Celebremos la hermosa diversidad de idiomas!",
  },
  {
    src: "/assets/slider-blog2.jpg",
    text: "Únete a nuestro viaje de aprendizaje de idiomas mientras nos conectamos con hablantes de todo el mundo.",
  },
  {
    src: "/assets/slider-blog3.jpg",
    text: "Celebremos el intercambio cultural.",
  },
  {
    src: "/assets/slider-blog4.jpg",
    text: "Ampliemos horizontes y creemos conexiones globales a través del poder de las palabras.",
  },
  {
    src: "/assets/slider-blog5.jpg",
    text: "Learnen",
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
        className="w-full h-[70vh] overflow-hidden relative font-Poppins"
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
        <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 flex items-center justify-center">
          <div className="text-white text-4xl md:text-4xl font-bold text-center">
            {data[currentIndex].text}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function CardPrincipal() {

  return (
    <>
      <Element>
        <Slide bottom delay={500}>
          <div className="font-Poppins">
            <p className="text-pink-400 font-bold text-4xl ml-24 mt-24 mb-24">
              Nuestro blog
            </p>
            <div className="flex flex-row flex-wrap justify-center mx-auto pl-24 pr-24 mb-32 w-full gap-10">
              <div className="flex flex-col bg-custom-bg w-[60%] lgv:w-96  lgv:pr-4 bg-cover h-fit rounded">
                <div className="flex flex-col w-[50%] p-1 lgv:w-[80%]" >
                  <h1 className="text-4xl mt-10 ml-10 lgv:ml-4 lgv:mt-2 lgv:text-3xl">
                  Récord de alfabetos
                  </h1>
                  <p className="mt-8 ml-10 lgv:ml-4 ">Datos que te harán volar</p>
                  <p className="mt-8 ml-10 lgv:ml-4">
                  El etíope tiene la mayor cantidad de formas únicas de escritura de las letras en cualquier alfabeto del mundo: ¡un total de 345 caracteres!
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col bg-gray-100 lgv:mt-10 lgv:w-96 md:ml-0  ml-20 w-full rounded flex-grow">
                  <h3 className="mt-4 ml-8 font-bold text-xl">Top posters</h3>

                  <div className="flex flex-row ml-6 mt-6 mb-6 mr-6" >
                    <img className="w-[60px]" src="/assets/leandro.png" alt="" />
                    <div className="flex flex-col">
                      <p className="ml-4">Fernando Alexander</p>
                      <p className="ml-4 mt-2 text-xs">Creador del contenido</p>
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
      language: "Sobre idiomas",
      title: "Palabras intraducibles:",
      p: "Algunos idiomas contienen términos que no pueden traducirse directamente a otros idiomas debido a su singularidad cultural. Por ejemplo, saudade en portugués describe una sensación de profunda nostalgia y añoranza.",
      img: "/assets/p-card2.jpg",
    },
    {
      url: "/blog/article/info/card-3",
      language: "Sobre idiomas",
      title: "El idioma más hablado:",
      p: "El chino mandarín es el idioma con más hablantes nativos en el mundo, superando los mil millones. Su compleja estructura y los tonos tonales hacen que sea un desafío intrigante para los estudiantes; sin duda un gran reto.",
      img: "/assets/p-card3.jpg",
    },
    {
      url: "/blog/article/info/card-4",
      language: "Sobre idiomas",
      title: "Orígenes del alfabeto:",
      p: "El alfabeto que usamos en gran parte del mundo, incluyendo inglés y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí, donde las antiguas inscripciones hebreas evolucionaron con el tiempo produciendo lo actual.",
      img: "/assets/p-card4.jpg",
    },
    {
      url: "/blog/article/info/card-5",
      language: "Sobre idiomas",
      title: "Aprender mientras duermes:",
      p: "Aunque la idea de aprender mientras duermes ha sido objeto de debate, algunos estudios sugieren que la exposición a un idioma durante el sueño puede ayudar a familiarizarse con los sonidos, aunque no con el significado, tú decides si creerlo, suena interesante, ¿no?",
      img: "/assets/p-card5.jpg",
    },
    {
      url: "/blog/article/info/card-6",
      language: "Sobre idiomas",
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
              <Element className="mb-8 w-[350px] mx-4 hover:scale-95 ease-in-out duration-300" name={`card-${index}`}>
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
                    <p className="text-sm absolute bottom-2 right-10"><span className="text-indigo-600" translate="no"> Learnen</span></p>
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
