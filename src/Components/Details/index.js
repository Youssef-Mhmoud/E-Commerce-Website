import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router";
import { fetchAsyncProducts } from "../../redux/Slices/productsSlice";
import Loader from "react-loaders";
import { addToCart } from "../../redux/Slices/cartSlice";


const Details = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(productId));
  }, [dispatch, productId]);

  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    setTimeout(() => {
      setZIndex({ zIndex: "-1" });
    }, 3500);
  });

  return (
    <div className="container details-pg">
      {Object.keys(products).length === 0 ? (
        <div className="loader-page" style={zIndex}>
          <h1>
            <span className="logo-load">SHOPPING</span>
          </h1>
          <br />
          <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
        </div>
      ) : (
        <>
          <div className="detail-card">
            <img className="imgone" src={products[productId - 1].img} />
            <div className="detail-info">
              <h2 className="detail-title">
                Name: {products[productId - 1].title}
              </h2>
              <div className="price-info">
                <span>Price: </span>
                <p className="detail-price">
                  {" "}
                  ${products[productId - 1].price}
                </p>
              </div>
              <p className="detail-more">
                <span>Details: </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo lacus tristique nisl venenatis consequat a at neque.
                Phasellus varius sem id dignissim suscipit. Integer a erat eget
                dui dignissim tristique nec non est. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis{" "}
              </p>
              <button
                className="add-to-card"
                onClick={() => dispatch(addToCart(products[productId - 1]))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
