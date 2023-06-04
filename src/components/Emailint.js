import React from 'react'

function Emailint() {
  return (
    <>

     
    <div className='w-full bg-green-600 py-10 mt-10 
    flex flex-col justify-center items-center space-y-5 text-center rounded-md
    hover:shadow-2xl shadow-gray-900 transition-all duration-500'>
     
     <h1 className='text-3xl text-white font-bold'>search items 🍓 </h1>

        <div className='space-x-5'>

            <input  type='text' className='py-2 px-10 rounded-md outline-none
            ' placeholder='searching'></input>
            <button className='px-5 py-2 bg-orange-400 text-white font-semibold
            hover:bg-orange-700 transition-all duration-500 rounded-lg'>Search</button>
        </div>



        
    </div>
    </>
  )
}

export default Emailint