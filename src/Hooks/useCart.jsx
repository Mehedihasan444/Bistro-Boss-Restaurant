import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
const {user}=useAuth()
  const {refetch,data: cart = []} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      // console.log("from usecart",res.data)
      return res.data;
    },
  });

// console.log(cart)
  return [cart,refetch];
};

export default useCart;
