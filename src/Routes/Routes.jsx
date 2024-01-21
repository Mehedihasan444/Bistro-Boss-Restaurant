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
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import Contact from "../Pages/Dashboard/Contact";
import UpdateItem from "../Pages/Dashboard/ManageItems/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageBookings",
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element:<AdminRoute> <AddItem></AddItem></AdminRoute>,
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`) 
      },

      // user routes
      {
        path: "cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "userHome",
        element: <PrivateRoute><UserHome></UserHome></PrivateRoute>,
      },
      {
        path: "payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      
      {
        path: "reservation",
        element: <PrivateRoute><Reservation></Reservation></PrivateRoute>,
      },
      {
        path: "paymentHistory",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
      },
      {
        path: "myBooking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      },
      {
        path: "addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
      
      // common routes
      {
        path:"contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

export default Router;
