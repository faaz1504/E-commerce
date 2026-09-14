import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Redux/auth/authSlice";

function SignIn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();


  const formik = useFormik({

    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")

    }),

    onSubmit: (values) => {
      console.log(values);

      // get registered user
      const users = JSON.parse(localStorage.getItem("registereduser")) || [];

      //check email & password
      const registeredUser = users.find(
        (user) => user.email === values.email &&
                  user.password === values.password

      );

      
      if(registeredUser){
        dispatch(signIn(registeredUser));

        if(registeredUser.role === "admin"){

          navigate("/AdminDashboard/dash-home")

      }else{
          navigate('/')
        }

      }else{
        alert("invalid email or password")
      }

      
    }

  });

  return (

    <Container
      fluid
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >

      <Row className="w-100 justify-content-center">

        <Col xs={11} sm={8} md={6} lg={4}>

          <Card className="shadow border-0">

            <Card.Body className="p-4">

              <h2 className="text-center mb-2">
                Sign In
              </h2>

              <p className="text-center text-muted mb-4">
                Login to your account
              </p>

              <Form onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.email &&
                      formik.errors.email
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>

                </Form.Group>


                <Form.Group className="mb-4">

                  <Form.Label>
                    Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.password &&
                      formik.errors.password
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>

                </Form.Group>


                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  
                >
                  Sign In
                </Button>


                <p className="text-center mt-4 mb-0">

                  Don't have an account?{" "}

                  <Link
                    to="/register"
                    className="text-decoration-none fw-semibold"
                  >
                    Register
                  </Link>

                </p>

              </Form>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  );
}

export default SignIn;