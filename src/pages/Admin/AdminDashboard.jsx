import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard(){

     return (
    <div>
        <AdminNavbar/>
      <AdminSidebar/>

      

      <div
        style={{
          marginLeft: "250px",
          padding: "30px"
        }}
      >
        <Outlet/>
        {/* <h1>Admin Dashboard</h1>

        <p>Welcome Admin</p> */}
      </div>
      

    </div>
  );

}
export default AdminDashboard;