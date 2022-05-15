import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const OwnerRoute = ({ children }) => {

    const user = useSelector(state => state.auth.user);
    const location = useLocation();

    if(user && user.role === "OWNER_ROLE") 
        localStorage.setItem("lastPath", location.pathname+location.search);

    return user && user.role === "OWNER_ROLE" ?
        children
        : <Navigate to="/login" />
}
