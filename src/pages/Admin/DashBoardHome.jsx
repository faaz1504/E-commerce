import { useSelector } from "react-redux";

function DashBoardHome(){

  const products = useSelector(
    (state) => state.products.products
  );

  const users = useSelector(
    (state) => state.auth.users
  );

  const normalUsers = users.filter(
    (user) => user.role === 'user'
  )

  return (
    <div>

      <h2>Admin Dashboard</h2>

      <p className="text-muted">
        Welcome to the admin panel
      </p>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5>Users</h5>
            <h2>{normalUsers.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5>Products</h5>
            <h2>{products.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5>Orders</h5>
            <h2>8</h2>
          </div>
        </div>

      </div>

    </div>
  );

}
export default DashBoardHome;