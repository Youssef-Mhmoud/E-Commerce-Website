import React from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/Slices/cartSlice'

const AirPod = ({product}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="watch-box">
        <img src={product.img} />
        <div className="info-watch">
          <h4 className="title-watch">{product.title}</h4>
          <p className="price">${product.price}</p>
        </div>
        <div className="buttons">
          <button
            className="cart-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>
          <button className="details">Details</button>
        </div>
      </div>
    </>
  );
};

export default AirPod;
