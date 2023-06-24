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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "community",
    element: (
      <>
        <Header />
        <Community />
      </>
    ),
  },
  {
    path: "feed",
    element: (
      <>
        <Header />
        <Feed />
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
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
