import React from 'react'
import manshow from '../assets/man show.png'

function Info() {
  return (

    <>
    <h1 className='mt-10 text-center text-2xl font-bold text-green-500 '>showcase 🥗</h1>
    <div  className='flex justify-between items-center flex-col md:flex-row '>


 {/* left side */}

   
        
        <div>

            <img src= {manshow} className='max-w-5xl' alt=' ' />

            
        </div>

        {/* right side */}

        <div className='flex flex-col  space-y-5 mt-5'>

            <h1 className='text-3xl font-semibold text-green-400'>Adeege Al-Baraka</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit similique libero architecto accusantium in magni sit iste deleniti eius! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit similique libero architecto accusantium in magni sit iste deleniti eius!
            </p>

        </div>



    </div>
    </>
  )
}

export default Info