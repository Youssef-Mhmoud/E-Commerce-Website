import React from "react";
import "./CartItem.scss";

const CartItem = ({product}) => {
  return (
    <div className="container">
      <div className="cart-box" >
        <img src={product.img} />
        <div className="info-cart">
          <h4 className="title-cart">{product.title}</h4>
          <p className="price">{product.price}</p>
          <div className="inc-dec">
            <span className="inc">+</span>
            <span className="number">0</span>
            <span className="dec">-</span>
          </div>
        </div>
          <button className="remove-item">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
