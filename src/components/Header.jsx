import React, { useState } from 'react'
import logo from "../assets/greenery.png"
import { Link } from 'react-router-dom'
import  menu  from "../assets/menu.png"

function Header() {

  const [open , setOpen]  = useState(false);
  console.log(open)
  return (
    
    <div className='flex    justify-between items-center
    shadow-sm'>

        {/* lrft side */}

        <div>

            <img src={logo} alt="" />
        </div>

        <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>

          <img src= { menu} className='w-8 bg-green-500 rounded-lg' 
            alt="" />
        </div>

        {/* right side */}

        {/* Deskutop */}

        <div className='  items-center text-center space-x-5
        hidden md:flex'>

            <Link to= "/"
            className=' font-semibold hover:border-b-2 border-green-300 transition-all duration-500'>Home</Link>
            <Link to="/vegetable" className='font-semibold hover:border-b-2 border-green-300 transition-all duration-500'>vegetable</Link>

            <Link to= "/contect" className='font-semibold hover:border-b-2 border-green-300 transition-all duration-500'>Contect</Link>
            <Link to= "/login"
            className='px-5 py-2 bg-green-400 
            rounded text-white text-sm font-semibold
            hover:bg-green-700 transition-all duration-500'>login</Link>
        </div>


        {/* mobile   */}

        <div className={` items-center text-center space-x-5
        md:hidden flex flex-col absolute right-0 top-20 rounded-lg
        h-screen w-52  space-y-20 py-10 shadow-2xl bg-white
        ${open ? "flex" : "hidden"}`}>

            <Link to= "/"
            className='font-semibold hover:border-b-2 border-green-300 transition-all duration-500                hover:shadow-lg'>Home</Link>
            <Link to= "/vegetable"  className=' font-semibold hover:border-b-2 border-green-300 transition-all duration-500 hover:shadow-lg'>Vegetable</Link>
            <Link to= "/contect" className= ' font-semibold hover:border-b-2 border-green-300 transition-all duration-500  hover:shadow-lg'>Contect</Link>
            <Link to= "/login"
            className='px-5 py-2 bg-green-400 
            rounded text-white text-sm font-semibold
            hover:bg-green-700 transition-all duration-500'>login</Link>
        </div>


    </div>
  );
}

export default Header;