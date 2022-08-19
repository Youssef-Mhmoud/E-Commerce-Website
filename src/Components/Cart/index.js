import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";



const Cart = () => {
  // Redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItem);
console.log(cart)
  return (
    <div className="container main-cart">
      <div>
        {cart &&
          cart.map((product) => {
            return <CartItem product={product} key={product.id} />;
          })}
      </div>
      <div className="general-setting">hello</div>
    </div>
  );
};

export default Cart;
