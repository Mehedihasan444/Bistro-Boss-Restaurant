import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loading}=useAuth()
const location = useLocation();
    if (loading || isAdminLoading) {
        return <Loading></Loading>;
        }
        if (user && isAdmin) {
            return children;
        }
        
            return <Navigate to="/login" state={location.pathname} replace></Navigate>
        };

export default AdminRoute;