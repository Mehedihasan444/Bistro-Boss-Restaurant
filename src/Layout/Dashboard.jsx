import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/icon/Logo1.png";
import { FaCalendar, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdAddBusiness, MdContactPhone, MdMenuBook, MdReviews } from "react-icons/md"
import { IoWalletSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import useCart from "../Hooks/useCart";
const Dashboard = () => {

const [cart]=useCart()

  return (
    <div className="flex justify-between gap-10">
        <div className=" w-1/4  ">
           <div className="fixed h-screen bg-[#D1A054]">
        <div className="flex justify-center items-center h-32">
          <img src={logo} alt="" className="" />
        </div>
        <div className="mx-5 ">
        
          <ul className="space-y-3 font-semibold px-20 menu">
            {/* <li className="uppercase "> <NavLink to=""  className="flex items-center gap-3"><FaHome></FaHome> Admin Home</NavLink> </li> */}
            <li className="uppercase "> <NavLink to="/dashboard/userHome"  className="flex items-center gap-3"><FaHome></FaHome> User Home</NavLink> </li>
            <li className="uppercase "> <NavLink to="/dashboard/addItem"><IoMdAddCircle /> Add item</NavLink> </li>
            {/* <li className="uppercase "> <NavLink to="">manage items</NavLink> </li> */}
            {/* <li className="uppercase "> <NavLink to="">manage bookings</NavLink> </li> */}
            {/* <li className="uppercase "> <NavLink to="">all users</NavLink> </li> */}
            <li className="uppercase"><NavLink to="/dashboard/reservation"> <FaCalendar/> reservation</NavLink></li>
            <li className="uppercase"><NavLink to="/dashboard/paymentHistory"><IoWalletSharp />payment history</NavLink></li>
       
            <li className="uppercase"><NavLink to="/dashboard/cart"> <FaShoppingCart/> my cart ({cart.length})</NavLink></li>
            <li className="uppercase"><NavLink to="/dashboard/addReview"><MdReviews />add review</NavLink></li>
            <li className="uppercase"><NavLink to="/dashboard/myBooking"><MdAddBusiness />my booking</NavLink></li>
       
          </ul>
 <ul className="space-y-3 font-semibold border-t-2 px-20 pt-2 menu">
             <li className="uppercase "> <NavLink to="/" className="flex items-center gap-3"> <FaHome></FaHome> Home</NavLink> </li>
            <li className="uppercase "> <NavLink to="/menu"><MdMenuBook />Menu</NavLink> </li>
            <li className="uppercase "> <NavLink to="/shop/dessert"><FaShoppingBag />shop</NavLink> </li>
            <li className="uppercase "> <NavLink to="/contact"><MdContactPhone />contact</NavLink> </li>
          </ul>
        </div>
        
      </div> 
        </div>
      
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
