import React, { useContext } from 'react'
import { AppContext } from '../AppContext';

export default function Cartitem({item}) {
    const {id,title,img,price,total,count}=item;
    console.log('totals',item.total);
   const contextData=useContext(AppContext)
   const removeItem=(item)=>{
    contextData.removeItem(item);
    }
    const increment=(id,count,price)=>{
    contextData.increment(id,count,price);
    }
    const decrement=(id,count,item,price,total)=>{
        contextData.decrement(id,count,item,price,total);
    }

  return (
    <div className="row my-2 text-capitalize text-center teko">
    <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="product" className='img-fluid' style={{ width: '5rem', height: "5rem" }} />
    </div>
    <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none ">
            product:
        </span>
        {title}
    </div>
    <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
            price:
        </span>
        {price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
            <div>
                <span className="btn btn-black mx-1 border border-dark" onClick={() => decrement(id,count,item,price,total)}>
                    -
                </span>
                <span className="btn btn-black mx-1 border border-info" >
                    
                    {count}
                </span>
                <span className="btn btn-black mx-1 border border-dark" onClick={() => increment(id,count,price)}>
                    +
                </span>

            </div>
        </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <div className="cart-icon text-warning " style={{cursor: "pointer"}} onClick={()=>removeItem(item)}>
         <i className="fas fa-trash"></i>
     </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <strong>
    item total: ₹  {total}
     </strong>
    </div>
</div>
  )
}
