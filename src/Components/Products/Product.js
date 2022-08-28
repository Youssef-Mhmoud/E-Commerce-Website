import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { addToDetails } from "../../redux/Slices/detailsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const shRef = useRef(null)
  const showImg = () => {
    shRef.current.classList.add('show')
  }
  const hiddImg = () => {
    shRef.current.classList.remove('show')
  }
  return (
    <>
      <div className="zoom-img" ref={shRef}>
        <div className="img-box">
          <img src={product.img} />
          <FontAwesomeIcon icon={faXmark} className="x-mark" onClick={hiddImg} />
        </div>
      </div>
      <div className="watch-box">
        <img src={product.img} onClick={showImg} />
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
          <Link
            to={`/details/${product.id}`}
            className="details"
            onClick={() => dispatch(addToDetails(product))}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
