import React from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
