import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import './index.scss'

const Details = () => {
  const details = useSelector((state) => state.details);
  // console.log(details.detailsList[0]);
  const count = details.detailsList.length
  console.log(count - 1)
  // console.log(details.detailsList.length )
  return (
    <div className="container details-pg">
      {
        details.detailsList.length <= 1 ? 
        (
          <>
        { details.detailsList &&
            details.detailsList.map((det) => {
              return (
                <div key={det.id}>
                  <img src={det.img} className="imgone" />
                  <h1>{det.title}</h1>
                  <p>{det.price}</p>
                </div>
              );
            })}
          </>
        ) : (
          []
          )
      
        
      }
        
    </div>
  );
};

export default Details;
