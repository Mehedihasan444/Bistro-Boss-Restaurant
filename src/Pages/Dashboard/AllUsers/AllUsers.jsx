import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (id, name) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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


  const handleMakeAdmin = (id ,name)=>{
axiosSecure.patch(`/users/admin/${id}`)
.then((res) => {
    console.log(res.data)

    if (res.data.modifiedCount>0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
    }
})
  }




  return (
    <div className="">
      <SectionTitle
        heading={"Manage all users"}
        subHeading={"How Many??"}
      ></SectionTitle>
      <div className="flex justify-around ">
        <h1 className="lg:text-4xl font-bold ">Total Users: {users.length}</h1>
      </div>
      {/* table */}

      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="lg:text-2xl bg-[#D1A054] text-white">
            <tr>
              <th>#</th>

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>

                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>{item.email}</td>
                <td> 
                    {
                        item.role==='admin'?"Admin": <button
                    onClick={() => {
                      handleMakeAdmin(item._id, item.name);
                    }}
                    className="btn btn-primary bg-[#D1A054] border-none text-white"
                  >
                    <FaUsers />
                  </button>
                    }
                   </td>
                <th>
                  <button
                    onClick={() => {
                      handleDeleteUser(item._id, item.name);
                    }}
                    className="btn btn-primary bg-[#D1A054] border-none text-white"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
