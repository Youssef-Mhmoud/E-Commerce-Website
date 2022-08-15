import React, { useEffect, useState } from "react";
import SliderData from "../../Data/SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import sale from "../../assests/imgs/sale.jpg";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  // Start Slider UseState
  const [data, setData] = useState(SliderData);
  const [index, setIndex] = useState(0);
  // End Slider UseState

  // Slider
  {
    useEffect(() => {
      const lastIndex = data.length - 1;

      if (index < 0) {
        setIndex(lastIndex);
      } else if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, data]);

    useEffect(() => {
      const slider = setTimeout(() => {
        setIndex((autoIndex) => autoIndex + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
  }
  const handleRight = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const handleLeft = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <div className="container home-pg">
        <div className="landing">
          <div className="main-side">
            <aside className="side-bar side1">
              <ul className="list-side">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Cart</Link>
                </li>
              </ul>
            </aside>
            <aside className="side-bar side2">
              <h2>About</h2>
              <p className="info-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie vulputate mollis. Ut maximus tortor eros, ut
                interdum nulla semper vel. Nulla facilisi. Pellentesque habitant
              </p>
                <Link to='/' className="about-btn">
                  More Details
                </Link>
            </aside>
          </div>
          <div className="slider">
            {data.map((image, imgIndex) => {
              const { img, id } = image;
              let postion = "right";
              if (imgIndex === index) {
                postion = "active";
              } else if (
                imgIndex === index - 1 ||
                (index === 0 && imgIndex === data.length - 1)
              ) {
                postion = "left";
              }
              return (
                <div className={`img ${postion}`} key={id}>
                  <img src={img} />
                </div>
              );
            })}
            <FontAwesomeIcon
              className="angelLeft"
              onClick={handleLeft}
              icon={faAngleLeft}
            />
            <FontAwesomeIcon
              className="angelRight"
              onClick={handleRight}
              icon={faAngleRight}
            />
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Home;
