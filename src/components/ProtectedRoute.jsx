import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children,role}){

    const user = useSelector(

        (state) => state.auth.user

    );

    if(!user){
        return <Navigate to='/sign-in' replace/>
    }

    if(role && user.role !== role){
        return <Navigate to='/' replace/>
    }

    return children;

}
export default ProtectedRoute;