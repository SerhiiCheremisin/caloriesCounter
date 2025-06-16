//Pages
import AboutPage from "../../pages/AboutPage";
import LogInPage from "../../pages/LogInPage";
import FoodLogPage from "../../pages/FoodLogPage";
import HistoryPage from "../../pages/HistoryPage";
import SocialPage from "../../pages/SocialPage";

//Other
import { IRoutes } from "../types/sharedTypes";

export const appRoutes : IRoutes[] = [
{
    path: "/login",
    element: <LogInPage />,
    name: "Login",
    angle: 0
  },
  {
    path: "/about",
    element: <AboutPage />,
    name: "About",
    angle: -50
  },
  {
    path: "/food",
    element: <FoodLogPage />,
    name: "Food log",
    angle: -40
  },
  {
    path: "/history",
    element: <HistoryPage />,
    name: "History",
    angle: 0
  },
  {
    path: "/social",
    element: <SocialPage />,
    name: "Social",
    angle: 40
  },
  
]

