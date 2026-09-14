import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth/authSlice";

function UserNavbar() {

  const user = useSelector(
    (state) => state.auth.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="shadow-sm py-3"
      sticky="top"
    >

      <Container>

        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 me-5"
        >
          Shop Ease
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="user-navbar" />

        <Navbar.Collapse id="user-navbar">

          <Nav className="me-auto gap-lg-2">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/User-cart">
              Cart
            </Nav.Link>

          </Nav>


          <Nav className="align-items-lg-center gap-4">

            {user ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/profile"
                >
                  Profile
                </Nav.Link>

                <span className="text-light">
                  Hi, {user.name}
                </span>

                <Button
                  variant="outline-light"
                  size="sm"
                  className="rounded-pill px-3"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                as={Link}
                to="/sign-in"
                variant="outline-light"
                size="sm"
                className="rounded-pill px-4"
              >
                Sign In
              </Button>
            )}

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default UserNavbar;