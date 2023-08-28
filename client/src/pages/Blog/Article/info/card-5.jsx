import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_5() {
  const dataCards = [
    {
        url: "/blog/article/info/card-4",
        language: "Sobre idiomas",
        title: "Orígenes del alfabeto: ",
        p: "El alfabeto que usamos en gran parte del mundo, incluyendo inglés y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí, donde las antiguas inscripciones hebreas evolucionaron con el tiempo para dar lugar a lo que hoy conocemos como el alfabeto",
        img: "/assets/p-card4.jpg",
    },
    {
      url: "/blog/article/info/card-6",
      language: "Sobre idiomas",
      title: "Idioma de signos universal",
      p: "El International Sign es una forma de comunicación gestual utilizada en eventos internacionales para superar las barreras lingüísticas entre personas sordas de diferentes países. Aunque no es un idioma en sí mismo, permite una comunicación básica.",
      img: "/assets/p-card6.jpg",
    },
  ];

  return (
    <>
      <div className="font-Poppins">
        <div className="flex flex-row justify-center relative">
          <img
            className="w-[100%] h-[500px] object-cover"
            src="/assets/fondo_articles1.jpg"
            alt=""
          />
          <p className="absolute top-0 left-0 w-full h-[79%] flex items-center justify-center text-5xl text-white">
            Aprender mientras duermes:
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] lgv:grid-cols-1 h-max  overflow-hidden pt-24 p-12 ">
          <div className="border-r lgv:border-none border-gray-300 p-8 ">
            <p className="mt-6 mb-6">
              Aunque la idea de aprender mientras duermes ha sido objeto de
              debate, algunos estudios sugieren que la exposición a un idioma
              durante el sueño puede ayudar a familiarizarse con los sonidos,
              aunque no con el significado.
              <br />
              <br />
              El concepto de aprender mientras duermes, también conocido como
              "aprendizaje subliminal" o "aprendizaje pasivo", ha sido objeto de
              interés y debate durante décadas. La idea detrás de esta teoría es
              que la exposición a información o material de estudio mientras
              estamos dormidos podría llevar a la adquisición de conocimientos y
              habilidades de manera más efectiva que durante la vigilia. Sin
              embargo, este concepto es objeto de controversia y los resultados
              en la investigación son mixtos.
            </p>
            <h3 className="mt-24 font-bold">
              El mito del aprendizaje activo durante el sueño:
            </h3>
            <p className="mt-2 mb-6">
              Aunque la idea de aprender mientras duermes puede parecer
              atractiva, la evidencia científica que respalda su efectividad es
              limitada y a menudo contradictoria. Si bien es cierto que el
              cerebro sigue procesando información durante el sueño, no se ha
              demostrado de manera concluyente que sea posible adquirir nuevos
              conocimientos o habilidades complejas mientras se duerme.
            </p>
            <h3 className="mt-24 font-bold">
              La importancia del aprendizaje activo:
            </h3>
            <p className="mt-2 mb-6">
              A pesar de la idea de aprender mientras duermes, el consenso
              general entre los expertos en educación y psicología es que el
              aprendizaje más efectivo ocurre a través del compromiso activo y
              consciente durante la vigilia. El proceso de comprensión, práctica
              y aplicación del conocimiento es fundamental para una adquisición
              significativa y duradera de habilidades y conceptos.
            </p>
            <h3 className="mt-24 font-bold">En resumen:</h3>
            <p className="mt-2 mb-6">
              Aunque el concepto de aprender mientras duermes ha capturado la
              imaginación de muchas personas, la evidencia científica no
              respalda de manera concluyente la efectividad de este enfoque. El
              sueño es valioso para la consolidación de la memoria, pero el
              aprendizaje activo y consciente durante la vigilia sigue siendo la
              forma más confiable y eficaz de adquirir nuevas habilidades y
              conocimientos. En lugar de depender del mito del aprendizaje
              pasivo durante el sueño, los enfoques tradicionales de estudio,
              práctica y compromiso intelectual continúan siendo los métodos más
              sólidos para el crecimiento académico y personal.
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
                    <div className="mb-8 w-96 mx-4">
                      <div className="">
                        <img src={card.img} className="w-full" alt="" />
                      </div>
                      <div className="bg-gray-100 p-10 relative">
                        <h6 className="text-blue-400 text-sm">
                          {card.language}
                        </h6>
                        <h2 className="mt-4 font-bold text-[1.3rem]">
                          {card.title}
                        </h2>
                        <h4 className="mt-4 text-base">{card.p}</h4>
                        <hr className="mt-12" />
                        <p className="text-sm absolute bottom-2 right-10">
                        <span className="text-indigo-600"> Learnen</span> </p>
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
