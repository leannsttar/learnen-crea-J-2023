import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Error404 } from "./pages/404/404";
import { Home } from "./pages/Home/Index.jsx";
import { Community } from "./pages/Community/Community";
import { AllBlogContent } from "./pages/Blog/Blog";
import { Article } from "./pages/Blog/Article/Article";
import { Header } from "./components/Header/Header";
import { Feed } from "./pages/Feed/Feed.jsx";
import { Chat } from "./pages/Chat/Chat.jsx";
import { Footer } from "./components/Footer/Footer";
import { ScrollButton } from "./components/buttons/scrollbtn";
import { SignUp } from "./pages/Sign up/SignUp";
import { Login } from "./pages/Login/Login";
import { Notificaciones } from "./pages/Notificaciones/Notificaciones";
import { Profile } from "./pages/Profile/Profile";
import { Settings } from "./pages/Settings/Settings.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { Lenguajes } from "./pages/Dashboard/Lenguajes/Lenguajes";
import { Usuarios } from "./pages/Dashboard/Usuarios/Usuarios";
import { Administradores } from "./pages/Dashboard/Usuarios/Administradores";
import { Reportes } from "./pages/Dashboard/Reportes/Reportes";
import { AsideMenu } from "./pages/Dashboard/AsideMenu";
import { Fade } from "react-reveal";
import { SessionProvider } from "./components/Header/Session";
import Translate from "./components/Header/Translate";
import PrivateRoute from "./components/Header/privateRoutes";
import { ArticleCopi_1 } from "./pages/Blog/Article/info/card-1";
import { ArticleCopi_2 } from "./pages/Blog/Article/info/card-2";
import { ArticleCopi_3 } from "./pages/Blog/Article/info/card-3";
import { ArticleCopi_4 } from "./pages/Blog/Article/info/card-4";
import { ArticleCopi_5 } from "./pages/Blog/Article/info/card-5";
import { ArticleCopi_6 } from "./pages/Blog/Article/info/card-6";

const routes = [
  {
    path: "*",
    element: (
      <>
        <Header />
        <Fade>
          <Error404 />
        </Fade>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Home />
            <ScrollButton />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </>
    ),
  },
  {
    path: "community",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Community />
            <ScrollButton />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </>
    ),
  },
  {
    path: "feed",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Feed />
            <ScrollButton />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "chat",
    children: [
      {
        index: true,
        element: (
          <>
            <AnimatePresence wait>
              <Header />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
              >
                <Chat />
              </motion.div>
            </AnimatePresence>
          </>
        ),
      },
      {
        path: ":id",
        element: <>
          <Header />
          <Chat />

        </>
      }
    ]
  },
  {
    path: "blog",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <AllBlogContent />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  },
  {
    path: "blog/article",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <Article />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  },
  {
    path: "notifications",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <Notificaciones />
          <Footer />
        </motion.div>
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "signup",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <SignUp />
          </motion.div>
        </AnimatePresence>
      </>
    ),
  },
  {
    path: "profile/:id",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Profile />
            <ScrollButton />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "settings",
    element: (
      <>
        <AnimatePresence wait>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Settings />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "dashboard",
    element: (
      <>
        <AnimatePresence wait>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Dashboard />
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "dashboard/lenguajes",
    element: (
      <>
        <AnimatePresence wait>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <div className="md:grid grid-cols-[max-content_1fr]">
              <AsideMenu />
              <Lenguajes />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },

  {
    path: "dashboard/users",
    element: (
      <>
        <AnimatePresence wait>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <div className="md:grid grid-cols-[max-content_1fr]">
              <AsideMenu />
              <Usuarios />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "dashboard/administradores",
    element: (
      <>
        <AnimatePresence wait>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <div className="grid grid-cols-[max-content_1fr]">
              <AsideMenu />
              <Administradores />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "dashboard/reportes",
    element: (
      <>
        <AnimatePresence wait>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <div className="md:grid grid-cols-[max-content_1fr]">
              <AsideMenu />
              <Reportes />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    ),
    requireAuth: true,
  },
  {
    path: "blog/article/info/card-1",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_1 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
  ,
  {
    path: "blog/article/info/card-2",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_2 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
  ,
  {
    path: "blog/article/info/card-3",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_3 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
  ,
  {
    path: "blog/article/info/card-4",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_4 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
  ,
  {
    path: "blog/article/info/card-5",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_5 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
  ,
  {
    path: "blog/article/info/card-6",
    element: (
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
        >
          <ArticleCopi_6 />
          <ScrollButton />
          <Footer />
        </motion.div>
      </>
    ),
  }
]

const router = createBrowserRouter(routes);



ReactDOM.createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <Translate />
    <RouterProvider router={router}>
      {routes.map((route) =>(
        <PrivateRoute
          key={route.path}
          path={route.path}
          element={route.element}
          requireAuth={route.requireAuth}
        />
      ))}
    </RouterProvider>
  </SessionProvider>
);

