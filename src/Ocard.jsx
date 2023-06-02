import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Cards1 from './components/Cards1'
import Cards2 from './components/Cards2'
import Cards3 from './components/Cards3'

const Ocard = () => {
  const [isShow, setIsShow] = useState(true)
  const [value, setValue] = useState("")

  console.log(value)

  useEffect(() => {
    console.log(localStorage.getItem("id"));
  })


  return (
    <>
      <div className='flex justify-center'>{
        value === 1 && (
          <div>
            <Cards />
          </div>
        )}
        {value === 2 && <Cards1 />}
        {value === 4 && <Cards2 />}
        {value === 3 && <Cards3 />}
      </div>
      {isShow && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>

          <div onClick={(e) => { setValue(1); setIsShow(false) }}>
            <Cards />
          </div>

          <div onClick={(e) => { setValue(2); setIsShow(false) }}>
            <Cards1 />
          </div>

          <div onClick={(e) => { setValue(3); setIsShow(false) }}>
            <Cards3 />
          </div>

          <div onClick={(e) => { setValue(4); setIsShow(false) }}>
            <Cards2 />
          </div>
        </div>

      )}
    </>
  )
}

export default Ocard
