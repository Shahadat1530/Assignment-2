import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
        loader: () => fetch("https://api.tvmaze.com/shows"),
      },
    ],
  },
  {
    path: "*",
    element: <div>Error Page!</div>,
  },
]);

export default router;
