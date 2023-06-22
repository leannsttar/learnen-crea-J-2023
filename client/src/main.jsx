import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IndexCard, IndexSteps } from "./components/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Community} from './pages/Community.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <IndexCard />
        <IndexSteps />
      </React.StrictMode>
    ),
  },
  {
    path: "community",
    element: (
      <Community />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
