import { React, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSession } from "./useSession.js";
import { LuSettings } from "react-icons/lu";

import { ButtonHeader } from "./ButtonHeader.jsx";

import Notification from "../../assets/notification.svg";
import HeaderPhoto from "../../assets/NacePhoto.jpg";

//mierdas de animacion
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export function MobileNav() {
  const { usuario, logout } = useSession();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return usuario ? true : false;
  });

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="lg:hidden flex sticky">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full fixed top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 font-semi bold text-3xl">
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/">Inicio</Link>
          </li>
          {isLoggedIn ? (
            <li onClick={() => setOpenMenu(false)}>
              <Link to="/feed">Publicaciones</Link>
            </li>
          ) : (
            ""
          )}
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/community">Comunidad</Link>
          </li>
          {isLoggedIn ? (
            <li onClick={() => setOpenMenu(false)}>
              <Link to="/chat">Chat</Link>
            </li>
          ) : (
            ""
          )}
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/blog">Blog</Link>
          </li>
          {isLoggedIn ? (
            <div className="flex gap-x-4">
              <Link to={'/settings'} onClick={() => setOpenMenu(false)}>
                
                <LuSettings size={50} />
              </Link>
              <Link to={"/profile/" + usuario.id} onClick={() => setOpenMenu(false)}>
                <img
                  src={`http://localhost:5000${usuario.imagen_perfil}`}
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <ButtonHeader
                className="flex gap-3 px-5 py-2.5 lgv:px-2 lgv:py-1 lgv:text-xl shadow-square border border-black bg-white items-center"
                imgClassName="h-[30px] lgv:h-[20px]"
                to="/login"
                text="Iniciar sesión"
              />
              <ButtonHeader
                className="flex gap-3 px-6 py-2.5 lgv:px-2 lgv:py-1 lgv:text-xl shadow-square border border-white bg-black text-white flex-row-reverse items-center"
                imgClassName="invert h-[30px] lgv:h-[20px]"
                to="/signup"
                text="Registrarse"
              />
            </div>
          )}
        </ul>
      </motion.div>
    </nav>
  );
}

// export function MobileNavLoggedIn() {
//   const [openMenu, setOpenMenu] = useState(false);
//   return (
//     <nav className="lg:hidden flex">
//       <div
//         onClick={() => setOpenMenu(true)}
//         className="text-3xl cursor-pointer"
//       >
//         <CgMenuRight />
//       </div>
//       <motion.div
//         variants={menuVariants}
//         initial="hidden"
//         animate={openMenu ? "show" : ""}
//         className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
//       >
//         <div
//           onClick={() => setOpenMenu(false)}
//           className="text-4xl absolute z-30 left-4 top-14 cursor-pointer"
//         >
//           <IoMdClose />
//         </div>
//         <ul className="h-full flex flex-col justify-center items-center gap-y-8 font-semi bold text-3xl">
//           <li onClick={() => setOpenMenu(false)}>
//             <Link to="/">Home</Link>
//           </li>
//           <li onClick={() => setOpenMenu(false)}>
//             <Link to="/feed">Posts</Link>
//           </li>
//           <li onClick={() => setOpenMenu(false)}>
//             <Link to="/community">Community</Link>
//           </li>
//           <li onClick={() => setOpenMenu(false)}>
//             <Link to="/chat">Chat</Link>
//           </li>
//           <li onClick={() => setOpenMenu(false)}>
//             <Link to="/blog">Blog</Link>
//           </li>
//           <div className="flex gap-x-4">
//             <img src={Notification} alt="" />
//             <img src={HeaderPhoto} alt="" className="h-14 w-14" />
//           </div>
//         </ul>
//       </motion.div>
//     </nav>
//   );
// }
