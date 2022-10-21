import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate=useNavigate()
  return (
    <div>
      <img src="images/error.jpg" alt="error" className='w-full h-screen'/>
      <button className=" text-lg absolute left-3 top-3 bg-transparent font-bold border-2 border-orange-600 py-1 px-4 hover:bg-orange-600 hover:text-white transition-all duration-500 ease-in"
          onClick={()=>navigate("/")}
          >BACK TO HOME</button>
    </div>
  )
}

export default Error