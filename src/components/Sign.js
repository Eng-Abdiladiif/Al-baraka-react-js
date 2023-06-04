import React from "react";
import google from "../assets/google.jpg";

function Sign() {
  return (
    <div
      className="max-w-5xl mx-auto w-full md:w-max 
    h-screen flex flex-col justify-center items-center 
     "
    >
      <div className="py-5 px-10 shadow-2xl  space-y-5 border-2 border-gray-300 rounded-md ">
        {/* text ana image */}
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className=" justify-center items-center">
            <img src={google} className="w-16" alt="" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl">Sign in</h1>
            <p className="text-sm">to Continues to Gmail</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label>Email or Phone</label>
          <input
            type="text"
            className="outline-none border-b-2 border-gray-400"
            placeholder="Enter Email or text"
          />
        </div>
        <div>
          <h1 className="text-blue-500">Forget email?</h1>
        </div>

        <div>

            <p>Not your Computer? Use guess  to sign the private</p>
            <span className="text-blue-800">Learm more</span>
        </div>

        <div className="flex  justify-between">

            {/* accouts */}
            <div>
                <h1>
                   <a  href="/email" className="text-blue-800">
                    Create new accout
                   </a>
                </h1>
            </div>
            {/* butons */}
            <div>

                <button className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
