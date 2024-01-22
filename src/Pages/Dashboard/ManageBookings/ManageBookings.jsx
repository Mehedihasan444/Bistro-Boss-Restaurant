import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDoneOutline } from "react-icons/md";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const makeDone=(id,transactionId)=>{
    axiosSecure.patch(`/payments/status/update/${id}`)
    .then((res) => {
        console.log(res.data)
    
        if (res.data.modifiedCount>0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${transactionId} done.`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch()
        }
    })


  }

  return (
    <div>
      {/* <h1 className="">ManageBookings</h1> */}
      <SectionTitle
        heading={"MANAGE BOOKINGS"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <div className="flex justify-around ">
        <h1 className="lg:text-4xl font-bold ">Total Users: {payments.length}</h1>
      </div>
      {/* table */}

      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="lg:text-2xl bg-[#D1A054] text-white">
            <tr>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Booking Date</th>
              <th>Transaction-ID</th>
              <th>Activity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) => (
              <tr key={item._id}>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.date.split("T")[0]}</td>
                <td>{item?.transactionId}</td>
                <td className={`${item?.status=='Done'?'text-[#287855]':'text-[#80E2B7]'}`}>{item?.status}</td>
                <td className="flex justify-center" onClick={()=>makeDone(item._id,item.transactionId)}><button className={`w-10 h-10 rounded-full text-center flex justify-center items-center ${item?.status=='Done'?'bg-[#287855]':'bg-[#80E2B7]'} text-white`}><MdDoneOutline /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
