import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from '../../store/atoms';

const AvailableItems = ({ inventory }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const inventoryEntries = Object.entries(inventory);

  return (
    <div>
      <h2>AvailableItems</h2>
      <pre>
        {JSON.stringify(cart)}
      </pre>
      <ul>
        {inventoryEntries.map(([id, { name, price }]) => {
          return (
            <li key={id}>
              {name} @ ${price.toFixed(2)}
              <button onClick={() => {
                setCart({ ...cart, [id]: (cart[id] || 0) + 1 })
              }}>Add</button>
              {
                cart[id] && <button onClick={() => {
                  const copy = { ...cart };
                  if (copy[id] === 1) {
                    delete copy[id];
                    setCart(copy)
                  } else {
                    setCart({ ...copy, [id]: copy[id] - 1 })
                  }
                }}>
                  Remove
                </button>
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AvailableItems
