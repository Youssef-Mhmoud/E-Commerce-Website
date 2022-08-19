import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../../redux/Slices/cartSlice";
import "./CartItem.scss";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="container">
      <div className="cart-box">
        <img src={product.img} />
        <div className="info-cart">
          <h4 className="title-cart">{product.title}</h4>
          <p className="price">{product.price}</p>
          <div className="inc-dec">
            <span className="inc">+</span>
            <span className="number">1</span>
            <span className="dec">-</span>
          </div>
        </div>
        <button
          className="remove-item"
          onClick={() => dispatch(remove(product.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
