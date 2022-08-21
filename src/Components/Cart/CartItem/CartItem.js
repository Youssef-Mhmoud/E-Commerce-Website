import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove,inc ,dec } from "../../../redux/Slices/cartSlice";
import "./CartItem.scss";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="cart-box">
        <div className="cart-product">
          <img src={product.img} />
          <div>
            <h3 className="title-cart">{product.title}</h3>
            <button
              className="remove-item"
              onClick={() => dispatch(remove(product.id))}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="price">${product.price}</div>
        <div className="product-quantity">
          <span className="inc" onClick={() => dispatch(inc(product))}>+</span>
          <span className="number">{product.cartQuantity}</span>
          <span className="dec" onClick={() => dispatch(dec(product))}>-</span>
        </div>
        <div className="product-total">
          ${product.price * product.cartQuantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
