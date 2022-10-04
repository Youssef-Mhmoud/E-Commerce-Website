import React, { useEffect, useState } from "react";
import "./index.scss";
import Products from "../Products";
import Loader from "react-loaders";

const SearchPage = () => {
  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    setTimeout(() => {
      setZIndex({ zIndex: "-1" });
    }, 3500);
  });
  return (
    <div>
      <Products />
      <div className="loader-page" style={zIndex}>
        <h1>
          <span className="logo-load">SHOPPIng</span>
        </h1>
        <br />
        <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
      </div>
    </div>
  );
};

export default SearchPage;
