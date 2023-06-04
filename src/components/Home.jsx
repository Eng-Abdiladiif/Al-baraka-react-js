import React from 'react'
import manshow  from "../assets/adverst man.png"
import  Features from "./Features"
import Icons from "./Icons"
import Emailint from './Emailint'
import Info from './Info'


function Home() {
  return (

    <>
    <div className=' flex justify-between  items-center  mt-10 flex-col-reverse md:flex-row
    space-y-5  '>


        {/*  left side  */}
        <div className='flex flex-col 
          space-y-10 p-2 mt-10'>

            <h1 className='text-4xl text-green-400 mt-2
            font-bold leading-3'>Al-Baraka vegetable</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit similique libero architecto accusantium in magni sit iste deleniti eius!     
            </p>
            <div  className='space-x-5'>
                <button className='px-5 py-2 bg-green-400 rounded-full text-white font-semibold'>vegetable</button>
                <button className='px-5 py-2 shadow-2xl border-2 border-green-400 rounded-full '>Buy Now</button>
            </div>
        </div>
        

  {/*  right side */}

        <div>

            <img src= {manshow} className='max-w-5xl' alt="" />
        </div>

      

        
    </div>



    < Features />
        <Info />
        < icons />
        < Emailint />

     
    
      

    </>
  )
}

export default Home;