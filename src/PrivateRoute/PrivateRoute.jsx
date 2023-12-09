import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loder}= useContext(AuthContext)
    const location = useLocation()
    
    if(loder){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;