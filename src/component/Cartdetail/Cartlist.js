import React, { useContext } from 'react'
// import { AppContext } from '../AppContext';
import Cartitem from './Cartitem';

export default function Cartlist({cart}) {
  // console.log(cart);
  return (
    <div className='container-fluid'>
        {cart.map(item=>{
          return <Cartitem key={item.id} item={item}  />
        })}
        
    </div>
  )
}
