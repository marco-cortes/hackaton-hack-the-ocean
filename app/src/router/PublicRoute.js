import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {

    const { user } = useSelector(state => state.auth);

    const lastPath = localStorage.getItem("lastPath");

    return !user ?
        children 
        : user.role === "USER_ROLE" ? lastPath ? <Navigate to={lastPath} /> : <Navigate to={"/user/"} /> 
        : user.role === "OWNER_ROLE" ? lastPath ? <Navigate to={lastPath} /> : <Navigate to={"/owner/"} />
        : user.role === "ADMIN_ROLE" && lastPath ? <Navigate to={lastPath} /> : <Navigate to={"/admin/"} />
}
