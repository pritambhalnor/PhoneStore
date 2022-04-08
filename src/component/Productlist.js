import React from 'react'
import Product from './Product';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function Productlist() {
  // const [list, setList] = React.useState(Productdetail);
  const { list}= useContext(AppContext);


  return (
    <div className='py-5 bg-light'>
      <div className='container'> 
      <h1 className='text-center text-capitalize'>our products</h1>
      <div className='row'>
      {list.map((store) => <Product key={store.id} store={store} 
      />)}
      </div>
      </div>
    </div>
  )
}

// ReactDOM.render(<Productlist />, document.getElementById('root'));

