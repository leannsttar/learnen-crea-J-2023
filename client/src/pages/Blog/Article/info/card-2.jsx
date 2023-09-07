import React from "react";
import {Link} from "react-router-dom";
import { Fade, Slide } from "react-reveal";

export function ArticleCopi_2() {
  const dataCards = [
    {
        url:"/blog/article/info/card-1",
      language: "Sobre idiomas",
      title: "El políglota más famoso:",
      p: "Ziad Fazah es un libanés que ostenta el récord Guinness por hablar 59 idiomas. Su capacidad lingüística excepcional lo ha llevado a ser un maestro del lenguaje y a brindar conferencias sobre la importancia de la comunicación intercultural.",
      img: "/assets/p-card1.jpg",
    },
    {
        url:"/blog/article/info/card-3",
      language: "Sobre idiomas",
      title: "El idioma más hablado:",
      p: "El chino mandarín es el idioma con más hablantes nativos en el mundo, superando los mil millones. Su compleja estructura y los tonos tonales hacen que sea un desafío intrigante para los estudiantes.",
      img: "/assets/p-card3.jpg",
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
            Palabras intraducibles
          </p>
        </div>

        <div className="grid grid-cols-[1fr_500px] lgv:grid-cols-1 h-max overflow-hidden pt-24 p-12 ">
          <div className="border-r lgv:border-none border-gray-300 p-8 ">
            <p className="mb-6">
              En diferentes idiomas y culturas, existen palabras que encapsulan
              emociones y conceptos tan únicos y profundos que resulta difícil,
              si no imposible, traducirlas directamente a otros idiomas. Estas
              "palabras intraducibles" revelan matices emocionales y
              experiencias humanas que pueden ser difíciles de expresar en una
              sola palabra en otro idioma. Estas palabras a menudo ofrecen una
              visión profunda de las perspectivas culturales y la psicología
              humana en diferentes partes del mundo.
              <br />
              <br />
              Un ejemplo destacado de una palabra intraducible es "saudade" en
              portugués. Esta palabra evoca un sentimiento profundo de
              nostalgia, añoranza y melancolía por algo que ya no está presente.
              Captura la sensación de echar de menos a alguien o algo querido,
              pero con un matiz de belleza en la tristeza. "Saudade" es una
              ventana a la rica tradición literaria y emocional de Portugal y
              Brasil, y ofrece una mirada única a cómo estas culturas
              experimentan la tristeza y la pérdida.
            </p>
            <h3 className="mt-24 font-bold">Otro ejemplo</h3>
            <p className="mt-2 mb-6">
              "Hygge" en danés. Esta palabra se refiere a una sensación de
              calidez, comodidad y bienestar que se obtiene al disfrutar de
              momentos simples de la vida, como estar en casa con seres
              queridos, encender velas y disfrutar de una taza de té caliente.
              "Hygge" refleja la importancia de la conexión emocional y la
              apreciación de los momentos tranquilos en la cultura danesa.
            </p>
            <h3 className="mt-24 font-bold">Estas palabras intraducibles </h3>
            <p className="mt-2 mb-6">
              Son ejemplos de cómo los idiomas pueden reflejar y dar forma a las
              experiencias humanas en diferentes culturas. Al explorar estas
              palabras, los estudiantes de idiomas y los entusiastas de la
              cultura pueden obtener una comprensión más profunda de cómo las
              emociones y los conceptos se entrelazan con el lenguaje y la
              identidad cultural. A través de las palabras intraducibles,
              podemos apreciar la diversidad y riqueza de las expresiones
              humanas en todo el mundo y reconocer que a veces las palabras en
              un idioma no pueden capturar por completo la profundidad de las
              experiencias emocionales en otros.
            </p>
            <h3 className="mt-24 font-bold">Pero tambien</h3>
            <p className="mt-2 mb-6">
              La exploración de estas palabras intraducibles puede fomentar la
              empatía cultural y el entendimiento, y ofrecer una perspectiva
              única sobre cómo diferentes culturas abordan y expresan emociones
              y conceptos universales. Al estudiar estas palabras, podemos
              abrazar la diversidad de las experiencias humanas y apreciar cómo
              los idiomas actúan como ventanas a las almas de las culturas en
              todo el mundo.
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
                      <span className="text-indigo-600" translate="no"> Learnen</span>                      </p>
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
