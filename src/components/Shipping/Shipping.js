import React from 'react';
import { useRecoilState } from 'recoil';
import { shippingState } from '../../store/atoms';

const Shipping = ({ destination }) => {
  const [shipping, setShipping] = useRecoilState(shippingState);

  return (
    <div>
      <h2>Shipping</h2>
      {Object.entries(destination).map(([country, price]) => {
        return (
          <button onClick={() => {
            setShipping(country)
          }}>
            {country} @ {price}
            {country === shipping ? <span>☺</span> : ""}
          </button>
        )
      })}
    </div>
  )
};

export default Shipping;
