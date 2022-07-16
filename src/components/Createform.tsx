import React,{useState} from 'react'
import Card from './Card'

function Createform() {
   
    const [type, setType] = useState("checkbox")
   
   
    const checktype=(type:string)=>{
            setType(type)
    }
    
    
   
    const [header, setHeader] = useState({title:"Untitled Form",description:""})
    const handleheaders=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setHeader({...header,[e.target.name]:e.target.value})
    }
    const [question, setQuestion] = useState([{
        questions:"",
        options:[{opt:""}],
        type:type,
    }])
    const handleaddquestion=(e:React.ChangeEvent<HTMLInputElement>,i:number)=>{
        let arr=[...question];
        arr[i].questions=e.target.value
       
           setQuestion(arr)
    }
    const handleremovecard=()=>{
        var itr:string= localStorage.getItem('cardno')||"";
        
        const index=parseInt(itr[0]);
        var arr=[...question];
        arr.splice(index,1);
        setQuestion(arr);
    }
    const handlesave=()=>{
       
        console.log("Form Title: ",header.title,"type:","text");
        console.log("Form Description: ",header.description,"type:","text");
        question.forEach((question)=>{
             
           console.log("question: ",question.questions,"type:","text");

           console.log("options", question.options,"type:",question.type)
          
        })
    }
    const handleaddoption=(i:number)=>{
       let arr=[...question];
       let options=arr[i].options
       let optionnew=[...options,{opt:""}]
       let card={questions:arr[i].questions,options:optionnew,type:type};
        arr.splice(i,1,card);
            setQuestion(arr);
          }

          const handleoptions=(e:React.ChangeEvent<HTMLInputElement>,i:number,j:number)=>{
            let arr=[...question];
       
          arr[i].options[j].opt=e.target.value;
          setQuestion(arr);
               
        }
        const handleremove=(i:number,j:number)=>{
           
            var itr:string= localStorage.getItem('option')||"";
            
            const index=parseInt(itr[0]);
            var arr=[...question];
            arr[i].options.splice(index,1);
            
            setQuestion(arr);
            //nop.splice(index,1)
            //setNop(nop)//state late update
        }
  return (
    <>
    <div className='py-4  container max-w-[850px] m-auto'>
    
    <div className=' border-t-[8px] border-l-4 border-l-blue-500 border-t-blue-700 rounded-md p-5 bg-white '>
            <div>
                <div className='text-[1.75rem] font-bold px-3 '>
                    <input className='w-[100%] p-2 focus:outline-0 border-b-2 flex border-b-blue-200' type="text" name="title" id="title" value={header.title} onChange={handleheaders}/>
                </div>
                <div className='px-3'>
                 <input placeholder='Form Description' className='w-[100%] p-2 focus:outline-0 border-b-2 flex border-b-blue-200' type="text" name="description" id="description" onChange={handleheaders} />       
                </div>
            </div>
    </div>   
    
    
     
     {
        question.map((questio,i)=>{
              return  <div className='py-4' key={i}>  <Card checktype={checktype} handleremove={handleremove} handleoptions={handleoptions} handleaddoption={handleaddoption} nop={question[i].options} card={question[i].questions} setNop={setQuestion}  handlequestion={handleaddquestion} question={questio.questions} bio={i} removecard={handleremovecard}/>
                    </div>
        })
     }
     <div className='flex justify-between'>
     <div onClick={()=>{setQuestion([...question,{questions:"",options:[{opt:""}],type:"checkbox"}])}}>
      <button className='font-bold bg-blue-500 px-4 py-3 text-white rounded-md' >add Question</button>  
     </div>
     <div>
     <button onClick={handlesave} className='font-bold bg-blue-500 px-4 py-3 text-white rounded-md' >Save</button>
     </div>
     </div>
     </div>
     </>

  )
}

export default Createform