import React from 'react'
import ManThinking from '../ManThinking.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Cards1 = () => {
  return (
    <>
      <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ">
        <a href='/'>
          <img className="rounded" src={ManThinking} alt="" />
        </a>
        <div className="p-5 text-black text-center">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Varunraje</h5>
          </a>
          <p className="mb-3 font-normal">Developer</p>
          <p className="mb-3 font-normal">Male, 20</p>
        </div>
        <div className='flex justify-center gap-3'>
          <a href='/'><AiOutlineInstagram size={42} className='text-pink-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiOutlineWhatsApp size={42} className='text-green-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><FaLinkedinIn size={42} className='text-blue-700 rounded bg-white p-1 cursor-pointer' /></a>
          <a href='/'><AiFillGithub size={42} className='rounded bg-black p-1 cursor-pointer' /></a>
        </div>
      </div>

    </>
  )
}

export default Cards1