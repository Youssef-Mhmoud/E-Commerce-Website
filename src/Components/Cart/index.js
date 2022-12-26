import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import Loader from "react-loaders";
import "./index.scss";
import { clear, total } from "../../redux/Slices/cartSlice";
import svgImgBg from "../../assests/imgs/bg-2.svg";
import svgCart from "../../assests/imgs/Empty.svg";

const Cart = () => {
  // Redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);

  const [zIndex, setZIndex] = useState();

  useEffect(() => {
    setTimeout(() => {
      setZIndex({ zIndex: "-1" });
    }, 3500);
  });
  return (
    <>
      <div className="container main-cart">
        {/* <div
          style={{ backgroundImage: `url(${svgImgBg})` }}
          className="bgSvg"
        ></div> */}
        <div>
          {cart.cartItem.length === 0 ? (
            <div className="cart-empty">
              <p>Your Cart Is Currently Empty</p>
              <div className="start-shopping">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 793.514 562.941"
                  className="cartSvg"
                >
                  <g>
                    <g>
                      <path
                        d="M172.366,283.564a2.186,2.186,0,0,1-2.186-2.186V219.7a2.186,2.186,0,1,1,4.372,0v61.676A2.186,2.186,0,0,1,172.366,283.564Z"
                        fill="#262626"
                      ></path>
                      <g>
                        <line
                          x1="192.49"
                          y1="250.54"
                          x2="152.242"
                          y2="250.54"
                          fill="#fff"
                        ></line>
                        <path
                          d="M192.489,252.726H152.242a2.186,2.186,0,1,1,0-4.372h40.247a2.186,2.186,0,1,1,0,4.372Z"
                          fill="#262626"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <path
                        d="M700.757,438.158a1.542,1.542,0,0,1-1.542-1.542V403.535a1.542,1.542,0,0,1,3.083,0v33.081A1.541,1.541,0,0,1,700.757,438.158Z"
                        fill="#262626"
                      ></path>
                      <g>
                        <line
                          x1="711.551"
                          y1="420.075"
                          x2="689.963"
                          y2="420.075"
                          fill="#fff"
                        ></line>
                        <path
                          d="M711.551,421.617H689.963a1.542,1.542,0,1,1,0-3.083h21.588a1.542,1.542,0,1,1,0,3.083Z"
                          fill="#262626"
                        ></path>
                      </g>
                    </g>
                    <g>
                      <path
                        d="M633.835,53.867a1.542,1.542,0,0,1-1.542-1.542V19.244a1.542,1.542,0,0,1,3.084,0V52.325A1.542,1.542,0,0,1,633.835,53.867Z"
                        fill="#262626"
                      ></path>
                      <g>
                        <line
                          x1="644.629"
                          y1="35.784"
                          x2="623.041"
                          y2="35.784"
                          fill="#fff"
                        ></line>
                        <path
                          d="M644.629,37.326H623.041a1.542,1.542,0,0,1,0-3.083h21.588a1.542,1.542,0,1,1,0,3.083Z"
                          fill="#262626"
                        ></path>
                      </g>
                    </g>
                    <path
                      d="M741.029,562.941H187.922a1.5,1.5,0,0,1,0-3H741.029a1.5,1.5,0,0,1,0,3Z"
                      fill="#262626"
                    ></path>
                    <g>
                      <path
                        d="M590.173,501.079H323.727a2,2,0,0,1-1.965-1.65L234.717,3.991H152.051a2,2,0,0,1,0-3.991h84.342a2,2,0,0,1,1.965,1.65L325.4,497.088h264.77a2,2,0,0,1,0,3.991Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M627.793,363.857h-328.4a2,2,0,1,1,0-3.991H626.279l63.8-228.09H260.38a2,2,0,0,1,0-3.991H692.71a1.995,1.995,0,0,1,1.921,2.533L629.714,362.4A2,2,0,0,1,627.793,363.857Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M471.306,361.9a2,2,0,0,1-2-2V133.7a2,2,0,0,1,3.99,0V359.9A2,2,0,0,1,471.306,361.9Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M525.789,361.9c-.058,0-.117,0-.175-.008a1.994,1.994,0,0,1-1.815-2.16l19.619-226.2a1.995,1.995,0,1,1,3.975.345l-19.619,226.2A1.994,1.994,0,0,1,525.789,361.9Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M580.27,361.9a1.919,1.919,0,0,1-.344-.03,1.994,1.994,0,0,1-1.624-2.307l39.237-226.2a1.995,1.995,0,0,1,3.931.683l-39.237,226.2A2,2,0,0,1,580.27,361.9Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M416.823,361.9a1.994,1.994,0,0,1-1.985-1.823l-19.619-226.2a1.995,1.995,0,0,1,3.975-.345l19.619,226.2a1.994,1.994,0,0,1-1.815,2.16C416.94,361.892,416.881,361.9,416.823,361.9Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M362.342,361.9a1.994,1.994,0,0,1-1.963-1.654L320.461,130.122a1.995,1.995,0,1,1,3.931-.683L364.31,359.558a1.994,1.994,0,0,1-1.624,2.307A1.919,1.919,0,0,1,362.342,361.9Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M671.755,206.471H272.54a2,2,0,1,1,0-3.991H671.755a2,2,0,0,1,0,3.991Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M650.458,284.947H287.609a2,2,0,0,1,0-3.991H650.458a2,2,0,0,1,0,3.991Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M352.864,504.665A25.938,25.938,0,1,1,326.926,530.6a25.967,25.967,0,0,1,25.938-25.938m0-3.99A29.928,29.928,0,1,0,382.792,530.6a29.929,29.929,0,0,0-29.928-29.928Z"
                        fill="#262626"
                      ></path>
                      <path
                        d="M557.738,504.491A25.938,25.938,0,1,1,531.8,530.429a25.966,25.966,0,0,1,25.937-25.938m0-3.99a29.928,29.928,0,1,0,29.929,29.928A29.928,29.928,0,0,0,557.738,500.5Z"
                        fill="#262626"
                      ></path>
                    </g>
                    <path
                      d="M207.45,560.357c-72.832,0-125.684-73.968-104.7-147.534,11.866-41.6,35.44-82.195,80.27-106.815,122.679-67.375,111.872-48.9,169.7-162.119s205.392-125.453,287.515-45.7c116.154,112.8,47.184,188.036,120.69,265.57q1.147,1.212,2.266,2.436c66.412,72.741,16.437,194.164-79.3,194.164Z"
                      fill="#969EAA"
                      opacity="0.1"
                    ></path>
                    <path
                      d="M241.253,438.116H63.23a1.5,1.5,0,0,1,0-3H241.253a1.5,1.5,0,0,1,0,3Z"
                      fill="#262626"
                    ></path>
                    <path
                      d="M85.827,506.165H1.5a1.5,1.5,0,0,1,0-3H85.827a1.5,1.5,0,0,1,0,3Z"
                      fill="#262626"
                    ></path>
                  </g>
                </svg>
                <Link to="/">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="title">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItem &&
                  cart.cartItem.map((product) => {
                    return <CartItem product={product} key={product.id} />;
                  })}
              </div>
              <div className="cart-summary">
                <button className="clear" onClick={() => dispatch(clear())}>
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button>Check Out</button>
                  <div className="continue-shopping">
                    <Link to="/">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span>Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="loader-page" style={zIndex}>
        <h1>
          <span className="logo-load">SHOPPIng</span>
        </h1>
        <br />
        <Loader type="ball-clip-rotate-multiple" innerClassName="load" />
      </div>
    </>
  );
};

export default Cart;
