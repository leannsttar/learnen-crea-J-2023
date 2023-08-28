import React from "react";
import { SinglePost } from "./SinglePost";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { DataProfile } from "./DataProfile";
import { LanguagesProfile } from "./LanguagesProfile";
import { AboutProfile } from "./AboutProfile";
import { flags } from "../../data/languages";
import { useSession } from "../../components/Header/useSession";

export function LowerProfile({usuarioPerfil, setFollowersCount, followersCount, followingsCount}) {
  const postsImages = [
    {
      imgSrc: "/src/assets/Posts/post1.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post2.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post3.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post4.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post5.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post6.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post7.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post8.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post9.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post10.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post11.jpg",
    },
    {
      imgSrc: "/src/assets/Posts/post12.jpg",
    },
  ];

  const {usuario} = useSession()

  //Comento esto porque se me va a olvidar
  //Simulo un array de info del user. Meto el idioma y la bandera, las banderas estan en un js aparte
  const userLanguages = {
    motherLanguages: ["Alemán", flags.Aleman],
    fluentLanguages: [["Francés", flags.Frances]],
    learningLanguages: [
      ["Griego", flags.Griego],
      ["Francés", flags.Frances],
    ],
  };

  const getUserLanguages = async () => {
    try {
      const {languages} = await axios.get(

      )
    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <Element className=" flex justify-center mx-auto">
      <Fade bottom delay={300}>
        <div className=" mb-20 flex flex-col 800:flex-row-reverse gap-8 800:gap-4 1280:gap-20 1280:w-[80%] w-[95%]">

          <div className="800:w-[25%] 800:h-full flex flex-col w-full gap-5">
            <DataProfile posts={4} followers={followersCount} following={followingsCount} />

            {/* {Acá solo pues mando la info de ese userLanguages} */}
            <LanguagesProfile
            
              motherLanguages={usuarioPerfil.idioma_materno}
              fluentLanguages={usuarioPerfil.idiomas_fluidos}
              learningLanguages={usuarioPerfil.idiomas_aprendiendo}
            />

            <AboutProfile usuarioPerfil={usuarioPerfil}/>
          </div>
          <div className="grid grid-cols-3 auto-rows-min gap-1 relative w-full 800:w-[75%] h-auto">
            {postsImages.map((post, index) => (
              <Fade bottom delay={index * 300}>
                <img key={index} src={post.imgSrc} />
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </Element>
  );
}
