import React from "react";
import {Link} from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_1() {
  const dataCards = [
    {
      url:"/blog/article/info/card-2",
      language: "Sobre idiomas",
      title: "Palabras intraducibles:",
      p: "Algunos idiomas contienen términos que no pueden traducirse directamente a otros idiomas debido a su singularidad cultural. Por ejemplo, en portugués describe una sensación de profunda nostalgia y añoranza.",
      img: "/assets/p-card2.jpg",
    },
    {
      url:"/blog/article/info/card-3",
      language: "Sobre idiomas",
      title: "Orígenes del alfabeto:",
      p: "El alfabeto que usamos en gran parte del mundo, incluyendo inglés y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí, donde las antiguas inscripciones hebreas evolucionaron con el tiempo para dar lugar a lo que hoy conocemos como el alfabeto",
      img: "/assets/p-card3.jpg",
    },
  ];

  return (
    <>
      <div className="font-Poppins">
        <div className="flex flex-row justify-center relative">
          <img
            className="w-[100%] h-[500px] object-cover filter  blur-none "
            src="/assets/fondo_articles1.jpg"
            alt=""
          />
          <p className="absolute top-0 left-0 w-full h-[79%] flex items-center justify-center text-5xl text-white text-center">
            El políglota más famoso
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] lgv:grid-cols-1 h-max overflow-hidden pt-24 p-12 ">
          <div className="border-r lgv:border-none lgv:border-b border-gray-300 p-8 ">
            <p className="mb-6">
              Ziad Fazah es un nombre ampliamente reconocido en el mundo de los
              políglotas y el aprendizaje de idiomas. Nacido en Liberia en 1954
              y criado en Líbano, Ziad es conocido por su habilidad excepcional
              para hablar y entender una asombrosa cantidad de idiomas, lo que
              le ha valido un lugar en el Libro Guinness de los Récords como el
              políglota más talentoso.
              <br />
              <br />A lo largo de su vida, Ziad Fazah ha demostrado ser capaz de
              comunicarse con fluidez en más de 60 idiomas, incluyendo algunos
              de los más comunes, como inglés, francés, español y alemán, así
              como una amplia gama de idiomas menos conocidos y dialectos
              regionales. Sus habilidades lingüísticas sobresalientes lo han
              llevado a ser un orador destacado y un maestro en el arte del
              aprendizaje de idiomas.
            </p>
            <h3 className="mt-24 font-bold">A que dedico su vida</h3>
            <p className="mt-2 mb-6">
              Ziad ha dedicado gran parte de su tiempo a compartir su pasión por
              los idiomas con otros. Ha ofrecido conferencias y talleres sobre
              la importancia de la comunicación intercultural y el aprendizaje
              de idiomas. A través de su trabajo, Ziad inspira a otros a
              explorar nuevas lenguas y culturas, fomentando una comprensión más
              profunda entre las personas de diferentes partes del mundo.
            </p>
            <h3 className="mt-24 font-bold">Cuales son sus logros</h3>
            <p className="mt-2 mb-6">
              Además de sus logros en el ámbito del lenguaje, Ziad Fazah también
              es un defensor del entendimiento global y la diversidad cultural.
              Su capacidad para conectarse con personas de diferentes orígenes
              lingüísticos y su habilidad para cambiar rápidamente entre idiomas
              lo convierten en un embajador de la interacción multicultural.
            </p>
            <h3 className="mt-24 font-bold">Pero tambien</h3>
            <p className="mt-2 mb-6">
              Ziad Fazah ha demostrado repetidamente su capacidad para
              hablar múltiples idiomas, también reconoce que cada idioma
              requiere un compromiso constante para mantener la fluidez y la
              precisión. Su historia demuestra que el amor por el aprendizaje y
              la dedicación continua pueden abrir puertas a nuevas experiencias
              y conexiones en todo el mundo.
            </p>
          </div>
          <div className="">
            <div className=" flex justify-center ">
              <h1 className="text-2xl -mb-16 my-12 font-semibold text-center">
                Articulos <br />
                recomendados
              </h1>
            </div>
            <div className=" pb-14">
              <div className="flex flex-row flex-wrap justify-center mt-20">
                {dataCards.map((card, index) => (
                  <Link to={card.url} key={index}>
                  <div  className="mb-8 w-96 mx-4">
                    <div className="">
                      <img src={card.img} className="w-full" alt="" />
                    </div>
                    <div className="bg-gray-100 p-10 relative">
                      <h6 className="text-blue-400 text-sm">{card.language}</h6>
                      <h2 className="mt-4 font-bold text-[1.3rem]">
                        {card.title}
                      </h2>
                      <h4 className="mt-4 text-base">{card.p}</h4>
                      <hr className="mt-12" />
                      <p className="text-sm absolute bottom-2 right-10">
                      <span className="text-indigo-600"> Learnen</span>                      </p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
