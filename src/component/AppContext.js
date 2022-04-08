import React, { useEffect, useState } from 'react'
import { Productdetail,DetailProduct } from '../Data';

export const AppContext = React.createContext({
  list: [],
  addToCart: () => { },
  increment: () => { },
  decrement: () => { },
  removeItem: () => { },
  handledetail:()=>{},
  cart: [],
  detail:DetailProduct,
  model:false,
  modelproduct:DetailProduct,
  modelOpen:()=>{},
  modelClose:()=>{},
  subtotal:0,
  tax:0,
  Total:0,
  clearcart:()=>{}

});

export const AppProvider = (props) => {
  const [list, setList] = useState(Productdetail)
  const [cart, setCart] = useState([])
  const [detail,setDetail]=useState(DetailProduct)
  const [model,setModel]=useState(false);
  const [modelproduct,setModelproduct]=useState(DetailProduct);
  const [subtotal,setSubtotal]=useState(0);
  const [tax,setTax]=useState(0);
  const [Total,setTotal]=useState(0);

 const handledetail=(id)=>{
  //  console.log('handledetail',id);
   const product=list.find(item=>item.id===id)
   setDetail(product); //assignment to constant variable
   return product;
 }

  const addToCart = (id,price) => {
    // console.log('add to cart', id);
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          incart: true,
          count: 1,
          total:price
        };
        // console.log(updatedItem);
        cart.push(updatedItem);
        setDetail(updatedItem);
        return updatedItem;
      }
      return item;
    });
    // console.log(newList);
    setList(newList);
    // addtototal();
  }

  const modelOpen=(id)=>{
    const product=list.find(item=>item.id===id)
    setModelproduct(product); //assignment to constant variable
    setModel(true);
    return product;
  }

  const modelClose=(id)=>{
    setModel(false);
  }

  const setProduct=()=>{
    const newList = list.map((item) => {
        const updatedItem = {
          ...item,
          incart:false,
          count:0,
          total:0
        };
        // console.log(updatedItem);
        // setDetail(updatedItem);
        return updatedItem;
    });
    console.log('sP',newList);
    setList(newList);
  }

  const increment = (id, count,price) => {
    const newList = cart.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          count: count+1 ,
          total:price*(count+1)
        };
        // console.log(updatedItem);
        return updatedItem;
      }
      return item;
    });
    // console.log(newList);
    
    setCart(newList);
    
    
    // addtototal();
  }

  const decrement = (id, count,item,price,total) => {
    
    const newList = cart.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          count: count - 1,
          total: total-price
        };
        // console.log(updatedItem);
        return updatedItem;
      }

      return item;
    });
    // console.log(newList);
    setCart(newList);
    if(count===1){
      removeItem(item);
    }
    // addtototal();
  }

  const clearcart=()=>{
    setCart([]);
    setProduct();
    // addtototal();
  }

  const addtototal=()=>{
    let tempsubtotal=0;
    cart.map(item=>(tempsubtotal += item.total));
    // console.log(tempsubtotal);
    const temTax=subtotal * 0.1;
    const tempTotal=temTax + tempsubtotal;
      
    setSubtotal(tempsubtotal);
    setTax(parseFloat(temTax.toFixed(2)));
    setTotal(tempTotal);
  }

  const removeItem = (item) => {
    // console.log('removed',item.id);
    // cart.pop(item)
    let id=item.id;
    setCart(cart.filter((e) => {
      return e !== item;
 }))
 const newList = list.map((item) => {
   if (item.id === id) {
    const updatedItem = {
      ...item,
      incart: false,
      count: 0
    };
    // console.log(updatedItem);
    cart.push(updatedItem);

    return updatedItem;
  }
  return item;
});
// console.log(newList);
setList(newList);
// addtototal();
  }

  //using ustate we get required values instead of calling addtototal in functions

useEffect(()=>{
  addtototal();
});
  return (
    <AppContext.Provider value={{ list, addToCart, increment, decrement, removeItem,handledetail, cart,detail,model,modelproduct,modelOpen,modelClose,subtotal,tax,Total,clearcart }}>
      {props.children}
    </AppContext.Provider>
  )
}

const Appconsumer=AppContext.Consumer;

export { Appconsumer};