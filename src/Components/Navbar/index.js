import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { total } from "../../redux/Slices/cartSlice";
import { filterItems } from "../../redux/Slices/productsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [filter, setFilter] = useState("");
  const {firstName, lastName} = useSelector(state => state.user)
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFilter(dispatch(filterItems(inputRef.current.value)));
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

  return (
    <header>
      <div className="container nav-bar">
        <Link to="/" className="logo">
          Shopping
        </Link>
        <div className="form">
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
          <Link className="user" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
            <div className="say-hello">
              Welcome, <span>{firstName}</span>
            </div>
          </Link>
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
