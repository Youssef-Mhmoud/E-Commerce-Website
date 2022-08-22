import React, { useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { total } from "../../redux/Slices/cartSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(total())
  }, [cart, dispatch])
  
  return (
    <header>
      <div className="container nav-bar">
        <Link to="/" className="logo">
          Shopping
        </Link>
        <div className="form">
          <form method="get">
            <input type="text" placeholder="Category, Shoos, Cloths ..." />
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="user-need">
          <Link className="user" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
          <div className="say-hello">Welcome, <span>User</span></div>
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
