import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Index.jsx";
import {Community} from './pages/Community/Community'
import {AllBlogContent} from './pages/Blog/Blog'
import {Header} from './components/Header/Header'
import {Feed} from './pages/Feed/Feed.jsx'
import {Chat} from './pages/Chat/Chat.jsx'
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./pages/Sign up/SignUp";
import { Login } from "./pages/Login/Login"
import { Notificaciones } from "./pages/Notificaciones/Notificaciones";
import { Profile } from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer/>
      </>
    ),
  },
  {
    path: "community",
    element: (
      <>
        <Header />
        <Community />
        <Footer/>
      </>
    ),
  },
  {
    path: "feed",
    element: (
      <>
        <Header />
        <Feed />
        <Footer/>
      </>
    ),
  },
  {
    path: "chat",
    element: (
      <>
        <Header />
        <Chat />
      </>
    ),
  },
  {
    path: "blog",
    element: (
      <>
        <Header />
        <AllBlogContent/>
        <Footer/>
      </>
    ),
  },
  {
    path: "notifications",
    element: (
      <>
        <Header />
        <Notificaciones />
        <Footer />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "signup",
    element: (
      <>
        <Header />
        <SignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "profile",
    element: (
      <>
        <Header />
        <Profile />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
