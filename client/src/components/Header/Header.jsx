import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll} from "framer-motion";
import LogoMobile from "/src/assets/logo_right_text.svg";
import LogoDesktop from "/src/assets/logo_right_text_desktop.svg";

import { ButtonHeader } from "./ButtonHeader";
import { MobileNav } from "./MobileNav.jsx";

import Notification from "../../assets/notification.svg";
import HeaderPhoto from "../../assets/NacePhoto.jpg";

const linksClass = {
  nonactive:
    "hover:border-b-4 border-[#FFEC45] font-medium transition-border ease-in-out duration-100",
  active: "border-b-4 border-[#FFEC45] font-medium",
  nonactiveRed:
    "text-[#FF8399] hover:border-b-4 border-[#FFEC45] font-medium transition-border ease-in-out duration-100",
};

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  const { scrollYProgress} = useScroll();

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="mb-[10.3vh]">
        <header
        className={
          activeLink === "/"
            ? "fixed bg-white border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-10 h-[10.3vh] flex items-center"
            : "fixed bg-white border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-10 h-[10.3vh] flex items-center"
        }
      >
        <div className="flex items-center lg:flex-row lg:items-center w-full justify-between bg-white">
          {/*logo*/}
          <Link to={"/"}>
            <img src={LogoDesktop} alt="" className="h-min w-[200px]" />
          </Link>
          <nav className="hidden lg:flex lg:gap-5 lg:translate-x-10">
            <div className="space-x-8">
              <Link
                to={"/"}
                className={
                  activeLink === "/" ? linksClass.active : linksClass.nonactive
                }
              >
                Home
              </Link>
              {isLoggedIn ? (
                <Link
                  to={"/feed"}
                  className={
                    activeLink === "/feed"
                      ? linksClass.active
                      : linksClass.nonactive
                  }
                >
                  Posts
                </Link>
              ) : (
                ""
              )}
              <Link
                to={"/community"}
                className={
                  activeLink === "/community"
                    ? linksClass.active
                    : linksClass.nonactive
                }
              >
                Comunidad
              </Link>
              {isLoggedIn ? (
                <Link
                  to={"/chat"}
                  className={
                    activeLink === "/chat"
                      ? linksClass.active
                      : linksClass.nonactive
                  }
                >
                  Chat
                </Link>
              ) : (
                ""
              )}
              <Link
                to={"/blog"}
                className={
                  activeLink === "/blog"
                    ? linksClass.active
                    : linksClass.nonactive
                }
              >
                Blog
              </Link>
            </div>
          </nav>
          
          {isLoggedIn ? (
            <div className="lg:flex lg:gap-5 lg:items-center hidden ">
              <Link to={"/notifications"} className="rounded-full hover:bg-[#e6e6e6] p-1">
                <img src={Notification} alt="" className="w-8 h-8 " />
              </Link>
              <p className="font-medium">Nacely Orellana</p>
              <Link to={"/profile"}>
                <img src={HeaderPhoto} alt="" className="w-16 h-16" />
              </Link>
            </div>
          ) : (
            <div className="lg:flex lg:gap-5 hidden">
              <ButtonHeader
                className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-white hover:scale-105 hover: transition-scale ease-in duration-200"
                to="/login"
                text="Iniciar sesión"
              />
              <ButtonHeader
                className="flex gap-3 px-6 py-2.5 shadow-square border border-white bg-black text-white flex-row-reverse hover:scale-105 hover: transition-scale ease-in duration-200"
                imgClassName="invert"
                to="/signup"
                text="Registrarse"
              />
            </div>
          )}

          <MobileNav isLogged={isLoggedIn} />
        </div>
        
      </header>
      </div>
    </>
    );
}

