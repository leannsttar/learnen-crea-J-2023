import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_6() {
  const dataCards = [
    {
      url: "/blog/article/info/card-5",
      language: "Sobre Idiomas",
      title: "Aprender mientras duermes:",
      p: "Aunque la idea de aprender mientras duermes ha sido objeto de debate, algunos estudios sugieren que la exposición a un idioma durante el sueño puede ayudar a familiarizarse con los sonidos, aunque no con el significado.",
      img: "/assets/blog-image.png",
    },
    {
      url: "/blog/article/info/card-1",
      language: "Sobre Idiomas",
      title: "El políglota más famoso:",
      p: "Ziad Fazah es un libanés que ostenta el récord Guinness por hablar 59 idiomas. Su capacidad lingüística excepcional lo ha llevado a ser un maestro del lenguaje y a brindar conferencias sobre la importancia de la comunicación intercultural.",
      img: "/assets/blog-image.png",
    },
  ];

  return (
    <>
      <div className="font-Poppins">
        <div className="flex flex-row justify-center relative">
          <img
            className="w-[100%] h-[450px]"
            src="/../../src/assets/fondo_articulo.png"
            alt=""
          />
          <p className="absolute top-0 left-0 w-full h-[79%] flex items-center justify-center text-5xl text-white">
            Idioma de signos universal:
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] h-max  overflow-hidden pt-24 p-12 ">
          <div className="border-r border-gray-300 p-8 ">
            <p className="mt-6 mb-6">
              La Lengua de Signos Internacional (IS) es un sistema de
              comunicación gestual que se desarrolló para facilitar la
              comunicación entre personas sordas de diferentes países y que
              hablan diferentes lenguas de signos nacionales. Aunque no es un
              idioma completo, sino más bien un pidgin o creole de señas, el IS
              es utilizado en eventos internacionales, como conferencias y
              encuentros deportivos, para permitir la interacción entre personas
              sordas que no comparten una lengua de signos común.
              <br />
              <br />
              El IS toma prestados elementos de varias lenguas de signos
              nacionales y busca simplificar y estandarizar los gestos para que
              puedan ser comprendidos por una audiencia diversa. Sin embargo, es
              importante destacar que el IS puede no ser igualmente comprensible
              para todos los usuarios de diferentes lenguas de signos nacionales
              debido a las variaciones en la gramática y el léxico de esas
              lenguas.
            </p>
            <h3 className="mt-24 font-bold">Lenguas de Signos Nacionales:</h3>
            <p className="mt-2 mb-6">
              Cada país o comunidad tiene su propia lengua de signos nacional,
              que es una forma completa y rica de comunicación visual y gestual.
              Las lenguas de signos nacionales son lenguajes completamente
              funcionales con gramática y vocabulario propios, y son utilizados
              por las comunidades sordas en todo el mundo para comunicarse.
              Algunas lenguas de signos nacionales son reconocidas oficialmente
              y cuentan con diccionarios y recursos lingüísticos.
            </p>
            <h3 className="mt-24 font-bold">Es importante</h3>
            <p className="mt-2 mb-6">
              Destacar que el reconocimiento y el respeto por las lenguas de
              signos nacionales son fundamentales para garantizar una
              comunicación efectiva y auténtica con las personas sordas.
              Aprender la lengua de signos nacional de una comunidad específica
              es esencial para interactuar de manera significativa y respetuosa.
            </p>
            <h3 className="mt-24 font-bold">
              El Futuro de la Comunicación Gestual:
            </h3>
            <p className="mt-2 mb-6">
              A medida que la conciencia sobre la importancia de las lenguas de
              signos y la accesibilidad para las personas sordas sigue
              creciendo, es posible que en el futuro haya más esfuerzos para
              desarrollar un sistema de comunicación gestual más unificado y
              comprensible a nivel internacional. Sin embargo, hasta el momento
              de mi última actualización, la Lengua de Signos Internacional
              sigue siendo el enfoque principal para la comunicación entre
              personas sordas de diferentes lenguas de signos nacionales en
              contextos internacionales.
            </p>
          </div>
          <div className="">
            <div className=" flex justify-center ">
              <h1 className="text-2xl -mb-16 my-12 font-semibold text-center">
                Articulos <br />
                Recomendados
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
                          2 días
                        </p>
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
