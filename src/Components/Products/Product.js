import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { addToDetails } from "../../redux/Slices/detailsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const [zoomImg, setZoomImg] = useState(true);

  const showImg = () => {
    if (zoomImg) {
      return (
        <div className="zoom-img">
          <div className="img-box">
            <img src={product.img} alt="img" />
            <FontAwesomeIcon
              icon={faXmark}
              className="x-mark"
              onClick={() => setZoomImg(false)}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {showImg()}
      <div className="watch-box">
        <img src={product.img} onClick={() => setZoomImg(true)} alt="img" />
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
