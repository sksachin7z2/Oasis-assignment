import React from 'react'
import design from './design.png'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function Formbody() {
  return (
    <div className='container m-auto'>
     <Link to='/form'> <div className='fixed right-[3rem] bottom-[3rem]'>
        
        <div className='text-[3rem] hover:bg-blue-600 hover:text-white rounded-full'>
            <AiOutlinePlusCircle/>
        </div>
      </div></Link>
      <div className='font-bold text-lg text-center py-4'>Recent Documents</div>
      <hr className='bg-blue-200 h-[4px]'/>
        <div className='grid sm:grid-cols-3 sm:grid-rows-none grid-cols-none grid-rows-3  gap-3 sm:p-[60px] p-[30px]'>
<div className='border-2 rounded '>
  <div>
    <img src={design} alt="" />
  </div>
  <div>
    <p  className='font-bold text-lg py-3'>
      Untitled Form
    </p>
  </div>
</div>
<div className='border-2 rounded '>
  <div>
    <img src={design} alt="" />
  </div>
  <div>
    <p  className='font-bold text-lg py-3'>
      Untitled Form
    </p>
  </div>
</div>
<div className='border-2 rounded '>
  <div>
    <img src={design} alt="" />
  </div>
  <div>
    <p className='font-bold text-lg py-3'>
      Untitled Form
    </p>
  </div>
</div>

    </div>
    </div>
  )
}

export default Formbody