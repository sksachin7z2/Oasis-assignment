import React,{ useState,useEffect} from 'react'
import { FC } from 'react'
import {Dispatch ,SetStateAction} from'react'
interface Props {
   bio:number,
   removecard:() => void;
   question:string
   handleremove:(arg:number,ar:number)=>void
   handleoptions:(event: React.ChangeEvent<HTMLInputElement>,arg:number,ar:number)=>void
   handlequestion:(event: React.ChangeEvent<HTMLInputElement>,i:number)=>void; 
   

   card:string
   nop:Array<object>
   handleaddoption:(arg:number)=>void
   checktype:(arg:string)=>void;
   setNop:Dispatch<SetStateAction<{ questions: string; options: { opt: string; }[];type:string }[]>>
  }
const Card: FC<Props>=(props):JSX.Element=> {
    useEffect(() => {
     props.checktype('checkbox');
      // eslint-disable-next-line 
    }, [])
    
    const [option, setOption] = useState('checkbox')
    
    const handleoption=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        props.checktype(e.target.value)
            setOption(e.target.value);
    }
 
  return (
    <div className='rounded-md p-4 bg-white  py-4 border-l-4 border-blue-600'>
       <div>
       
       <div className='flex flex-wrap justify-between items-center px-5'>
            <div>
                <input className='sm:w-[40vw] w-[85vw] p-3 rounded-md border-2'placeholder='Question' type="text" name="question" id={`question${props.bio}`} value={props.question} onChange={(e)=>{props.handlequestion(e,props.bio)}}/>
            </div>
                <div>
                    <select name={`options${props.bio}`} id={`options${props.bio}`} onChange={handleoption}>
                        <option value="checkbox">CheckBox</option>
                        <option value="text">DropDown</option>
                    </select>
                </div>
        </div>
        <div>
            {props.nop.map((optio,i)=>{
                return <div className='px-5 flex justify-center items-center' key={`${i}${props.bio}`} >
                    
                {option==='checkbox'?<div><input type={`${option}`} disabled id={`${i}${props.bio}`} name="options"  /></div>:
                <div>{`${i+1}`}</div> }
           <div className='w-[-webkit-fill-available]'> <input className='sm:p-3 sm:my-4 sm:mx-3 my-2 p-2 w-[100%]' placeholder={`Option${i+1}`}  type="text" id={`${i}${props.bio}`} name="options"  onChange={(e)=>{props.handleoptions(e,props.bio,i)}}/></div>
                           <div onClick={()=>{localStorage.setItem("option",`${i}${props.bio}`);props.handleremove(props.bio,i)}} >X</div> </div>
            })}

            
        </div>
        </div>
        <div className='flex justify-between items-center'>
        <div className='px-5  ' onClick={()=>{props.handleaddoption(props.bio)}}>
            Add option
        </div>
        <div>
            <button onClick={()=>{localStorage.setItem('cardno',`${props.bio}`);props.removecard();}} className='font-bold bg-blue-500 px-4 py-3 text-white rounded-md'>Remove</button>
        </div>
        </div>
        
    </div>
  )
}

export default Card