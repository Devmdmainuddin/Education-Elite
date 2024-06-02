import {createBrowserRouter} from "react-router-dom";
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import DashboardLayout from '../layouts/DashboardLayout'
import Profile from "../pages/bashboard/common/Profile";
import ManageUsers from '../pages/bashboard/Admin/ManageUsers'
import AddScholarShip from "../pages/bashboard/Admin/AddScholarShip";
import ManageScholerShips from "../pages/bashboard/Admin/ManageScholerShips";
import ManageAppliedApplication from "../pages/bashboard/Admin/ManageAppliedApplication";
import ManageReview from "../pages/bashboard/Admin/ManageReview";
import Home from "../pages/Home/Home";
import SholarshipDetails from "../pages/details/SholarshipDetails";
import Payment from "../pages/payment/Payment";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement: <ErrorPage />,
     children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ScholarShip/:id",
        element: <SholarshipDetails />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/ScholarShip/${params.id}`)
      },
      {
        path: "/payment",
        element: <Payment />,
      },

    ],
    },
    {
      path: '/Dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path:'dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path:'add-scholarship',
          element: <AddScholarShip/>
        },
        {
          path:'manage-scholarship',
          element: <ManageScholerShips/>
        },
        {
          path:'manage-Applied-Application',
          element: <ManageAppliedApplication/>
        },
        {
          path:'manage-Reviews',
          element: <ManageReview/>
        },
        {
          path:'manage-Users',
          element: <ManageUsers></ManageUsers>
        },
      ]
    }
  ]);