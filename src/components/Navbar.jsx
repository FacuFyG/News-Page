import React from 'react'
import burger from '../assets/images/icon-menu.svg'

const Navbar = () => {
  return (
    <>
    <ul className=' hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around p-4 sm:text-4 sm:items-center'>
        <li className=' hover:text-Grayishblue'><a href="#">Home</a></li>
        <li className=' hover:text-Grayishblue'><a href="#">New</a></li>
        <li className=' hover:text-Grayishblue'><a href="#">Popular</a></li>
        <li className=' hover:text-Grayishblue'><a href="#">Trending</a></li>
        <li className=' hover:text-Grayishblue'><a href="#">Categories</a></li>
    </ul>
    <img className='w-10 h-6 cursor-pointer sm:hidden' src={burger} alt="" />
    </>
    
  )
}

export default Navbar

