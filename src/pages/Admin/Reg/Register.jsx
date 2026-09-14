import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/auth/authSlice";

function Register() {
    
    const navigate =  useNavigate();

    const dispatch = useDispatch();


    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            password: "",
            role: "user"
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),

            role: Yup.string()
                .required("Role is required")
        }),

        onSubmit: (values) => {
            console.log(values);
               
            const newUser = {
                id:Date.now(),
                ...values
            };
            
            dispatch(register(newUser));

            navigate('/sign-in');
        }

    });

    return (
        <div className="register-page">

            <form
                className="register-form"
                onSubmit={formik.handleSubmit}
            >

                <h2>Create Account</h2>

                <p className="register-subtitle">
                    Register to get started
                </p>


                <div className="form-group">

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"

                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.name && formik.errors.name && (
                        <p className="error">
                            {formik.errors.name}
                        </p>
                    )}

                </div>


                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"

                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.email && formik.errors.email && (
                        <p className="error">
                            {formik.errors.email}
                        </p>
                    )}

                </div>


                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.password && formik.errors.password && (
                        <p className="error">
                            {formik.errors.password}
                        </p>
                    )}

                </div>


                <div className="form-group">

                    <label>Role</label>

                    <select
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >

                        <option value="user">
                            User
                        </option>

                        <option value="admin">
                            Admin
                        </option>

                    </select>

                    {formik.touched.role && formik.errors.role && (
                        <p className="error">
                            {formik.errors.role}
                        </p>
                    )}

                </div>


                <button
                    type="submit"
                    className="register-btn"
                    
                >
                    Register
                </button>

                <p className="signup-link">
    Already Have An Account?{" "}
    <Link to="/sign-in">
        Sign-In
    </Link>
</p>

            </form>

        </div>
    );
}

export default Register;