import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { total } from "../../redux/Slices/cartSlice";
import { filterItems } from "../../redux/Slices/productsSlice";
import { logOut } from "../../redux/Slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [filter, setFilter] = useState("");
  const { firstName, lastName, email, phone } = useSelector(
    (state) => state.user
  );
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFilter(dispatch(filterItems(inputRef.current.value)));
      foRef.current.classList.remove("show");
    }, 1000);
  };

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);

  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/searchpage");
  };

  // Show Form
  const foRef = useRef(null);
  const showForm = () => {
    foRef.current.classList.add("show");
  };
  const hidForm = () => {
    foRef.current.classList.remove("show");
  };

  // Info About User
  const [userInf, setUserInf] = useState(false);
  const [userdet, setUserDet] = useState();

  const userInfo = () => {
    if (userInf === true) {
      return (
        <div className="bg-user-info">
          <div className={`${userdet}`}>
            <FontAwesomeIcon
              icon={faXmark}
              className="x-mark"
              onClick={() => {
                setUserDet("hidden-say");
                setTimeout(() => {
                  setUserInf(false);
                }, 600);
              }}
            />
            {firstName === "" ? (
              <>
                <p className="don">Don't Signup.. ?</p>
                <Link to="/login" className="signup-btn">
                  SignUp
                </Link>
              </>
            ) : (
              <>
                <div>
                  Welcome,{" "}
                  <span>
                    {firstName} {lastName}
                  </span>
                </div>
                <br />
                <div>
                  <p>
                    Your Email: <span>{email}</span>
                  </p>
                  <p>
                    Your Phone: <span>{phone}</span>
                  </p>
                </div>
                <button
                  className="signup-btn logout"
                  onClick={() => {
                    dispatch(logOut());
                    setUserInf(false);
                  }}
                >
                  LogOut
                </button>
              </>
            )}
          </div>
        </div>
      );
    }
  };

  // Night Mode
  const [changeMoon, setChangeMoon] = useState(false);
  const nightMode = () => {
    const body = document.body;
    setChangeMoon((change) => !change);
    body.classList.toggle("dark");
  };

  return (
    <header>
      {userInfo()}
      <div className="container nav-bar">
        <Link to="/" className="logo">
          Shopping
        </Link>
        <div className="form" ref={foRef}>
          <FontAwesomeIcon icon={faXmark} className="x-hid" onClick={hidForm} />
          <form method="get" onSubmit={submitHandler}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Watches, HeadPhones, AirPods ..."
              onChange={() => setFilter}
            />
            <button
              className="search-btn"
              type="submit"
              onClick={navigateToContacts}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="user-need">
          <div className="cart mag" to="/cart" onClick={showForm}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          {/*               Night Mode               */}
          <button
            className="user night-btn"
            onClick={() => {
              nightMode();
            }}
          >
            <div className="btn-circle"></div>
          </button>
          {/*               Night Mode               */}
          <button
            className="user"
            onClick={() => {
              setUserInf(true);
              setUserDet("say-hello");
            }}
          >
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
          </button>
          <Link className="cart" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="count-cart">{cart.cartTotalQuantity}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
