import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function Product({store}) {
  const { id, title, incart, price, img,company,info}=store;
  const contextData = useContext(AppContext);
  
  function addtocart(id,price) {
    contextData.addToCart(id,price);
  }
  function handledetail(id){
    contextData.handledetail(id);
  }

  function modelOpen(id){
    contextData.modelOpen(id);
  }
  return (
    <Wrapper className='col-9  col-md-6 col-lg-3  my-3 '>
      {/* <li>{title}</li> */}
      <div className="card s">
        <div className="img-container p-5" onClick={()=>{handledetail(id)}} >
          <Link to='/Detail'>
          <img src={img} alt="" className='card-img-top'  />
          </Link>
          <button className='cart-btn btn btn-primary' disabled={incart ? true : false} 
          onClick={() => {
             addtocart(id,price) ;
             modelOpen(id);
          
          } } >
            {incart ? (<span>In Cart</span>) : (<i className='fa fa-shopping-cart ' />)} </button>
        </div>
        <div className="card-body d-flex justify-content-between">
          <div className="card-title"> {title} </div>
          <div> ₹{price} </div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
.s{
  box-shadow: 3px 7px 7px #888888;
}
.s:hover{
  box-shadow: 5px 10px 10px #888888;
}
.img-container{
  position:relative;
  overflow: hidden;
}
.card-img-top{
  cursor:pointer;
  transition:all 1s linear;
}
.img-container:hover .card-img-top{
transform:scale(1.2);
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  // border:none;
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
  transition:all 1s linear;
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn:hover{
  color:var(--mainblue);
  cursor:pointer;
}
`