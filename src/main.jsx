import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./router/Home.jsx";
import Gallery from "./router/Gallery.jsx";
import ErrorPage from "./router/ErrorPage.jsx";
import Contact from "./router/Contact.jsx";
import Service1 from "./router/Service1.jsx";
import Service2 from "./router/Service2.jsx";
import Service3 from "./router/Service3.jsx";
import Service4 from "./router/Service4.jsx";
import Service5 from "./router/Service5.jsx";
import RenderDetailsPage from "./router/RenderDetailsPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/gallery",
        element: <Gallery />,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Service1",
        element: <Service1 />,
      },
      {
        path: "/Service2",
        element: <Service2 />,
      },
      {
        path: "/Service3",
        element: <Service3 />,
      },
      {
        path: "/Service4",
        element: <Service4 />,
      },
      {
        path: "/Service5",
        element: <Service5 />,
      },
      {
        path: "/gallery/details/:id",
        element: <RenderDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
