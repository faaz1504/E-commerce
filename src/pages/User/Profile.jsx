import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/authSlice";

function Profile() {

  const user =  useSelector(
    (state) => state.auth.user
  )

  if (!user) {
    return <p className="text-center mt-5">No user logged in</p>;
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () =>{
  
      dispatch(logout());
  
      navigate('/sign-in');
  
    }


  return (
    <Container className="py-5">

      <h2 className="fw-bold mb-4">
        My Profile
      </h2>

      <Row className="g-4">

        {/* Profile Card */}

        <Col lg={4}>

          <Card className="border-0 shadow-sm text-center">

            <Card.Body className="p-4">
              

              <img
                src="https://images.unsplash.com/photo-1740252117044-2af197eea287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
                alt="profile"
                className="rounded-circle mb-3"
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "cover"
                }}
              />

              <h4 className="fw-bold">
                {user.name}
              </h4>

              <p className="text-muted">
                {user.email}
              </p>

              

              <Button
                variant="outline-danger"
                className="w-100"
                onClick={handleLogout}
              >
                Logout
              </Button>

            </Card.Body>

          </Card>

        </Col>


        {/* User Details */}

        <Col lg={8}>

          <Card className="border-0 shadow-sm mb-4">

            <Card.Body className="p-4">

              <h4 className="fw-bold mb-4">
                Personal Information
              </h4>

              <Row className="mb-3">

                <Col sm={4}>
                  <strong>Name</strong>
                </Col>

                <Col sm={8}>
                  {user.name}
                </Col>

              </Row>

              <hr />

              <Row className="mb-3">

                <Col sm={4}>
                  <strong>Email</strong>
                </Col>

                <Col sm={8}>
                  {user.email}
                </Col>

              </Row>

              <hr />

              <Row className="mb-3">

                <Col sm={4}>
                  <strong>Phone</strong>
                </Col>

                <Col sm={8}>
                  +91 9876543210
                </Col>

              </Row>

            </Card.Body>

          </Card>


          {/* Address */}

          <Card className="border-0 shadow-sm">

            </Card>

        </Col>

      </Row>

    </Container>
  );
}

export default Profile;