import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { addToDetails } from "../../redux/Slices/detailsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const [zoomImg, setZoomImg] = useState();

  const showImg = () => {
    // if (zoomImg) {
    return (
      <div className={`none ${zoomImg}`}>
        <div className="img-box">
          <img src={product.img} alt="img" />
          <FontAwesomeIcon
            icon={faXmark}
            className="x-mark"
            onClick={() => setZoomImg("animate2")}
          />
        </div>
      </div>
    );
    // }
  };
  const actStars = 5;

  return (
    <>
      {showImg()}
      <div className="watch-box">
        <img
          src={product.img}
          onClick={() => setZoomImg("zoom-img")}
          alt="img"
        />
        <div className="info-watch">
          <h4 className="title-watch">{product.title}</h4>
          <p className="price">${product.price}</p>
        </div>
        <div className="stars-feed">
          {[...new Array(actStars)].map((arr, index) => {
            return index < product.stars ? (
              <FontAwesomeIcon icon={faStar} color="#ffa534" />
            ) : (
              <FontAwesomeIcon icon={faStar} className="empty-stars" />
            );
          })}
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
