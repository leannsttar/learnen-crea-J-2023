import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_4() {
  const dataCards = [
    {
      url: "/blog/article/info/card-3",
      language: "Sobre idiomas",
      title: "El idioma más hablado:",
      p: "El chino mandarín es el idioma con más hablantes nativos en el mundo, superando los mil millones. Su compleja estructura y los tonos tonales hacen que sea un desafío intrigante para los estudiantes.",
      img: "/assets/p-card3.jpg",
    },
    {
      url: "/blog/article/info/card-5",
      language: "Sobre idiomas",
      title: "Aprender mientras duermes:",
      p: "Aunque la idea de aprender mientras duermes ha sido objeto de debate, algunos estudios sugieren que la exposición a un idioma durante el sueño puede ayudar a familiarizarse con los sonidos, aunque no con el significado.",
      img: "/assets/p-card5.jpg",
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
          <p className="absolute top-0 left-0 w-full h-[79%] flex items-center justify-center text-5xl text-white text-center">
            Orígenes del alfabeto
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] lgv:grid-cols-1 h-max overflow-hidden pt-24 p-12 ">
          <div className="border-r lgv:border-none border-gray-300 p-8 ">
            <p className="mb-6">
              El alfabeto que usamos en gran parte del mundo, incluyendo inglés
              y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí,
              donde las antiguas inscripciones hebreas evolucionaron con el
              tiempo para dar lugar a lo que hoy conocemos como el alfabeto.
              <br />
              <br />
              El alfabeto es una forma de escritura que se ha utilizado durante
              siglos para comunicar ideas, información y pensamientos. Su
              evolución a lo largo de la historia refleja el desarrollo de la
              comunicación humana y cómo hemos pasado de sistemas de escritura
              más complejos a formas más eficientes y accesibles.
            </p>
            <h3 className="mt-24 font-bold">Primeros sistemas de escritura:</h3>
            <p className="mt-2 mb-6">
              Los sistemas de escritura más antiguos solían ser pictográficos,
              en los que los símbolos representaban objetos físicos y conceptos.
              Ejemplos de estos sistemas incluyen las inscripciones en tablillas
              de arcilla de la antigua Mesopotamia, como el cuneiforme sumerio,
              y los jeroglíficos egipcios. Sin embargo, estos sistemas eran
              complicados y requerían aprender una gran cantidad de símbolos
              para representar todas las palabras y conceptos.
            </p>
            <h3 className="mt-24 font-bold">La invención del alfabeto:</h3>
            <p className="mt-2 mb-6">
              La idea detrás del alfabeto es asignar un símbolo a un sonido
              específico, en lugar de a un objeto o concepto. Esta innovación
              simplificó enormemente el proceso de escritura y permitió a las
              personas expresar sus pensamientos con mayor claridad y
              eficiencia.
              <br />
              <br/>
              Uno de los primeros alfabetos conocidos es el alfabeto fenicio,
              desarrollado en la región del Levante en el siglo XII a.C. Los
              fenicios, un antiguo pueblo marítimo, crearon un sistema en el que
              cada símbolo representaba un sonido consonántico. Este alfabeto
              fue adoptado y adaptado por varias culturas de la antigüedad,
              incluidos los griegos y los romanos.
            </p>
            <h3 className="mt-24 font-bold">En resumen:</h3>
            <p className="mt-2 mb-6">
              los orígenes del alfabeto nos llevan a través de una historia de
              innovación y evolución en la forma en que representamos el
              lenguaje escrito. Desde sistemas pictográficos hasta la creación
              de símbolos fonéticos, el alfabeto ha sido un motor clave en el
              desarrollo de la comunicación humana y la difusión del
              conocimiento a lo largo de los siglos.
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
                        <span className="text-indigo-600" translate="no"> Learnen</span>                        </p>
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
