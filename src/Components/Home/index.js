import React, { useEffect, useState } from "react";
import SliderData from "../../Data/SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faAngleRight,
  faAngleLeft,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faAws,
  faBehance,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { useSelector } from "react-redux";
import Products from "../Products";

const Home = () => {
  // Start Slider UseState
  const [data, setData] = useState(SliderData);
  const [index, setIndex] = useState(0);
  // End Slider UseState

  // Slider
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

  // user
  const { firstName, lastName } = useSelector((state) => state.user);

  // Scroll To Top
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (eo) => {
      if (window.scrollY >= 500) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Loader
  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    setTimeout(() => {
      setZIndex({ zIndex: "-1" });
    }, 3500);
  });
  return (
    <>
      <div className={scrollToTop ? 'scroll' : 'scroll hide-scroll'} onClick={scroll}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>

      <div className="container home-pg">
        <div className="landing">
          <div className="main-side">
            <aside className="side-bar side1">
              <ul className="list-side">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  {firstName === "" ? (
                    <Link to="/login" className="sign-btn">
                      SignUp
                    </Link>
                  ) : (
                    <h2 className="name-co">
                      {firstName} {lastName}
                    </h2>
                  )}
                </li>
              </ul>
            </aside>
            <aside className="side-bar side2">
              <h2>About</h2>
              <p className="info-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie vulputate mollis. Ut maximus tortorUt ma
                Lorem bulum molestie vulputate
              </p>
              <Link to="/" className="about-btn">
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
                  <img src={img} alt="img" />
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
          <div className="line-ads">
            <div className="box">
              <FontAwesomeIcon icon={faApple} className="brand" />
              <h4>Apple</h4>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faMicrosoft} className="brand" />
              <h4>Microsoft</h4>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faGoogle} className="brand" />
              <h4>Google</h4>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faAws} className="brand" />
              <h4>Aws</h4>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faBehance} className="brand" />
              <h4>Behance</h4>
            </div>
          </div>
        </div>
        <div div className="main-watches">
          <Products />
        </div>
      </div>
      <div className="loader-page" style={zIndex}>
        <h1>
          <span className="logo-load">Shopping</span>
        </h1>
        <br />
        <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
      </div>
    </>
  );
};

export default Home;
