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
        </div>
      </div>
    </div>
  );
};

export default CartItem;
