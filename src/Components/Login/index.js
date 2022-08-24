import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/Slices/userSlice";
import Loader from "react-loaders";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ firstName, lastName, email, phone, password, confirmPassword })
    );
  };
  // Navigate Home Page
  const navigate = useNavigate();
  const homeNavigate = () => {
    if (firstName === "") {
      fnRef.current.classList.add('show')
    } else {
      fnRef.current.classList.remove('show')
    }
    if (lastName === "") {
      lnRef.current.classList.add('show')
    } else {
      lnRef.current.classList.remove('show')
    }
    if (email === "") {
      emRef.current.classList.add('show')
    } else {
      emRef.current.classList.remove('show')
    }
    if (phone === "") {
      phRef.current.classList.add('show')
    } else {
      phRef.current.classList.remove('show')
    }
    if (password === "") {
      ps1Ref.current.classList.add('show')
    } else {
      ps1Ref.current.classList.remove('show')
    }
    if (confirmPassword === "") {
      ps2Ref.current.classList.add('show')
    } else {
      ps2Ref.current.classList.remove('show')
    }
    if ((firstName,lastName,email,phone,password,confirmPassword) === '') {
      return "not"
    } else {
      navigate("/")
    }
  };

  const fnRef = useRef();
  const lnRef = useRef();
  const emRef = useRef();
  const phRef = useRef();
  const ps1Ref = useRef();
  const ps2Ref = useRef();

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
        <div className="form">
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
                <div className="fn" ref={lnRef} >
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
        </div>
      </div>
      <div className="loader-page" ref={indexRef}>
        <h1>
          <span className="logo-load">SHOPPIng</span>
        </h1>
        <br />
        {/* <Loader type="ball-clip-rotate-multiple" innerClassName="load" /> */}
      </div>
    </>
  );
};

export default Login;
