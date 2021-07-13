import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { inventory } from './store/inventory';
import { destinations } from './store/destinations';
import AvailableItems from './components/AvailableItems/AvailableItems';
import Cart from './components/Cart/Cart';
import Shipping from './components/Shipping/Shipping';
import Totals from './components/Totals/Totals';

function App() {
  return (
    <RecoilRoot>
      <AvailableItems inventory={inventory} />
      <Cart inventory={inventory} />
      <Shipping destination={destinations} />
      <Totals />
    </RecoilRoot>
  );
}



export default App;
