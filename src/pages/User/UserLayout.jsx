import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Footer from "../../components/Footer";

function Userlayout(){

    return(

        <div>

        <UserNavbar/>

        <Outlet/>
        <Footer/>

        </div>

    )

}
export default Userlayout;