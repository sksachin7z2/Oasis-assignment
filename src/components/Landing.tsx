import React from 'react'
import {useNavigate} from 'react-router-dom'
import design from './design.png'
function Landing() {
  let navigate=useNavigate();
  return (
   <>
   <div className='container m-[auto]'>
    <div className='flex h-[65vh] justify-center flex-column items-center flex-col'>
    <div className='text-[3rem] py-5 text-center'>
      Build Forms With Ease With Formify
      </div>
      <div className="text-center py-5">
      Easily create and share online forms and surveys, and analyze responses in real-time. 
      </div>
      <div className='text-center'>
        <button onClick={()=>{navigate('/create')}} className='font-bold bg-blue-500 px-4 py-3 text-white rounded-md'>Get started</button>
      </div>
     
    </div>
    <div className='m-auto md:w-[700px] sm:w-[500px] w-[300px] pb-5'>
      <div>
      <img className='m-auto w-[100%]' src={design} alt=""  />
      </div>
       
      </div>
    </div>
   </>
  )
}

export default Landing