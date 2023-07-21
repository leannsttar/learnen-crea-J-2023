import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./pages/Home/Index.jsx";
import {Community} from './pages/Community/Community'
import {AllBlogContent} from './pages/Blog/Blog'
import { Article } from "./pages/Blog/Article/Article";
import {Header} from './components/Header/Header'
import {Feed} from './pages/Feed/Feed.jsx'
import {Chat} from './pages/Chat/Chat.jsx'
import { Footer } from "./components/Footer/Footer";
import { ScrollButton } from "./components/buttons/scrollbtn";
import { SignUp } from "./pages/Sign up/SignUp";
import { Login } from "./pages/Login/Login"
import { Notificaciones } from "./pages/Notificaciones/Notificaciones";
import { Profile } from "./pages/Profile/Profile";
import { Settings } from "./pages/Settings/Settings.jsx"
import {Dashboard} from "./pages/Dashboard/Dashboard.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <AnimatePresence wait>
        <Header />
        <motion.div 
          initial={{ opacity: 0, x: -50}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Home />
          <ScrollButton />
          <Footer/>
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
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Community />
          <ScrollButton />
          <Footer/>
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
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Feed />
          <ScrollButton />
          <Footer/>
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
  {
    path: "chat",
    element: (
      <>
      <AnimatePresence wait>
        <Header />
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Chat />
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
  {
    path: "blog",
    element: (
      <>
        <Header />
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
        <AllBlogContent/>
        <ScrollButton />
        <Footer/>
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
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
        <Article />
        <ScrollButton />
        <Footer/>
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
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
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
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
        <Login />
        <Footer />
        </motion.div>
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
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <SignUp />
          <Footer />
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
  {
    path: "profile",
    element: (
      <>
      <AnimatePresence wait>
        <Header />
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Profile />
          <ScrollButton />
          <Footer />
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
  {
    path: "settings",
    element: (
      <>
      <AnimatePresence wait>
        <Header />
        <motion.div 
          initial={{ opacity: 0, x: -100}}
          animate={{opacity: 1, x:0 }}
          exit={{opacity: 0, x:100 }}
          transition={{ duration: 2}}
        >
          <Settings />
          <Footer />
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
  {
    path: "dashboard",
    element: (
      <>
      <AnimatePresence wait>
        <motion.div 
            initial={{ opacity: 0, x: -100}}
            animate={{opacity: 1, x:0 }}
            exit={{opacity: 0, x:100 }}
            transition={{ duration: 2}}
          >
          <Dashboard />
        </motion.div>
      </AnimatePresence>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
