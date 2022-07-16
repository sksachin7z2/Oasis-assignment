import React from 'react'
import {Link} from 'react-router-dom'
import form from './form.png'
// import { useNavigate } from 'react-router-dom';

function Navbar() {
  // const [message, setMessage] = useState("");
    // let navigate=useNavigate();
  return (
    <div>
    
        <nav>
           <div className=' h-16 flex items-center bg-white'>
           
            <div>  <Link to="/"> 
              <div className='flex items-center font-bold px-5'>
               <div className='w-[35px]'> <img className='w-[100%]' src={form}  alt="" /></div>
               <p className='px-3'> Formify</p> 
               </div>
             </Link></div>
           
         <div>   <Link to="/">
                 <div className=' font-bold rounded-md p-1 m-2 cursor-pointer'>
                  Home
                  </div>
              </Link></div>
          
           
               
           
              
               
        
   
    </div>
    </nav>
    </div>
  )
}

export default Navbar