import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Appconsumer, AppContext } from './AppContext'

export default function Detail() {
  // // const { detail } = useContext(AppContext);
  // const contextData=useContext(AppContext);
  // const addToCart=(id,price)=>{
  //   contextData.addToCart(id,price);
  // }
  // const { title } = detail;
  // console.log(detail.title);
  return (
    <Appconsumer>
      {(value) => {
        // console.log(value.detail);
        const { id, company, img, info, price, title ,incart } = value.detail;
        return (
          <Wrapper className='container my-4'>
            <h1 className='text-center'>{title} </h1>
            <div className="d-flex justify-content-evenly">
             <div>
               <img src={img} alt="product"  />
             </div>
             <div className='text-capitalize p-5 '>
               <h2 className='py-2'>model: {title} </h2>
               <h3 className='text-uppercase text-muted py-2'>made by : {company} </h3>
              <h4 className='py-1' >price: ${price} </h4>
              <h6 >some information about product : </h6>
              <p className='text-muted'> {info} </p>
              <div className=''>
                <Link to='/'>
                <button className='btn btn-outline-primary me-2 text-capitalize'>back to product</button>
                </Link>
                <button className='btn btn-outline-warning text-capitalize' disabled={incart ? true : false} 
                onClick={()=>{
                  value.addToCart(id,price);
                  value.modelOpen(id);
                  }} >
                  {incart?"incart":"Add to Cart"}
                  </button>
              </div>
             </div>
            </div>
          </Wrapper>
        )
      }}

    </Appconsumer>

  );
}

const Wrapper = styled.div`

`