//   if (isSticky) {
//     return (
//       <header className="fixed bg-white border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-30 h-[100px] lg:h-[100px] flex items-center">
//         <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
//           {/*logo*/}
//           <Link to={"/"}>
//             <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
//           </Link>
//           <nav className="hidden lg:flex lg:gap-5 lg:translate-x-10">
//             <div className="space-x-8">
//               <Link
//                 to={"/"}
//                 className={
//                   activeLink === "/" ? linksClass.active : linksClass.nonactive
//                 }
//               >
//                 Home
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/feed"}
//                   className={
//                     activeLink === "/feed"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Posts
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/community"}
//                 className={
//                   activeLink === "/community"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Comunidad
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/chat"}
//                   className={
//                     activeLink === "/chat"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Chat
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/blog"}
//                 className={
//                   activeLink === "/blog"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Blog
//               </Link>
//             </div>
//           </nav>
//           {isLoggedIn ? (
//             <div className="lg:flex lg:gap-5 lg:items-center hidden ">
//               <Link to={"/notifications"}>
//                 <img src={Notification} alt="" className="w-8 h-8" />
//               </Link>
//               <p className="font-medium">Nacely Orellana</p>
//               <img src={HeaderPhoto} alt="" className="w-16 h-16" />
//             </div>
//           ) : (
//             <div className="lg:flex lg:gap-5 hidden">
//               <ButtonHeader
//                 className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-white hover:scale-105 hover: transition-scale ease-in duration-200"
//                 to="/login"
//                 text="Iniciar sesión"
//               />
//               <ButtonHeader
//                 className="flex gap-3 px-6 py-2.5 shadow-square border border-white bg-black text-white flex-row-reverse hover:scale-105 hover: transition-scale ease-in duration-200"
//                 imgClassName="invert"
//                 to="/signup"
//                 text="Registrarse"
//               />
//             </div>
//           )}

//           <MobileNav isLogged={isLoggedIn} />
//         </div>
//       </header>
//     );
//   } else if (!isSticky && activeLink === "/") {
//     return (
//       <header className="fixed bg-white w-2/3 px-[30px] lg:px-[40px] z-30 h-[100px] lg:h-[100px] flex items-center">
//         <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
//           {/*logo*/}
//           <Link to={"/"}>
//             <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
//           </Link>
//           <nav className="hidden lg:flex lg:gap-5 lg:translate-x-10">
//             <div className="space-x-8">
//               <Link
//                 to={"/"}
//                 className={
//                   activeLink === "/" ? linksClass.active : linksClass.nonactive
//                 }
//               >
//                 Home
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/feed"}
//                   className={
//                     activeLink === "/feed"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Posts
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/community"}
//                 className={
//                   activeLink === "/community"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Comunidad
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/chat"}
//                   className={
//                     activeLink === "/chat"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Chat
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/blog"}
//                 className={
//                   activeLink === "/blog"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Blog
//               </Link>
//             </div>
//             {isLoggedIn ? (
//               <div className="lg:flex lg:gap-5 lg:items-center hidden ">
//                 {/* <Link to={"/notifications"}>
//                 <img src={Notification} alt="" className="w-8 h-8" />
//               </Link> */}
//                 <img src={HeaderPhoto} alt="" className="w-16 h-16" />
//               </div>
//             ) : (
//               <div className="lg:flex lg:gap-5 hidden">
//                 <Link to={"/login"} className={linksClass.nonactiveRed}>
//                   Iniciar sesión
//                 </Link>
//               </div>
//             )}
//           </nav>

