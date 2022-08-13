import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container nav-bar">
        <Link to='/' className="logo">Youssef</Link>
        <div className="form">
          <form method="get">
            <input type='text' placeholder="Category, Shoos, Cloths ..." />
            <button className="search-btn">Search</button>
          </form>
        </div>
        <div className="user-need">
          <Link className="user" to='/login'>
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
          <Link className="cart" to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
