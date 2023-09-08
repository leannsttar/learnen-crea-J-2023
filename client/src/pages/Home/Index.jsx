import { React, useState, useEffect } from "react";
import { Fade, Flip } from "react-reveal";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import people from "../../assets/peopleIndex.jpg";
import erntedankfest from "../../assets/erntedankfest.jpg";
import { ButtonHeader } from "../../components/Header/ButtonHeader";
import downArrow from "../../assets/downArrow.svg";
import bggHome from "../../assets/bggHome.svg";
import germanFlag from "../../assets/Flags/germanFlag.svg";
import greekFlag from "../../assets/Flags/greekFlag.svg";
import norwayFlag from "../../assets/Flags/norwayFlag.svg";
import portugalFlag from "../../assets/Flags/portugalFlag.svg";
import englishFlag from "../../assets/Flags/englishFlag.svg";
import frenchFlag from "../../assets/Flags/frenchFlag.svg";
import { Link } from "react-router-dom";
import { useSession } from "../../components/Header/useSession";

export function FloatFlag({ img, className }) {
  return <img src={img} alt="" className={className} />;
}

export function IndexStart() {
  const { usuario } = useSession();
  console.log(usuario);

  return (
    <div className="mt-10 800:mt-0 h-[89.7vh] w-full flex">
      <div className="w-full 1370:w-[40%] 800:w-[60%] flex justify-center items-center 800:translate-y-[-50px] 400:scale-90 1370:scale-100 scale-75">
        <div className="flex flex-col gap-8 relative px-8 800:px-0">
          <FloatFlag
            img={germanFlag}
            className={
              "800:w-12 w-9 absolute top-[8rem] left-[1rem] 800:top-[23rem] z-10"
            }
          />
          <FloatFlag
            img={greekFlag}
            className={
              "800:w-12 w-9 absolute top-[7rem] right-[1.2rem] 800:top-[-5rem] 800:left-[2.7rem] z-10"
            }
          />
          <FloatFlag
            img={norwayFlag}
            className={
              "800:w-12 w-9 absolute top-[18rem] left-[0.8rem] 800:top-[-7rem] 800:left-[29rem] z-10"
            }
          />
          <FloatFlag
            img={frenchFlag}
            className={
              "800:w-12 w-9 absolute top-[14rem] right-[2rem] 800:top-[27rem] 800:right-[-2em] z-10"
            }
          />
          <FloatFlag
            img={portugalFlag}
            className={
              "800:w-12 w-9 absolute bottom-[9rem] right-[1.7rem] 800:bottom-[-16rem] left-[14rem] z-10"
            }
          />
          <FloatFlag
            img={englishFlag}
            className={
              "800:w-12 w-9 absolute bottom-[6.6rem] left-[2.5rem] 800:top-[1rem] 800:left-[17rem] z-10"
            }
          />
          <div className="">
            <p className="font-normal text-[30px] text-[#6c6d75] ml-2">
              Aprende con
            </p>
            <p
              className="font-[700] text-[#242635] text-[80px] 800:text-[120px] leading-[4rem] 800:leading-[9rem]"
              translate="no"
            >
              Learnen
            </p>
          </div>
          <img
            src={bggHome}
            alt=""
            className="800:hidden w-full h-full object-cover"
          />
          <div className="flex justify-center 800:justify-start">
            {usuario ? (
              <ButtonHeader
                className="ml-2 text-[22px] flex items-center gap-3 px-8 py-5 shadow-squareIndex bg-[#FF8399] text-black hover:scale-105 hover: transition-scale ease-in duration-200"
                imgClassName=" w-8"
                text="Empieza ya"
                to={"/community"}
              />
            ) : (
              <ButtonHeader
                className="ml-2 text-[22px] flex items-center gap-3 px-8 py-5 shadow-squareIndex bg-[#FF8399] text-black hover:scale-105 hover: transition-scale ease-in duration-200"
                imgClassName=" w-8"
                text="Empieza ya"
                to={"/login"}
              />
            )}
          </div>
          <img
            src={downArrow}
            alt=""
            className="hidden 800:block hover:translate-y-8 transition-all ease-out duration-500 cursor-pointer w-8 absolute bottom-[-14rem] left-0"
          />
        </div>
      </div>
      <div className="1370:w-[60%] 800:w-[40%] flex h-full">
        <img
          src={people}
          alt=""
          className="hidden 1080:w-full 1370:w-[50%] h-full object-cover 800:block "
        />
        <div className="hidden w-[50%] h-full 1370:block">
          <img
            src={erntedankfest}
            alt=""
            className="w-full h-[50%] object-cover"
          />
          <div className=" bg-[#FF8399] w-full h-[50%] px-16 py-10 grid place-content-center">
            <p className="text-white text-[47px]">
              Practica tu idioma con personas alrededor del mundo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndexCard() {
  const cardsData = [
    {
      imgSrc: "/assets/Male.png",
      description:
        "Rob: Salut! Je parle anglais, mais j'aimerais pratiquer mon allemand. Peux-tu me donner quelques conseils pour améliorer ma prononciation en allemand ?",
    },
    {
      imgSrc: "/assets/Male(1).png",
      description:
        "Mark: Ciao! Vorrei esercitarmi con il mio tedesco. Possiamo parlare di cucina tedesca? Ho sentito dire che i piatti tradizionali sono deliziosi!",
    },
    {
      imgSrc: "/assets/Male(2).png",
      description:
        "Joel: ¡Hola! Quiero practicar mi alemán. ¿Podemos hablar sobre deportes en Alemania? Me interesa saber qué deportes son populares allí.",
    },
    {
      imgSrc: "/assets/Female.png",
      description:
        "Nat: Olá! Falo inglês, mas quero praticar meu alemão. Poderíamos conversar sobre pontos turísticos na Alemanha? Tenho planos de visitar o país em breve.",
    },
    {
      imgSrc: "/assets/Female(1).png",
      description:
        "Ana: Hallo! Ik spreek Engels, maar ik wil graag mijn Duits oefenen. Kunnen we praten over Duitse muziek? Ik ben benieuwd naar welke artiesten populair zijn.",
    },
    {
      imgSrc: "/assets/Female(2).png",
      description:
        "kiyoko: こんにちは！英語は話せますが、ドイツ語の練習をしたいです。ドイツの伝統文化について話しませんか？お祭りや行事など興味があります。",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Element className="flex flex-col items-center">
        <Flip top delay={500}>
          <img className="w-44 mt-24" src="../assets/learnen.svg" alt="" />
          <p className="p-6 text-xl text-center">
            Un sitio donde puedes aprender cualquier idioma con la comunidad
          </p>
        </Flip>
      </Element>

      <div className="flex items-center justify-center">
        <div className="overflow-x-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-4">
            {cardsData.map((card, index) => (
              <Element
                key={index}
                className="flex justify-center overflow-hidden"
                name={`card-${index}`}
              >
                <Flip left delay={index * 200}>
                  <div className="relative w-full">
                    <img
                      src={card.imgSrc}
                      alt=""
                      className="w-full hover:scale-125 ease-in duration-300"
                    />
                    <p className="absolute bottom-4 left-0 m-2 text-white text-xl">
                      {card.description}
                    </p>
                  </div>
                </Flip>
              </Element>
            ))}
          </div>
        </div>
      </div>

      <Element className="flex items-center justify-center mt-8">
        <Fade bottom delay={500}>
          <Link to="/community">
            <button className="flex items-center justify-center shadow-circle border-2 border-black bg-gray-300 gap-6 h-8 py-7 px-12 text-xl hover:scale-105 hover: transition-scale ease-in duration-200">
              Únete a la comunidad
            </button>
          </Link>
        </Fade>
      </Element>
    </div>
  );
}

export function IndexSteps() {
  const dataCards = [
    {
      img: "/assets/paso1.png",
      h1: "1. Únete a la comunidad",
      p: (
        <p className="text-2xl text-center">
          Crea una cuenta e inicia <br /> sesión, así podrás <br /> acceder a
          todas nuestras <br />
          funcionalidades.
        </p>
      ),
      props: "",
    },
    {
      img: "/assets/paso2.png",
      h1: "2. Encuentra amigos",
      p: (
        <p className="text-2xl text-center">
          Puedes encontrar <br /> personas fácilmente que <br /> practican tu
          idioma <br /> y comparten tus interéses.
        </p>
      ),
      props: "",
    },
    {
      img: "/assets/paso3-prueba.jpeg",
      h1: "3. ¡Interactúa!",
      p: (
        <p className="text-2xl text-center">
          Puedes compartir <br /> publicaciones con la <br /> comunidad y
          chatear con <br /> personas.
        </p>
      ),
      props: "",
    },
  ];

  return (
    <>
      <hr className="mt-14" />
      <div className="flex flex-row justify-center mt-10 text-[1.8rem] font-extrabold">
        <p className="text-center">
          ¿Cómo funciona?
          <span className="text-indigo-600" translate="no">
            {" "}
            Learnen
          </span>
        </p>
      </div>

      <div className="flex flex-col mt-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-32 gap-y-8">
          {dataCards.map((card, index) => (
            <Element
              key={index}
              className="flex flex-col items-center mb-8"
              name={`card-${index}`}
            >
              <Fade bottom delay={index * 300}>
                <img className="w-3/5 mb-4 md:w-3/5" src={card.img} alt="" />
                <div className="flex flex-col items-center">
                  <h1 className="mb-4 font-bold text-[1.5rem]">{card.h1}</h1>
                  {card.p}
                </div>
              </Fade>
            </Element>
          ))}
        </div>
      </div>
    </>
  );
}

export function IndexBlog() {
  const dataCards = [
    {
      url: "/blog/article/info/card-1",
      language: "Sobre idiomas",
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
  ];

  return (
    <>
      <div className="bg-gray-100 pb-14">
        <p className="font-bold text-4xl pt-24 text-center md:text-center">
          De nuestro <span className="text-indigo-600"> Blog</span>
        </p>
        <div className="flex flex-row flex-wrap justify-center mt-20">
          {dataCards.map((card, index) => (
            <Link to={card.url} key={index}>
              <Element
                className="mb-8 w-96 mx-4 hover:scale-95 ease-in duration-300"
                name={`card-${index}`}
              >
                <Fade bottom delay={index * 300}>
                  <div className="relative">
                    <img
                      src={card.img}
                      className="w-full h-56 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="bg-white p-10 relative">
                    <h6 className="text-blue-400 text-sm">{card.language}</h6>
                    <h2 className="mt-4 font-bold text-[1.3rem]">
                      {card.title}
                    </h2>
                    <h4 className="mt-4 text-base">{card.p}</h4>
                    <hr className="mt-12" />
                    <p className="text-sm absolute bottom-2 right-10">
                      <span className="text-indigo-600" translate="no">
                        {" "}
                        Learnen
                      </span>
                    </p>
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

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assets/slider1.png",
      quote: (
        <p>
          <span translate="no">"Learnen</span> me ha permitido abrir mi brecha
          laboral, gracias a su formato de aprendizaje."
        </p>
      ),
      author: "Beatriz Rivera",
    },
    {
      id: 2,
      image: "/assets/leandro.png",
      quote: (
        <p>
          "El contexto educativo de <span translate="no">Learnen</span> me
          parece fascinante, aprendo y me divierto."
        </p>
      ),
      author: "Rodrigo Pineda",
    },
    {
      id: 3,
      image: "/assets/Group3.png",
      quote: (
        <p>
          "Me volví más sociable y conseguí amigos gracias a{" "}
          <span translate="no">Learnen</span>"
        </p>
      ),
      author: "Daniela Milla",
    },
  ];

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(newIndex);
  };

  // Configura un intervalo para cambiar de diapositiva cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, [activeIndex]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center pb-8 pt-4 md:pb-12 md:pt-8">
      <Element className="max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center bg-gray-100 mt-4 md:mt-8 transform rotate-[2deg]">
          <motion.div
            className="flex flex-col md:flex-row items-center mt-4 md:mt-8 transform rotate-[2deg]"
            key={slides[activeIndex].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-32 md:w-40 h-32 md:h-40">
              <div className="bg-gray-100 p-2 md:p-4 transform -skew-x-6">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={slides[activeIndex].image}
                  alt="Imagen"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex-shrink-0">
              <div className="p-4 md:p-8">
                <p className="font-bold text-xl mt-2 md:mt-4">
                  {slides[activeIndex].quote}
                </p>
                <p className="text-lg mt-2 md:mt-4">
                  {slides[activeIndex].author}
                </p>
              </div>
              <div className="flex justify-center space-x-2 mt-4 pb-8">
                {slides.map((slide, index) => (
                  <span
                    key={slide.id}
                    className={`w-3 h-3 rounded-full bg-gray-500 ${
                      activeIndex === index && "bg-blue-500"
                    }`}
                    onClick={() => handleSlideChange(index)}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Element>
    </div>
  );
}

export function Home() {
  return (
    <>
      <div className="font-Poppins">
        <IndexStart />
        <IndexCard />
        <IndexSteps />
        <IndexBlog />
        <Slider />
      </div>
    </>
  );
}
