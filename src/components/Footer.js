import React from 'react'
import logo from "../assets/greenery.png"

function Footer() {
  return (
    <div className=' mt-10'>

<div className='flex flex-col md:flex-row justify-around items-center
w-full bg-green-400  '>

  

  {/* images */}

  <div className='py-5'>
    <img src= {logo} className='w-20' alt='' />

  </div>

  <div className='flex flex-col md:flex-row justify-center items-center 
  space-y-5 md:space-x-5 p-2 text-center'>

    {/* items one */}

    <div className=' pt-4 space-y-2'>

        <h1 className='py-2 font-bold '>occuption</h1>
        <h1 className='font-semibold'>Erigavo/sanaage</h1>
        <h1 className='font-semibold'>ceerigaabo</h1>

    </div>
    {/* items-two */}
    <div className='space-y-2 '>

        <h1 className='py-2 font-bold '>info 📌</h1>
        <h1 className='font-semibold'>Abdiladiifsaalax999@gmail.com</h1>
        <h1 className='font-semibold'> location / Manhal area</h1>

    </div>
    {/* items three */}
    <div className='space-y-2 '>

        <h1 className='py-2 font-bold '>  Tell 🏧</h1>
        <h1 className='font-semibold'>0634991174</h1>
        <h1 className='font-semibold'>0906008986</h1>

    </div>
  </div>


</div>
        
    </div>
  )
}

export default Footer