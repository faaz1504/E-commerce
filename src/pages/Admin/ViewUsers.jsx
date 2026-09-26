import { useSelector } from "react-redux";

function ViewUsers() {

  const users = useSelector(
    (state) => state.auth.users
  );

   const normalUsers = users.filter(
    (user) => user.role === 'user'
  )

  return (
    <div>

      <h2 className="mb-4">
        View Users
      </h2>

      {normalUsers.length === 0 ? (

        <p>No users available</p>

      ) : (

        <div className="card shadow-sm p-4">

          <div className="table-responsive">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>

              </thead>

              <tbody>

                {normalUsers.map((user) => (

                  <tr key={user.id}>

                    <td>
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
}

export default ViewUsers;