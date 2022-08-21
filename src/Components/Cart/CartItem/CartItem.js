import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../../redux/Slices/cartSlice";
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
          <span className="inc">+</span>
          <span className="number">{product.cartQuantity}</span>
          <span className="dec">-</span>
        </div>
        <div className="product-total">
          ${product.price * product.cartQuantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
