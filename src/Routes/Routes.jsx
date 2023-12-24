import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Reservation from "../Pages/Dashboard/Reservation";
import AddItem from "../Pages/Dashboard/AddItem";
import UserHome from "../Pages/Dashboard/UserHome";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin routes
{
path:"allUsers",
element: <AllUsers></AllUsers>
},

      // user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },{
        path: "myBooking",
        element: <MyBooking></MyBooking>,
      }
      ,{
        path: "addReview",
        element: <AddReview></AddReview>,
      }
    ],
  },
]);

export default Router;
