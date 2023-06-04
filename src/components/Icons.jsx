import React from 'react'
import onon from "../assets/onone-removebg-preview.png"
import potatto from "../assets/batata.jpg"
import garli  from "../assets/garlic-removebg-preview.png"
import  capisum from "../assets/capsicum-removebg-preview.png"


function Icons() {
  return (
    <div className='mt-20'>

      <h1 className='text-center py-5 font-bold text-green-400'>items 🍎</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto justify-center items-center'>



         {/* cards  */}

         <div className='h-40 w-40 shadow-md  shadow-green-400 md:grid-cols-4 py-3 px-4 
         flex flex-col justify-center items-center rounded-full
         hover:shadow-2xl hover:shadow-green-400 transition-all duration-500'>

          <div>

            <img src= {onon} alt="" />

          </div>

          {/* items */}

          <div>
            <h1>Onon</h1>
          </div>

         </div>


         {/* two */}

         <div className='h-40 w-40 shadow-md  shadow-green-400 md:grid-cols-4 py-3 px-4 
         flex flex-col justify-center items-center rounded-full
         hover:shadow-2xl hover:shadow-green-400 transition-all duration-500'>

          <div>

            <img src= {potatto} alt="" />

          </div>

          {/* items */}

          <div>
            <h1 className='font-semibold text-green-600'>potato</h1>
          </div>

         </div>

         {/* three */}

         <div className='h-40 w-40 shadow-md  shadow-green-400 md:grid-cols-4 py-3 px-4 
         flex flex-col justify-center items-center rounded-full
         hover:shadow-2xl hover:shadow-green-400 transition-all duration-500'>

          <div>

            <img src= {garli} className='w-20' alt="" />

          </div>

          {/* items */}

          <div>
            <h1 className='font-semibold text-green-600'>Garlic</h1>
          </div>

         </div>

         {/* four */}

         <div className='h-40 w-40 shadow-md  shadow-green-400 md:grid-cols-4 py-3 px-4 
         flex flex-col justify-center items-center rounded-full
         hover:shadow-2xl hover:shadow-green-400 transition-all duration-500'>

          <div>

            <img src= {capisum} className='w-20' alt="" />

          </div>

          {/* items */}

          <div>
            <h1 className=' text-green-600 font-semibold'>Capisum</h1>
          </div>

         </div>

        </div>



    </div>
  )
}

export default Icons