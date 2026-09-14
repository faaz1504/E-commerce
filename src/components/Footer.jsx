import {
  Container,
  Row,
  Col,
  Nav
} from "react-bootstrap";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">

      <Container>

        <Row className="g-4">

          <Col xs={12} md={4}>

            <h4 className="fw-bold mb-3">
              ShopEase
            </h4>

            <p className="text-secondary">
              Discover quality products, great prices,
              and a simple shopping experience.
            </p>

          </Col>


          <Col xs={6} md={2}>

            <h6 className="fw-bold mb-3">
              Quick Links
            </h6>

            <Nav className="flex-column">

              <Nav.Link
                as={Link}
                to="/"
                className="text-secondary px-0"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/products"
                className="text-secondary px-0"
              >
                Products
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                className="text-secondary px-0"
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/cart"
                className="text-secondary px-0"
              >
                Cart
              </Nav.Link>

            </Nav>

          </Col>


          <Col xs={6} md={3}>

            <h6 className="fw-bold mb-3">
              Account
            </h6>

            <Nav className="flex-column">

              <Nav.Link
                as={Link}
                to="/profile"
                className="text-secondary px-0"
              >
                My Profile
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/sign-in"
                className="text-secondary px-0"
              >
                Sign In
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/register"
                className="text-secondary px-0"
              >
                Register
              </Nav.Link>

            </Nav>

          </Col>


          <Col xs={12} md={3}>

            <h6 className="fw-bold mb-3">
              Contact
            </h6>

            <p className="text-secondary mb-2">
              Email: support@shopease.com
            </p>

            <p className="text-secondary mb-2">
              Phone: +91 98765 43210
            </p>

            <p className="text-secondary">
              Kerala, India
            </p>

          </Col>

        </Row>


        <hr className="border-secondary mt-4" />


        <div className="text-center text-secondary">

          <small>
            © 2026 ShopEase. All rights reserved.
          </small>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;