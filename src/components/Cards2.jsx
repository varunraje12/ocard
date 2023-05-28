import React from 'react'
import ManThinking from '../ManThinking.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Cards2 = () => {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-orange-500 to-yellow-300">
        <a href='/'>
          <img class="rounded-t-lg" src={ManThinking} alt="" />
        </a>
        <div class="p-5 text-black text-center">
          <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pranjal Maurya</h5>
          </a>
          <p class="mb-3 font-semibold">Enterpreneur</p>
          <p class="mb-3 font-medium">Male ,21</p>
        </div>
        <div className='flex justify-center gap-3  '>
          <a href='/'><AiOutlineInstagram size={42} className='text-pink-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiOutlineWhatsApp size={42} className='text-green-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><FaLinkedinIn size={42} className='text-blue-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiFillGithub size={42} className='rounded bg-black p-1 cursor-pointer' /></a>
        </div>
      </div>

    </>
  )
}

export default Cards2