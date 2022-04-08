import React from 'react'

export default function Title(props) {
  const {name,title}=props;
  return (
    <div className='row'>
    <div className="col-10 mxauto my-2 text-center text-title">
        <h1 className='text-capitalize font-weight-bold lg'>
            {name}  <strong className='text-blue'>{title}</strong>
            </h1>
        </div>

    </div>
  )
}
