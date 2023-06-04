import React from 'react'

function Contect() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-around items-center m-10
    spmd:space-x-10'>


      {/* left side  */}

      <div className=' h-72 w-full 
      shadow-2xl  py-5 md:w-max px-10 flex flex-col
      r text-center space-y-5 shadow-green-400'>

        <h1 className='text-lg text-green-400 font-bold uppercase'>info 📌 </h1>

        <h2 className='text-black font-semibold'> Email : Abdiladiifsaalax999@gmail.com </h2>
        <h2 className='text-black font-semibold'> area  : Manhal</h2>
        <h2 className='text-black font-semibold'> Tell  : 063 - 4991173</h2>
        <h2 className='text-black font-semibold'> facebook : Al-Baraka</h2>



      </div>

      {/* right side */}


      <div className=' w-full md:w-max py-5 px-16 shadow-2xl
      shadow-green-400'>

        <div className='space-y-2'>

          <h1 className='font-bold text-lg text-green-400 text-center py-4'>Registration product 🍏</h1>

           
           <div className='flex flex-col space-y-3'>
             <label className='text-black font-bold text-lg'>Name</label>
             <input type="text" className='py-2 px-5 border-2 rounded-md border-green-600 outline-none' placeholder='Enter your Name
             ' />
           </div>

           {/* Email */}
           <div className='flex flex-col space-y-3'>
             <label className='text-black font-bold text-lg'>Email</label>
             <input type="Email" className='py-2 px-5 border-2 rounded-md border-green-600 outline-none' placeholder='Enter your Emali
             ' />
           </div>
           {/* Tellphone */}
           <div className='flex flex-col space-y-3'>
             <label className='text-black font-bold text-lg'>Telephone</label>
             <input type="number" className='py-2 px-5 border-2 rounded-md border-green-600 outline-none' placeholder='Telephone
             ' />
           </div>
           {/* product name */}
           <div className='flex flex-col space-y-3'>
             <label className='text-black font-bold text-lg'>Product Name</label>
             <input type="text" className='py-2 px-5 border-2 rounded-md border-green-600 outline-none' placeholder='Product Name...
             ' />
           </div>
          {/* price */}
          <div className='flex flex-col space-y-3'>
             <label className='text-black font-bold text-lg'>Price</label>
             <input type="number" className='py-2 px-5 border-2 rounded-md border-green-600 outline-none' placeholder='Price...
             ' />
           </div>
        </div>

        <div className='my-5 text-center'>
          <button type="submit" className='px-4 py-2 bg-green-600
          text-semibold uppercase rounded-md text-white'>submit</button>
        </div>


      </div>




    </div>
  )
}

export default Contect