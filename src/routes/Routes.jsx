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
import Chackout from '../pages/Chackout'
import AllScholarship from "../pages/AllScholarship";
import EditScholarShipForm from "../components/Dashboard/Form/EditScholarShipForm";
import MyApplication from "../pages/bashboard/user/MyApplication";
import MyReviews from "../pages/bashboard/user/MyReviews";
import ApplicationsDetails from "../components/pages/ApplicationsDetails";
import PrivateRoute from '../routes/PrivateRoute'
import AdminHomeRechart from "../pages/bashboard/Admin/AdminHomeRechart";
import AdminRoute from '../routes/AdminRoute'
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
        path: "/allscholarship",
        element: <AllScholarship />,
      },
      {
        path: "/ScholarShip/:id",
        element:<PrivateRoute><SholarshipDetails /></PrivateRoute> ,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/ScholarShip/${params.id}`)
      },
      
      {
        path: "/chackout/:id",
        element:<PrivateRoute><Chackout></Chackout></PrivateRoute>,
        loader:({ params })=>fetch(`${import.meta.env.VITE_API_URL}/ScholarShips/${params.id}`)
      },
      {
        path: "/payment",
        element:  <Payment />,
      },

    ],
    },
    {
      path: '/Dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
        // index: true,
       path:'profile',
          element: (
             <Profile></Profile>
          ),
        },
        {
          index: true,
          // path:'adminHome',
          element:<PrivateRoute> <AdminRoute><AdminHomeRechart></AdminHomeRechart></AdminRoute></PrivateRoute>
        },
        {
          path:'add-scholarship',
          element:<PrivateRoute><AddScholarShip/></PrivateRoute> 
        },
        {
          path:'manage-scholarship',
          element:<PrivateRoute><ManageScholerShips/></PrivateRoute> 
        },
        {
          path: "/Dashboard/manage-scholarship/updateScholarShip/:id",
          element: <PrivateRoute><EditScholarShipForm /></PrivateRoute>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/ScholarShip/${params.id}`)
        },
        {
          path:'manage-Applied-Application',
          element:<PrivateRoute><ManageAppliedApplication/></PrivateRoute> 
        },
        {
          path:'manage-Reviews',
          element:<PrivateRoute> <ManageReview/></PrivateRoute>
        },
        {
          path:'manage-Users',
          element:<PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute> </PrivateRoute>
        },
        {
          path:'my-reviews',
          element: <MyReviews></MyReviews>
        },
        {
          path:'my-application',
          element: <MyApplication></MyApplication>
        },
        {
          path:'/Dashboard/manage-Applied-Application/application-details/:id',
          element: <ApplicationsDetails></ApplicationsDetails>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/application-details/${params.id}`)
        },










      ]
    }
  ]);