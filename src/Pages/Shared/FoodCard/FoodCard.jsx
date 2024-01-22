import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [cart,refetch]=useCart()
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const handleCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId:food._id,
        email:user.email,
        name:food.name,
        price:food.price,
        image:food.image
      }

      axiosSecure.post('/carts', cartItem)
      .then((response) =>{
        console.log(response.data)
        if(response.data.insertedId) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${food.name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/cart")
        }

      })
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Want to login ?",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login",{state:location.pathname});
        }
      });
    }
  };

  return (
    // <div className="card bg-base-100 border">
    //   <figure className="">
    //     <img src={item.image} alt="Shoes" className="rounded-xl" />
    //   </figure>
    //   <p className="absolute right-0 mr-4 mt-4 px-4 bg-black text-white rounded-full">
    //     ${item.price}
    //   </p>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">{item.name}</h2>
    //     <p>{item.recipe}</p>
    //     <div className="card-actions">
    //       <button className="btn btn-primary" onClick={() => handleCart(item)}>
    //         ADD TO CART
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="card  glass">
  <figure><img src={item.image} alt="car!" className="transform transition-transform duration-300 ease-in-out hover:scale-105"/></figure>
  <p className="absolute right-0 mr-4 mt-4 px-4 bg-black text-white rounded-full">
         ${item.price}
       </p>
  <div className="card-body p-4">
    <h2 className="card-title">{item.name}</h2>
    <p className="text-justify text-xs">{item.recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm text-xs bg-[#D1A054] border-none text-white" onClick={() => handleCart(item)}>ADD TO CART</button>
    </div>
  </div>
</div>
  );
};

export default FoodCard;
