import React from 'react'
import ManThinking from '../ManThinking.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Cards2 = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-orange-500 to-yellow-300 cursor-pointer">

        <img className="rounded-t-lg" src={ManThinking} alt="" />

        <div className="p-5 text-black text-center">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pranjal Maurya</h5>

          <p className="mb-3 font-semibold">Enterpreneur</p>
          <p className="mb-3 font-medium">Male ,20</p>
        </div>
        <div className='flex justify-center gap-3 py-2'>
          <a href='/'><AiOutlineInstagram size={42} className='text-pink-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiOutlineWhatsApp size={42} className='text-green-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><FaLinkedinIn size={42} className='text-blue-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><SiGmail size={42} className='text-red-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiFillGithub size={42} className='rounded bg-black p-1 cursor-pointer' /></a>
        </div>
      </div>

    </>
  )
}

export default Cards2