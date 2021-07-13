import { cartState } from './atoms';
import { shippingState } from './atoms';
import { selector } from 'recoil';
import { inventory } from './inventory';
import { destinations } from './destinations';

export const totalsState = selector({
  key: 'totalsState',
  get: ({ get }) => {
    const cart = get(cartState);
    console.log(cart);
    const shipping = get(shippingState);
    const subtotal = Object.entries(cart).reduce(
      (acc, [id, quantity]) => acc + inventory[id].price * quantity,
      0
    );
    const shippingTotal = destinations[shipping];
    return {
      subtotal,
      shipping: shippingTotal,
      total: subtotal + shippingTotal
    };
  }
});
