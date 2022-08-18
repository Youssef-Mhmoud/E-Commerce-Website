import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProducts } from '../../redux/Slices/productSlice';
import CartItem from './CartItem/CartItem'

const Cart = () => {
    // Redux
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  

    
  return (
    <div>
          {cart && cart.map((product) => {
            return <CartItem product={product} key={product.id}/>;
          })}
    </div>
  )
}

export default Cart
