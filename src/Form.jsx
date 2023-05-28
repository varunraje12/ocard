import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database } from './appwrite/config'

const Form = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [profession, setProfession] = useState("")
  const [image, setImage] = useState("")
  const [instagram, setInstagram] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [whatsapp, setWhasapp] = useState("")

  async function makecard(e) {
 
    let data = { name, age, profession, image, instagram, linkedin, github, whatsapp }
    
    if(name&&profession&&image&&whatsapp){
      var x=await adddata();
    navigate("/ocards");
    }
    else{
      alert("Please fill the Form correctly!");
    }
    // e.preventDefault()
  }

 
  const adddata=async()=>{
  try{
    var x=await database.createDocument(process.env.REACT_APP_DATABASE_ID,process.env.REACT_APP_COLL_ID,"unique()",{
    name:name,
    age:age,
    profession:profession,
    email:"pranjal.maurya402@gmail.com",
    photo:"https://www.google.com",
    insta:instagram,
    linkedin:linkedin,
    github:github,
    whatsapp:whatsapp
  }); 
  localStorage.setItem("id",x.$id);
  console.log(x);
}
catch(e){
  console.log(e);
}  
  }
  return (
    <>
      <h1 className='flex justify-center text-3xl font-bold p-2'>Fill the form to Get Your OCard</h1>
      <form>
        <div className="grid md:grid-cols-1 px-80">
          <div className="relative z-0 mb-6 group">
            <input type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setProfession(e.target.value)}
              value={profession}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profession</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input type="file"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 px-80 gap-2">
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              name=''
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setInstagram(e.target.value)}
              value={instagram}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram username</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linkedin username</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setGithub(e.target.value)}
              value={github}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Github username</label>
          </div>

          <div className="relative z-0 mb-6 group">
            <input type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setWhasapp(e.target.value)}
              value={whatsapp}
              required />
            <label className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp number</label>
          </div>
        </div>
        <div className='flex justify-center'>

          <button onClick={(e) => { 
               e.preventDefault();
            makecard();
             
            }} type="submit" className=' bg-blue-500 p-3 rounded-md text-black hover:text-white hover:bg-blue-300 cursor-pointer'>Get Your Ocard</button>
        </div>

      </form>
    </>
  )
}

export default Form