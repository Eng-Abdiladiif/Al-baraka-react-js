import React from 'react'
import avacado from "../assets/avacodo.png"
import banana from "../assets/mouse.png"
import watermelo  from "../assets/watemelo.png"

function Features() {
  return (

    <>
    <h1 className='text-center my-10 text-2xl font-bold 
      text-green-400'>Vegetables 🍏</h1>
    <div className=' justify-center items-center mx-auto flex flex-col md:flex-row sapce-y-5 mt-10
    md:space-x-10'>

    

      

      {/* cards */}

      <div className=' h-72 px-2 py-3 w-full md:w-max
      shadow-2xl   justify-center items-center text-center rounded-2xl
      hover:shadow-green-500  transtion-all duration-500
      hover:-translate-y-2 transition-all'>

        <div className='flex  flex-col justify-center items-center
        space-y-16' >
  
   {/* image */}
            <div>
                <img  src= {avacado} className='w-52' alt='' />

            </div>

            {/* contects */}
            <div>

             <h1 className='text-lg font-semibold text-green-700 
             '>avacado</h1>
             <p className='text-sm font-bold text-red-300'> $2</p>
            </div>
        </div>



        


      </div>

      {/* two */}
      <div className=' h-72 px-2 py-3 w-full md:w-max
      shadow-2xl   justify-center items-center text-center rounded-2xl
      hover:shadow-green-500 transtion-all duration-500
      hover:-translate-y-2 transition-all'>

        <div className='flex  flex-col justify-center items-center
        space-y-10' >
  
   {/* image */}
            <div>
                <img  src= {banana} className='w-52' alt='' />

            </div>

            {/* contects */}
            <div>

             <h1 className='text-lg font-semibold text-green-700 
             '>mouse</h1>
              <p className='text-sm font-bold text-red-300'> $3</p>
            </div>
        </div>



        


      </div>
      {/* three */}
      <div className=' h-72 px-2 py-3 w-full md:w-max
      shadow-2xl   justify-center items-center text-center rounded-2xl
      hover:shadow-green-500 transtion-all duration-500
      hover:-translate-y-2 transition-all '>

        <div className='flex  flex-col justify-center items-center
        ' >
  
   {/* image */}
            <div>
                <img  src= {watermelo} className='w-52' alt='' />

            </div>

            {/* contects */}
            <div>

             <h1 className='text-lg font-semibold text-green-700 
             '>watermelo</h1>
              <p className='text-sm font-bold text-red-300'> $5</p>
            </div>
        </div>



        


      </div>

      



    </div>
    </>
  )
}

export default Features