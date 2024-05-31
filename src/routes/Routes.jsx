import {createBrowserRouter} from "react-router-dom";
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement: <ErrorPage />,
     children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],

    },
  ]);