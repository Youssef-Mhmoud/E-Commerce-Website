import React, { useEffect, useState } from "react";
import "./index.scss";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts
} from "../../redux/Slices/productsSlice";

const Products = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);


  return (
    <div className="container products-pg">
      <div className="main-air">
        <h2>Products</h2>
        <div className="main-watches">
          {products &&
            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
