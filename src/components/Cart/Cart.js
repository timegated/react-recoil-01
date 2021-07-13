import React from 'react'
import CartItems from './CartItems';

const Cart = ({ inventory }) => {
  return (
    <div>
      <h2>Cart</h2>
      <CartItems inventory={inventory} />
    </div>
  )
}

export default Cart
