import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {

const [menu,refetch]=useMenu()
const axiosSecure = useAxiosSecure()

const handleDeleteMenu = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${name}`,
              icon: "success",
            });
          }
          refetch()
        });
      }
    });
  };

  

    return (
        <div>
            {/* <h1 className="">ManageItems</h1> */}
            <div className="">
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subHeading={"Hurry Up!"}
      ></SectionTitle>
      <div className="flex justify-around ">
        <h1 className="lg:text-4xl font-bold ">Item: {menu.length}</h1>
        {/* <h1 className="text-4xl font-bold ">Total Price: ${totalPrice}</h1> */}
        <button className="btn btn-primary bg-[#D1A054] border-none text-white">Pay</button>
      </div>
      {/* table */}

      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="lg:text-2xl bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item,i) => (
              <tr key={item._id}>
                <td>{i+1}</td>
               
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
                  <Link to={`/dashboard/updateItem/${item._id}`}>

                  <button className="btn btn-primary bg-[#D1A054] border-none text-white"><FaEdit/></button>
                  </Link>
                </th>
                <th>
                  <button onClick={()=>{handleDeleteMenu(item._id,item.name)}} className="btn btn-primary bg-[#D1A054] border-none text-white"><FaTrash/></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManageItems;