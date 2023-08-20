import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoMobile from "/src/assets/logo_right_text.svg";
import LogoDesktop from "/src/assets/logo_right_text_desktop.svg";
import { ButtonHeader } from "./ButtonHeader";
import { MobileNav } from "./MobileNav.jsx";
import { useSession } from "./useSession";
import Notification from "../../assets/notification.svg";
import HeaderPhoto from "../../assets/NacePhoto.jpg";
import settingsIcon from "../../assets/settingsIcon.svg";
import logoutIcon from "../../assets/logoutIcon.svg";
import {BiUserCircle, BiChat} from 'react-icons/bi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLogout } from 'react-icons/ai'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function NotificationsMenu() {
  return (
    <Menu>
      <MenuHandler>
        <img src={Notification} alt="" className="w-8 h-8" />
      </MenuHandler>
      <MenuList className="flex flex-col gap-2 z-[1000]">
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2 hover:bg-[#ececec]">
          <Avatar
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">Tania</span> send
              you a message
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />
              13 minutes ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">Natali</span>{" "}
              reply to your email
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />a hour ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="paypal"
            src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">PayPal</span>{" "}
              you&apos;ve received a payment.
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />5 hours ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="paypal"
            src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">PayPal</span>{" "}
              you&apos;ve received a payment.
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />5 hours ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="paypal"
            src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">PayPal</span>{" "}
              you&apos;ve received a payment.
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />5 hours ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="paypal"
            src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              <span className="font-medium text-blue-gray-900">PayPal</span>{" "}
              you&apos;ve received a payment.
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs text-gray-600"
            >
              <ClockIcon />5 hours ago
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function ProfileMenu() {
  const { usuario, logout } = useSession();

  return (
    <Menu placement="bottom-start" className="" allowHover>
      <MenuHandler>
        <Avatar
          alt={usuario.nombre}
          className="cursor-pointer rounded-full w-[4rem] h-[4rem]"
          src={`http://localhost:5000${usuario.imagen_perfil}`}
        />
      </MenuHandler>
      <MenuList className="z-[1000000] absolute right-[1] flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
        <Link to={"/profile"} className="outline-none">
          <MenuItem className="flex items-center gap-3 hover:bg-[#ececec] pt-2">
            <BiUserCircle size={20}/>
            <Typography
              variant="small"
              className="font-normal block font-sans text-sm leading-normal text-inherit antialiased"
            >
              Ver mi perfil
            </Typography>
          </MenuItem>
        </Link>
        <Link to={"/settings"} className="outline-none">
          <MenuItem className="flex items-center gap-3 hover:bg-[#ececec] pt-2">
            <LuSettings size={20} />
            <Typography variant="small" className="font-normal">
              Configuración
            </Typography>
          </MenuItem>
        </Link>
        <Link to={'/chat'} className="outline-none">
          <MenuItem className="flex items-center gap-3 hover:bg-[#ececec] pt-2">
            <BiChat size={20} />
            <Typography variant="small" className="font-normal">
              Chat
            </Typography>
          </MenuItem>
        </Link>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem onClick={logout} className="flex items-center gap-2 hover:bg-[#ececec] pt-2">
          <AiOutlineLogout size={20} color="rgb(239 68 68)"/>
          <Typography variant="small" className="font-normal text-red-500">
            Cerrar sesión
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

const items = [
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: "",
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
];

const linksClass = {
  nonactive:
    "hover:border-b-4 border-[#FFEC45] font-medium transition-border ease-in-out duration-100",
  active: "border-b-4 border-[#FFEC45] font-medium",
  nonactiveRed:
    "text-[#FF8399] hover:border-b-4 border-[#FFEC45] font-medium transition-border ease-in-out duration-100",
};

export function Header() {
  const { usuario } = useSession();

  const [current, setCurrent] = useState("mail");

  const onHover = (e) => {
    console.log("hover ", e);
    setCurrent(e.key);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return usuario ? true : false;
  });

  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
                    activeLink === "/"
                      ? linksClass.active
                      : linksClass.nonactive
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
                <NotificationsMenu />
                {/* <Link
                  to={"/notifications"}
                  className="rounded-full hover:bg-[#e6e6e6] p-1"
                >
                  <img src={Notification} alt="" className="w-8 h-8 " />
                </Link> */}
                <p className="font-medium">
                  {usuario.nombre} {usuario.apellido}{" "}
                </p>

                {/* <img
                    src={`http://localhost:5000${usuario.imagen_perfil}`}
                    alt=""
                    className="w-16 h-16 object-cover"
                    style={{
                      clipPath: "circle(50% at 50% 50%)",
                    }}
                  /> */}
                <ProfileMenu />
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
