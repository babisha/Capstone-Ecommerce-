"use client";
import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux/es/exports';
import {add } from '@/redux/slice'

interface Iproduct {
  id : string,
  image: string,
  title: string,
  price: number, 

}
function Product() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();

  const  getproducts = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  }

  useEffect(()=>{
    getproducts();
  },[])

  const handleAdd=(product: Iproduct) => {
    dispatch(add(product));
  }
  return (
    <div className='flex flex-col p-10 border-rounded '>
       { products.map((product : Iproduct)=> (
        <div key={product.id} className='card'>
          <img src={product.image} alt="image" className='h-40' />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className='btn' onClick={()=>handleAdd(product)}>Add to cart</button>

        </div>
      ))
     }
    </div>
  )
}

export default Product