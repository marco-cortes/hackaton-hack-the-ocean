import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserRoute = ({ children }) => {

    const user = useSelector(state => state.auth.user);
    const location = useLocation();

    if(user && user.role === "USER_ROLE") 
        localStorage.setItem("lastPath", location.pathname+location.search);

    return user && user.role === "USER_ROLE" ?
        children
        : <Navigate to="/login" />
}
