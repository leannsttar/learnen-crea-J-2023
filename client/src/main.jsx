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
        <Header />
        <Home />
        <ScrollButton />
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
        <ScrollButton />
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
        <ScrollButton />
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
        <ScrollButton />
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
        <ScrollButton />
        <Footer />
      </>
    ),
  },
  {
    path: "settings",
    element: (
      <>
        <Header />
        <Settings />
        <Footer />
      </>
    ),
  },
  {
    path: "dashboard",
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
