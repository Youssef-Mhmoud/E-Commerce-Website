import React, { useEffect, useState } from "react";
import "./index.scss";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../redux/Slices/productsSlice";

const Products = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);
  console.log(products.length);
  return (
    <div className="container products-pg">
      {products.length === 0 ? (
        <h3 className="not-found-result">Results Not Found !</h3>
      ) : (
        <>
          <h2>Products</h2>
          <div className="main-air">
            <div className="main-watches">
              {products &&
                products.map((product) => {
                  return <Product product={product} />;
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
