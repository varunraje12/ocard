import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";

const Footor = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* <h3 className='text-2xl text-white font-bold'>OCARDS</h3> */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow us on</h2>
            <div className="flex gap-3 py-2">
              <a href="https://www.instagram.com"><AiOutlineInstagram size={42} className='text-amber-700 rounded-full p-1 cursor-pointer' /></a>
              <AiOutlineWhatsApp size={42} className='text-green-700 rounded-full p-1 cursor-pointer' />
              <a href="https://www.youtube.com"> <AiFillYoutube size={42} className='text-red-500 rounded-full p-1 cursor-pointer' /></a>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h2 className="text-white">This site is made with 💖 by <a href="/" className="text-warning hover:underline">Appwrite</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Footor