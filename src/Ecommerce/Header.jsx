import React, { useContext } from 'react'
import { DataContext } from './Main'

function Header() {
  const {cart} =useContext(DataContext)


  return (
   <nav>
    <a href="">ECOMMERCE</a>
   <ul className="main">
   <li><a href="">About us </a></li>
   <li><a href="">For Men </a></li>
   <li><a href="">For Women</a></li>

   <li><a href="/login" className='blue btn'>Login </a></li>
<li><a href="/cart">Cart <span>{cart.length}</span></a></li>
   </ul>
   </nav>
  )
}

export default Header
