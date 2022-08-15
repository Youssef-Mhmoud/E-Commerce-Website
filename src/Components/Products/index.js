import React, { useState } from "react";
import "./index.scss";
import WatchData from "../../Data/WatchData";
import HeadData from "../../Data/HeadData";
import AirData from "../../Data/AirData";

const Products = () => {
  const [waData, setWaData] = useState(WatchData);
  const [headData, setHeadData] = useState(HeadData);
  const [airData, setAirData] = useState(AirData);

  return (
    <div className="container products-pg">
      <h2>Watches</h2>
      <div className="main-watches">
        {waData.map((watch, watchIndex) => {
          const { title, img, id, price } = watch;

          return (
            <div className="watch-box" key={id}>
              <img src={img} />
              <div className="info-watch">
                <h4 className="title-watch">{title}</h4>
                <p className="price">{price}</p>
              </div>
              <button className="cart-btn">Add To Cart</button>
            </div>
          );
        })}
      </div>
      <div className="main-head">
        <h2>Head Phones</h2>
        <div className="main-watches">
          {headData.map((head, headIndex) => {
            const { title, img, id, price } = head;

            return (
              <div className="watch-box" key={id}>
                <img src={img} />
                <div className="info-watch">
                  <h4 className="title-watch">{title}</h4>
                  <p className="price">{price}</p>
                </div>
                <button className="cart-btn">Add To Cart</button>
              </div>
            );
          })}
        </div>
        </div>
        <div className="main-air">
          <h2>AirPods</h2>
          <div className="main-watches">
            {airData.map((air, airIndex) => {
              const { title, img, id, price } = air;

              return (
                <div className="watch-box" key={id}>
                  <img src={img} />
                  <div className="info-watch">
                    <h4 className="title-watch">{title}</h4>
                    <p className="price">{price}</p>
                  </div>
                  <button className="cart-btn">Add To Cart</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default Products;