//           <MobileNav isLogged={isLoggedIn} />
//         </div>
//       </header>
//     );
//   } else if (!isSticky) {
//     return (
//       <header className="fixed bg-white border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-30 h-[100px] lg:h-[100px] flex items-center">
//         <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
//           {/*logo*/}
//           <Link to={"/"}>
//             <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
//           </Link>
//           <nav className="hidden lg:flex lg:gap-5 lg:translate-x-10">
//             <div className="space-x-8">
//               <Link
//                 to={"/"}
//                 className={
//                   activeLink === "/" ? linksClass.active : linksClass.nonactive
//                 }
//               >
//                 Home
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/feed"}
//                   className={
//                     activeLink === "/feed"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Posts
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/community"}
//                 className={
//                   activeLink === "/community"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Comunidad
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   to={"/chat"}
//                   className={
//                     activeLink === "/chat"
//                       ? linksClass.active
//                       : linksClass.nonactive
//                   }
//                 >
//                   Chat
//                 </Link>
//               ) : (
//                 ""
//               )}
//               <Link
//                 to={"/blog"}
//                 className={
//                   activeLink === "/blog"
//                     ? linksClass.active
//                     : linksClass.nonactive
//                 }
//               >
//                 Blog
//               </Link>
//             </div>
//           </nav>
//           {isLoggedIn ? (
//             <div className="lg:flex lg:gap-5 lg:items-center hidden ">
//               <Link to={"/notifications"}>
//                 <img src={Notification} alt="" className="w-8 h-8" />
//               </Link>
//               <p className="font-medium">Nacely Orellana</p>
//               <img src={HeaderPhoto} alt="" className="w-16 h-16" />
//             </div>
//           ) : (
//             <div className="lg:flex lg:gap-5 hidden">
//               <ButtonHeader
//                 className="flex gap-3 px-5 py-2.5 shadow-square border border-black bg-white hover:scale-105 hover: transition-scale ease-in duration-200"
//                 to="/login"
//                 text="Iniciar sesión"
//               />
//               <ButtonHeader
//                 className="flex gap-3 px-6 py-2.5 shadow-square border border-white bg-black text-white flex-row-reverse hover:scale-105 hover: transition-scale ease-in duration-200"
//                 imgClassName="invert"
//                 to="/signup"
//                 text="Registrarse"
//               />
//             </div>
//           )}

//           <MobileNav isLogged={isLoggedIn} />
//         </div>
//       </header>
//     )
//   }
// }

// export function HeaderLoggedIn() {
//   const [activeLink, setActiveLink] = useState("");

//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   return (
//     <header className="border-b border-[#9B9B9B] w-full px-[30px] lg:px-[40px] z-30 h-[100px] lg:h-[100px] flex items-center">
//       <div className="flex items-center lg:flex-row lg:items-center w-full justify-between">
//         {/*logo*/}
//         <Link to={"/"}>
//           <img src={LogoDesktop} alt="" className="h-[200px] w-[200px]" />
//         </Link>
//         <nav className="hidden lg:flex lg:gap-5 ">
//           <div className="space-x-8">
//             <Link
//               to={"/"}
//               className={
//                 activeLink === "/" ? linksClass.active : linksClass.nonactive
//               }
//             >
//               Home
//             </Link>
//             <Link
//               to={"/feed"}
//               className={
//                 activeLink === "/feed"
//                   ? linksClass.active
//                   : linksClass.nonactive
//               }
//             >
//               Posts
//             </Link>
//             <Link
//               to={"/community"}
//               className={
//                 activeLink === "/community"
//                   ? linksClass.active
//                   : linksClass.nonactive
//               }
//             >
//               Comunidad
//             </Link>
//             <Link
//               to={"/chat"}
//               className={
//                 activeLink === "/chat"
//                   ? linksClass.active
//                   : linksClass.nonactive
//               }
//             >
//               Chat
//             </Link>
//             <Link
//               to={"/blog"}
//               className={
//                 activeLink === "/blog"
//                   ? linksClass.active
//                   : linksClass.nonactive
//               }
//             >
//               Blog
//             </Link>
//           </div>
//         </nav>
//         <div className="lg:flex lg:gap-5 lg:items-center hidden ">
//           <img src={Notification} alt="" className="w-8 h-8" />
//           <p className="font-medium">Nacely Orellana</p>
//           <img src={HeaderPhoto} alt="" className="w-16 h-16" />
//         </div>
//         <MobileNavLoggedIn />
//       </div>
//     </header>
//   );
// }
