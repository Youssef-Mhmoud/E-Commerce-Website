import React, { useEffect, useState } from "react";
import SliderData from "../../Data/SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import sale from "../../assests/imgs/sale.jpg";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [data, setData] = useState(SliderData);
  const [index, setIndex] = useState(0);

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
          <div className="h">Hello world</div>
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
        </div>
      </div>
    </>
  );
};

export default Home;
