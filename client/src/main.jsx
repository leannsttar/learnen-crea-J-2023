import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Index.jsx";
import {Community} from './pages/Community'
import {Blog} from './pages/Blog'
import {Header} from './components/Header'

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
    path: "blog",
    element: (
      <>
        <Header />
        <Blog />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
