import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='row'>
       <div className="bg-mainblue text-white navbar navbar-expand-sm navbar-dark  px-sm-5 d-flex justify-content-between align-items-center">
          <Link to='/' className='text-decoration-none' >
            <div className='d-flex mx-4 text-white '>
            <i className='fa-solid fa-phone me-4 my-auto text-decoration-none text-white' />
            <h3 className='text-capitalize'>products</h3>
            </div>
            </Link> 
          <Link to='/Cart'> <button className='btn btn-success h-lightblue'>
            <i className='fa fa-shopping-cart' /> Mycart</button></Link>
       </div>
    </div>
  )
}
