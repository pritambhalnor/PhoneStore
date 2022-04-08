import React,{useContext} from 'react'
import Cartcolumn from './Cartcolumn';
import Title from './Title';
import Cartlist from './Cartlist';
import Emptycart from './Emptycart';
import { AppContext } from '../AppContext';
import { Carttotal } from './Carttotal';

export default function Cart() {
  const {cart}=useContext(AppContext);
    // console.log('cart',cart,'length',cart.length);
  return (
    <div>
      {cart.length > 0 ? 
      (
      <>
        <Title name="your" title="cart" />
          <Cartcolumn />
          <Cartlist cart={cart} />
          <Carttotal cart={cart} />
      </>)
      :
      (
      <>
      <Emptycart />
      </>
      )}
      
    </div>
  )
}
