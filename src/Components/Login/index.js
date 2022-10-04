import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/Slices/userSlice";
import Loader from "react-loaders";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addUser({
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
      })
    );
  };

  // // Navigate Home Page
  const navigate = useNavigate();
  const homeNavigate = () => {
    if (
      (firstName &&
        lastName &&
        email &&
        phone &&
        password &&
        confirmPassword) === ""
    ) {
    } else {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  //
  // Loader
  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    setTimeout(() =>{ setZIndex({zIndex: '-1'}) }, 3500);
  });

  // Validation Form
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
  });

  return (
    <>
      <div className="container login-pg">
        <Link to="/" className="title-log">
          Shopping
        </Link>
        {/* Formik */}
        <div className="di text-center mt-5">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
          >
            {(formik) => (
              <div>
                {[
                  setFirstName(formik.values.firstName),
                  setLastName(formik.values.lastName),
                  setEmail(formik.values.email),
                  setPhone(formik.values.phone),
                  setPassword(formik.values.password),
                  setConfirmPassword(formik.values.confirmPassword)
                ]}
                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                <Form>
                  <div className="d-flex align-center justify-content-around flex-column flex-md-row">
                    <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                    <TextField label="Last Name" name="lastName" type="text" />
                  </div>
                  <div className="d-flex align-center justify-content-around mt-1  mt-md-5 flex-column flex-md-row">
                    <TextField label="Email" name="email" type="text" />
                    <TextField label="Phone" name="phone" type="text" />
                  </div>
                  <div className="d-flex align-center justify-content-around mt-1  mt-md-5 flex-column flex-md-row">
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                    />
                  </div>
                  <button
                    className="btn btn-dark mt-5 w-25 mb-5"
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                      homeNavigate();
                    }}
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <div className="loader-page" style={zIndex}>
        <h1>
          <span className="logo-load">SHOPPIng</span>
        </h1>
        <br />
        <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
      </div>
    </>
  );
};

export default Login;
