import React from 'react'
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom'
import ManThinking from './ManThinking.png'

export const Home = () => {
  const navigate = useNavigate()

  function change() {
    navigate('/ocards')
  }

  return (
    <>
      <div className='flex justify-center items-center p-3 h-[350px]'>
        <div>
          <h1 className='text-4xl font-bold p-2 text-center'>WELCOME TO OCARDS</h1>
          <div className='text-xl text-center'>
            <Typewriter
              options={{
                strings: ['Are you Tried of using Traditional Bussiness Card ? '],
                loop: true,
                autoStart: true
              }}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center '>
        <button onClick={change} className='bg-blue-500 p-3 rounded-md text-black hover:text-white hover:bg-blue-300 cursor-pointer'>Switch to OCards</button>
      </div>

      <div className='flex justify-center p-4'>
        <img src={ManThinking} alt='Man Thinking' width={250} height={250} />
      </div>

      <div className='text-center p-11'>
        <h2 className='text-3xl font-bold'>Switch to OCards</h2>
        <div className='text-xl font-bold'>OCard Benefits</div>
        <div>
          <ul>
            <li>
              <Typewriter
                options={{
                  strings: ['All Social Links are at one place.'],
                  loop: true,
                  autoStart: true
                }}
              />
            </li>
            <li>
              <Typewriter
                options={{
                  strings: ['All links are clickable'],
                  loop: true,
                  autoStart: true
                }}
              />
            </li>
            <li>
              <Typewriter
                options={{
                  strings: ['Beautiful UI'],
                  loop: true,
                  autoStart: true
                }}
              />
            </li>
            <li>
              <Typewriter
                options={{
                  strings: ['No need to print Card'],
                  loop: true,
                  autoStart: true
                }}
              />
            </li>
            <li>
              <Typewriter
                options={{
                  strings: ['Easy to share online'],
                  loop: true,
                  autoStart: true
                }}
              />
            </li>
          </ul>
        </div>

        <div className='text-2xl font-bold'>
          <Typewriter
            options={{
              strings: ['Get Your OCard at Rs.50'],
              loop: true,
              autoStart: true
            }}
          />
        </div>

        <button className='bg-blue-500 p-3 rounded-md text-black hover:text-white hover:bg-blue-300 '>Make my Card</button>
      </div>
    </>
  )
}
