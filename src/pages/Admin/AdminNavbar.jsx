import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/auth/authSlice";

function AdminNavbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () =>{

    dispatch(logout());

    navigate('/sign-in');

  }

  return (

    <nav className="admin-navbar">

      <div>
        <h3></h3>
      </div>

      <div className="admin-profile">

        <span>Admin</span>

        <button className="logout-btn"
        onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>

  );
}

export default AdminNavbar;