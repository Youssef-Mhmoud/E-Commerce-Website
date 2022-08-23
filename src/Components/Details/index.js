import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router";
import { fetchAsyncProducts } from "../../redux/Slices/productsSlice";

const Details = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(productId));
  }, [dispatch, productId]);

  return (
    <div className="container details-pg">
      {Object.keys(products).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <>
          <div className="detail-card">
            <img className="imgone" src={products[productId - 1].img} />
            <div className="detail-info">
              <h2 className="detail-title">{products[productId - 1].title}</h2>
              <p className="detail-price">${products[productId - 1].price}</p>
              <p className="detail-more">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo lacus tristique nisl venenatis consequat a at neque.
                Phasellus varius sem id dignissim suscipit. Integer a erat eget
                dui dignissim tristique nec non est. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Praesent lectus ex, porta vitae nisi vitae, accumsan
                fermentum magna. Fusce convallis, ipsum id viverra semper, augue
                nisl vehicula ex,{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
