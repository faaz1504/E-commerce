import { Link } from "react-router-dom";
import './AdminSidebar.css'

function AdminSidebar(){

    return(
        <>
        
        <div className="admin-sidebar">
            
      
      <h2 className="sidebar-title">Admin Panel</h2>

      <div className="sidebar-links">

        <Link to="/AdminDashboard/dash-home" className="sidebar-link">
          Dashboard
        </Link>

        <Link to="/AdminDashboard/users" className="sidebar-link">
          ViewUsers
        </Link>

        <Link to="/AdminDashboard/view-products" className="sidebar-link">
          ViewProducts
        </Link>

        <Link to="/AdminDashboard/add-product" className="sidebar-link">
          AddProduct
        </Link>

        

        

      </div>

    </div>
    </>

    )

}
export default AdminSidebar;