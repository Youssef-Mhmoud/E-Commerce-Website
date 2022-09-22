import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/Slices/userSlice";
import Loader from "react-loaders";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  // Validation Form Bootstrap
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     addUser({ firstName, lastName, email, phone, password, confirmPassword })
  //   );
  // };

  // Navigate Home Page
  const navigate = useNavigate();
  const homeNavigate = () => {
    // if (firstName === "") {
    //   fnRef.current.classList.add("show");
    // } else {
    //   fnRef.current.classList.remove("show");
    // }
    // if (lastName === "") {
    //   lnRef.current.classList.add("show");
    // } else {
    //   lnRef.current.classList.remove("show");
    // }
    // if (email === "") {
    //   emRef.current.classList.add("show");
    // } else {
    //   emRef.current.classList.remove("show");
    // }
    // if (phone === "") {
    //   phRef.current.classList.add("show");
    // } else {
    //   phRef.current.classList.remove("show");
    // }
    // if (password === "") {
    //   ps1Ref.current.classList.add("show");
    // } else {
    //   ps1Ref.current.classList.remove("show");
    // }
    // if (confirmPassword === "") {
    //   ps2Ref.current.classList.add("show");
    // } else {
    //   ps2Ref.current.classList.remove("show");
    // }
    if (
      (firstName &&
        lastName &&
        email &&
        phone &&
        password &&
        confirmPassword) === ""
    ) {
      return "not";
    } else {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  // const fnRef = useRef();
  // const lnRef = useRef();
  // const emRef = useRef();
  // const phRef = useRef();
  // const ps1Ref = useRef();
  // const ps2Ref = useRef();

  // Loader
  const indexRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      indexRef.current.style.zIndex = "-1";
    }, 3500);
  });
  return (
    <>
      <div className="container login-pg">
        <Link to="/" className="title-log">
          Shopping
        </Link>
        {/* <div className="form">
          <form method="get" onSubmit={handleSubmit}>
            <div className="name-input">
              <div className="inputs fname">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="fn" ref={fnRef}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc1"
                  />
                  <p className="error1">Write Your First Name.. !</p>
                </div>
              </div>
              <div className="inputs lname">
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLasttName(e.target.value)}
                />
                <div className="fn" ref={lnRef}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc2"
                  />
                  <p className="error2">Write Your Last Name.. !</p>
                </div>
              </div>
            </div>
            <div className="email-phone">
              <div className="inputs em1">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="fn" ref={emRef}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc3"
                  />
                  <p className="error3">Write Your Email.. !</p>
                </div>
              </div>
              <div className="inputs phone1">
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="fn" ref={phRef}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc4"
                  />
                  <p className="error4">Write Your Phone Number.. !</p>
                </div>
              </div>
            </div>

            <div className="pass-input">
              <div className="inputs pass1">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="fn" ref={ps1Ref}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc5"
                  />
                  <p className="error5">Write Your Password.. !</p>
                </div>
              </div>
              <div className="inputs pass2">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="fn" ref={ps2Ref}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="exc6"
                  />
                  <p className="error6">Confirm Password.. !</p>
                </div>
              </div>
            </div>
            <button type="submit" onClick={homeNavigate} className="btn-submit">
              Submit
            </button>
          </form>
        </div> */}
        {/* Form Bootstrap */}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="justify-content-center form"
        >
          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md="4" controlId="validationCustom01" className="mb-4">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback>Done!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
              />
              <Form.Control.Feedback>Done!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4 justify-content-center">
            <Form as={Col} md="4" className="mb-4">
              <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="Email" />
                <Form.Control.Feedback>Done!</Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Form as={Col} md="4">
              <Form.Group >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" required placeholder="Phone" />
                <Form.Control.Feedback>Done!</Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Row>
          <Row className="mb-4 justify-content-center">
            <Form.Group as={Col} md="4" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                defaultValue=""
              />
              <Form.Control.Feedback>Done!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Cofirm Password"
                defaultValue=""
              />
              <Form.Control.Feedback>Done!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group className="mb-4 lef" >
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                id="validationFormik0"
                
              />
            </Form.Group>
            <Button type="submit" className="butt m-auto" >
              Submit form
            </Button>
          </Row>
        </Form>
        {/* End Bootstrap */}
      </div>
      <div className="loader-page" ref={indexRef}>
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
