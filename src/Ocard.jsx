import React, { useEffect } from 'react'
import Cards from './components/Cards'
import Cards1 from './components/Cards1'
import Cards2 from './components/Cards2'
import Cards3 from './components/Cards3'

const Ocard = () => {
  useEffect(()=>{
    console.log(localStorage.getItem("id"));
  })
  return (
    <>
      <div className='grid grid-cols-4 gap-4 p-4'>
        <Cards />
        <Cards1 />
        <Cards3 />
        <Cards2 />
      </div>
    </>
  )
}

export default Ocard