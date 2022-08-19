import React, { useEffect, useState } from "react";
import "./index.scss";


import Watch from "./HeadPhone";
import AirPod from "../Products/AirPod";
import HeadPhone from "./HeadPhone";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAirpods } from "../../redux/Slices/airpodsSlice";
import { fetchAsyncWatch } from "../../redux/Slices/watchSlice";
import { fetchAsyncProducts } from "../../redux/Slices/productSlice";

const Products = () => {

  // Redux
  const dispatch = useDispatch();
  const airpods = useSelector((state) => state.airpods.list);
  const watch = useSelector((state) => state.watch.list);
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(fetchAsyncAirpods());
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncWatch());
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

  return (
    <div className="container products-pg">
      <h2>Watches</h2>
      <div className="main-watches">
      {watch &&
            watch.map((product) => {
              return <Watch product={product} key={product.id} />;
            })}
      </div>
      <div className="main-head">
        <h2>Head Phones</h2>
        <div className="main-watches">
          {products &&
            products.map((product) => {
              return <HeadPhone product={product} key={product.id} />;
            })}
        </div>
      </div>
      <div className="main-air">
        <h2>AirPods</h2>
        <div className="main-watches">
          {airpods &&
            airpods.map((airpod) => {
              return <AirPod product={airpod} key={airpod.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
