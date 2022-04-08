import React from 'react'
import { Appconsumer } from './AppContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Model = () => {
    return (
        <Appconsumer>
            {(value) => {
                const { id, img, price ,title} = value.modelproduct;
                const { model } = value;
                if (!model) {
                    return null;
                }
                else {
                    return (
                        <Wrapper className='container'>
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-8 text-center text-capitalize p-5 bg-white border rounded">
                                    <h5 className='text-capitalize  font-weight-bold'>item added to the cart</h5>
                                    <img src={img} alt="products" className='img-fluid  '></img>
                                    <h5>{title} </h5>
                                    <h5 className='text-muted'>price:₹{price} </h5>
                                    <Link to='/'>
                                    <button className='btn btn-outline-primary my-2 text-capitalize' onClick={()=>{value.modelClose(id)}} >continue shopping</button>
                                    </Link>
                                    <Link to='/cart'>
                                    <button className='btn btn-outline-warning text-capitalize' onClick={()=>{value.modelClose(id)}}>go to cart</button>
                                    </Link>
                                </div>
                            </div>
                        </Wrapper>
                    )
                }
            }}
        </Appconsumer>
    )
}

const Wrapper = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
  background:var(--mainwhite);
}
`