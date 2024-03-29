import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/icon/Logo1.png";
import { FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaUsers} from "react-icons/fa";
import {MdAddBusiness,MdContactPhone,MdManageAccounts,MdManageHistory,MdMenuBook,MdReviews} from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { FaBarsStaggered } from "react-icons/fa6";



const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="lg:flex justify-between  lg:gap-10">
      <div className="  lg:w-1/4  ">
        <div className="drawer z-10 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content absolute top-2 left-2 ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className=" drawer-button text-3xl "
            >
             <FaBarsStaggered className="m-3 text-black"/>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="flex justify-center items-center h-32">
            <img src={logo} alt="" className="" />
          </div>
          <div className=" ">
            <ul className="space-y-3 font-semibold px-5 menu">
              {isAdmin ? (
                <>
                  <li className="uppercase ">
                    {" "}
                    <NavLink
                      to="/dashboard/adminHome"
                      className="flex items-center gap-3"
                    >
                      <FaHome></FaHome> Admin Home
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/addItems">
                      <IoMdAddCircle /> Add items
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/manageItems">
                      <MdManageAccounts />
                      manage items
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/allUsers">
                      <FaUsers></FaUsers>
                      all users
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/manageBookings">
                      <MdManageHistory />
                      manage bookings
                    </NavLink>{" "}
                  </li>
                </>
              ) : (
                <>
                  <li className="uppercase ">
                    {" "}
                    <NavLink
                      to="/dashboard/userHome"
                      className="flex items-center gap-3"
                    >
                      <FaHome></FaHome> User Home
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/reservation">
                      {" "}
                      <FaCalendar /> reservation
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/paymentHistory">
                      <IoWalletSharp />
                      payment history
                    </NavLink>
                  </li>

                  <li className="uppercase">
                    <NavLink to="/dashboard/cart">
                      {" "}
                      <FaShoppingCart /> my cart ({cart.length})
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/addReview">
                      <MdReviews />
                      add review
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/myBooking">
                      <MdAddBusiness />
                      my booking
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="space-y-3 font-semibold border-t-2 px-5 pt-2 menu">
              <li className="uppercase ">
                {" "}
                <NavLink to="/" className="flex items-center gap-3">
                  {" "}
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/menu">
                  <MdMenuBook />
                  Menu
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/shop/dessert">
                  <FaShoppingBag />
                  shop
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/dashboard/contact">
                  <MdContactPhone />
                  contact
                </NavLink>{" "}
              </li>
            </ul>
          </div>
            </ul>
          </div>
        </div>
        <div className="hidden lg:inline-block fixed  h-screen bg-[#D1A054]">
          <div className="flex justify-center items-center h-32">
            <img src={logo} alt="" className="" />
          </div>
          <div className="mx-5 ">
            <ul className="space-y-3 font-semibold px-20 menu">
              {isAdmin ? (
                <>
                  <li className="uppercase ">
                    {" "}
                    <NavLink
                      to="/dashboard/adminHome"
                      className="flex items-center gap-3"
                    >
                      <FaHome></FaHome> Admin Home
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/addItems">
                      <IoMdAddCircle /> Add items
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/manageItems">
                      <MdManageAccounts />
                      manage items
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/allUsers">
                      <FaUsers></FaUsers>
                      all users
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase ">
                    {" "}
                    <NavLink to="/dashboard/manageBookings">
                      <MdManageHistory />
                      manage bookings
                    </NavLink>{" "}
                  </li>
                </>
              ) : (
                <>
                  <li className="uppercase ">
                    {" "}
                    <NavLink
                      to="/dashboard/userHome"
                      className="flex items-center gap-3"
                    >
                      <FaHome></FaHome> User Home
                    </NavLink>{" "}
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/reservation">
                      {" "}
                      <FaCalendar /> reservation
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/paymentHistory">
                      <IoWalletSharp />
                      payment history
                    </NavLink>
                  </li>

                  <li className="uppercase">
                    <NavLink to="/dashboard/cart">
                      {" "}
                      <FaShoppingCart /> my cart ({cart.length})
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/addReview">
                      <MdReviews />
                      add review
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink to="/dashboard/myBooking">
                      <MdAddBusiness />
                      my booking
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="space-y-3 font-semibold border-t-2 px-20 pt-2 menu">
              <li className="uppercase ">
                {" "}
                <NavLink to="/" className="flex items-center gap-3">
                  {" "}
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/menu">
                  <MdMenuBook />
                  Menu
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/shop/dessert">
                  <FaShoppingBag />
                  shop
                </NavLink>{" "}
              </li>
              <li className="uppercase ">
                {" "}
                <NavLink to="/dashboard/contact">
                  <MdContactPhone />
                  contact
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
