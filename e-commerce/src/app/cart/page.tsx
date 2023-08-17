"use client"
import React from 'react'
import { remove } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

function cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state)=>state.cart)

  const handleRemove = (id: any) => {
    dispatch(remove(id))
  }
  return (
    <div>
      {
        cartitems.map((item: { image: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; id: any; })=>(
          <div>
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
            <button className='btn2' onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default cart