import React from 'react';
import { cartState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';

const CartItems = ({ inventory }) => {
  const cart = useRecoilValue(cartState);
  const cartEntries = Object.entries(cart);
  if(Object.keys(cart).length === 0) return <p>No Items</p>
  return (
    <ul>
      {cartEntries.map(([id, quantity]) => {
        return (
          <li key={id}>
            {inventory[id].name} x {quantity}
          </li>
        )
      })}
    </ul>
  )
};

export default CartItems;
