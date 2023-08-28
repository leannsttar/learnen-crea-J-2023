import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_3() {
  const dataCards = [
    {
      url: "/blog/article/info/card-2",
      language: "Sobre idiomas",
      title: "Palabras intraducibles:",
      p: "Ziad Fazah es un libanés que ostenta el récord Guinness por hablar 59 idiomas. Su capacidad lingüística excepcional lo ha llevado a ser un maestro del lenguaje y a brindar conferencias sobre la importancia de la comunicación intercultural.",
      img: "/assets/p-card2.jpg",
    },
    {
      url: "/blog/article/info/card-4",
      language: "Sobre idiomas",
      title: "Orígenes del alfabeto: ",
      p: "El alfabeto que usamos en gran parte del mundo, incluyendo inglés y muchos otros idiomas, tiene sus raíces en el antiguo Sinaí, donde las antiguas inscripciones hebreas evolucionaron con el tiempo para dar lugar a lo que hoy conocemos como el alfabeto",
      img: "/assets/p-card4.jpg",
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
            El idioma más hablado
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] lgv:grid-cols-1 h-max overflow-hidden pt-24 p-12 ">
          <div className="border-r lgv:border-none border-gray-300 p-8 ">
            <p className="mb-6">
              El chino mandarín es el idioma con más hablantes nativos en el
              mundo, superando los mil millones. Su compleja estructura y los
              tonos tonales hacen que sea un desafío intrigante para los
              estudiantes.
              <br />
              <br />
              El chino mandarín es el idioma más hablado en el mundo, con más de
              mil millones de hablantes nativos y una presencia global que lo
              convierte en una de las lenguas más influyentes en la historia de
              la humanidad. Su importancia radica en su impacto en la cultura,
              la economía y la política de China y más allá.
            </p>
            <h3 className="mt-24 font-bold">
              Características principales del Chino Mandarín:
            </h3>
            <p className="mt-2 mb-6">
              Sistema de Tonalidad: Una característica distintiva del chino
              mandarín es su sistema de tonalidad. Utiliza cuatro tonos
              diferentes (tono alto, tono ascendente, tono
              descendente-ascendente y tono descendente) para cambiar el
              significado de una palabra. La misma secuencia de sonidos con
              diferentes tonos puede tener significados completamente
              diferentes. Este aspecto del chino puede presentar un desafío para
              los estudiantes extranjeros
            </p>
            <h3 className="mt-24 font-bold">Sistema de escritura: </h3>
            <p className="mt-2 mb-6">
              El chino mandarín se escribe en caracteres chinos, cada uno
              representando una sílaba o una palabra. A diferencia de los
              alfabetos, los caracteres chinos no se leen de izquierda a
              derecha, sino que se organizan en columnas verticales. Dominar la
              escritura y lectura de los caracteres chinos es una parte
              fundamental del aprendizaje del idioma.
            </p>
            <h3 className="mt-24 font-bold">En resumen:</h3>
            <p className="mt-2 mb-6">
              El chino mandarín es mucho más que un idioma; es un puente hacia
              una de las culturas más antiguas y ricas del mundo. A medida que
              China desempeña un papel cada vez más importante en la arena
              global, el conocimiento del chino mandarín se vuelve una habilidad
              valiosa para aquellos que buscan conectarse con una parte
              significativa del panorama cultural y económico actual.
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
                        <span className="text-indigo-600"> Learnen</span>                        </p>
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
