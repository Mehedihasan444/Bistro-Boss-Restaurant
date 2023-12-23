import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart,refetch] = useCart();
const axiosSecure = useAxiosSecure()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
const handleDelete = (id,name) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
            console.log(res.data)
            if (res.data.deletedCount > 0) {
                    Swal.fire({
            title: "Deleted!",
            text: `${name}`,
            icon: "success"
          });
            }
        refetch()
        })
        }
      });

}
  return (
    <div className="">
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      <div className="flex justify-around ">
        <h1 className="text-4xl font-bold ">Item: {cart.length}</h1>
        <h1 className="text-4xl font-bold ">Total Price: ${totalPrice}</h1>
        <button className="btn btn-primary bg-[#D1A054] border-none text-white">Pay</button>
      </div>
      {/* table */}

      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="text-2xl bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>Quantity</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>1</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <th>
                  <button onClick={()=>{handleDelete(item._id,item.name)}} className="btn btn-primary bg-[#D1A054] border-none text-white"><FaTrash/></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
