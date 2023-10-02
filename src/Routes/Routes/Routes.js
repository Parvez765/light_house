import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import HomePage from "../../Pages/HomePage/HomePage";
import HowItWorks from "../../Pages/HowItWorks/HowItWorks";
import AboutUs from "../../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/how_it_works",
        element: <HowItWorks />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
    ],
  },
]);
