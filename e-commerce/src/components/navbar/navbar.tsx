"use client";
import React from 'react'
import Link from 'next/link'
import Search from '../search/search'
import { useSelector } from 'react-redux'

function Navbar() {
  const item = useSelector((state)=>state.cart)
  return (
    <div className='flex justify-between mb-4 p-2 bg-indigo-200'>
        <h1>lets-breathee</h1>
        <div> 
          <Link href={'/'}>HOME </Link>
        </div>
        <div> 
        <Link href={'/product'}>SHOP </Link>
        </div>
        <div>
        <Link href={'/album'}> ALBUM</Link>
        </div>
        <div>
        <Link href={'/blog'}>STORY </Link>
        </div>
        <div>
        <Link href={'/cart'}>CART </Link>
        </div>
        <Search />
        <span>Items:{item.length}</span>
      </div>
    
  )
}

export default Navbar