import React from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/Slices/cartSlice'

const HeadPhone = ({product}) => {
  const dispatch = useDispatch()
  
  return (
    <>
      <div className="watch-box">
        <img src={product.img} />
        <div className="info-watch">
          <h4 className="title-watch">{product.title}</h4>
          <p className="price">{product.price}</p>
        </div>
        <button className="cart-btn" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      </div>
    </>
  );
};

export default HeadPhone;
