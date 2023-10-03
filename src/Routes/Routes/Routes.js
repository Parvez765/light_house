import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import HomePage from "../../Pages/HomePage/HomePage";
import HowItWorks from "../../Pages/HowItWorks/HowItWorks";
import PricingPage from "../../Pages/PricingPage/PricingPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";
import CareerPage from "../../Pages/CareerPage/CareerPage";
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
        path: "pricing",
        element : <PricingPage/>
      },
      {
        path : "/login",
        element : <LoginPage/>
      },
      {
        path : "/signup",
        element : <SignUpPage/>
      },
      {
        path : "/career",
        element : <CareerPage/>
      },
      {
        path: "/about_us",
        element: <AboutUs />
      }  
      
    ],
  },
]);
