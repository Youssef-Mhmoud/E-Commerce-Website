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
import Products from "../Products";
import { useRef } from "react";
import Loader from "react-loaders";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../redux/Slices/productsSlice";

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

  // user 
  const {firstName, lastName} = useSelector(state => state.user)

  // Scroll To Top
  const scrollToTop = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (eo) => {
      if (window.scrollY >= 500) {
        scrollToTop.current.classList.add("show");
      } else {
        scrollToTop.current.classList.remove("show");
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
  const indexRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      indexRef.current.style.zIndex = "-1";
    }, 3500);
  });
  return (
    <>
      <div className="scroll" ref={scrollToTop} onClick={scroll}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div className="container home-pg">
          <>
            <div className="landing">
              <div className="main-side">
                <aside className="side-bar side1">
                  <ul className="list-side">
                    <li>
                      <h2>{firstName} {lastName}</h2>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                  </ul>
                </aside>
                <aside className="side-bar side2">
                  <h2>About</h2>
                  <p className="info-about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum molestie vulputate mollis. Ut maximus tortor
                    
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
          </>
        <Products />
      </div>
      <div className="loader-page" ref={indexRef}>
        <h1>
          <span className="logo-load">SHOPPIng</span>
        </h1>
        <br />
        <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
      </div>
    </>
  );
};

export default Home;
