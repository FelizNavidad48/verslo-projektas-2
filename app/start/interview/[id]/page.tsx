'use client';
import {InterviewTextArea, InterviewTextAreaG} from '../../../../components/InterviewTextArea';
import { useState, useEffect} from 'react';
import {initialCompletion, nextCompletion} from '../../../../functions/openai';
import { retrieveDataById } from '../../../../functions/database';
import {MdNavigateNext} from 'react-icons/md';
import { Counter } from '../../../../components/counter';
import Swal from 'sweetalert2';

export default function interview({ params }: { params: { id: string } }) {
  const [messages, addMessage] = useState(['']);
  
  const [count, setCounter] = useState(0);
  useEffect(() => {
    initialCompletion(params.id)
    var counter = retrieveDataById(params.id)[3];
    setCounter(counter);
  	return () => {};
  }, [params.id]);
  
  function showUserResponse():string{
    var elementt = (document.getElementById("userResponse") as HTMLInputElement).value!;
    (document.getElementById("userResponse") as HTMLInputElement).value = "";
    console.log(elementt);
    
    if(elementt===null){
        return ""
      }
      else{
        return elementt!;
      }
  }

  function moreQuestions(){
    if(count==0){
      Swal.fire({
        icon: 'error',
        title: 'No more questions',
        text: 'End interview',
      })
      return false;
    }
    else{
      return true;
    }
  }


  
  return (
    <div>
      <Counter counter={count}/>
    
    <div className="flex flex-col justify-center items-center space-y-6 py-28">
    <div className='w-3/5 space-y-10'>
      {messages.map((message, index) => {

         if(index%2==0){
          return(
            <div className='h-32'>
              <InterviewTextAreaG  id={'gptResponse'+index} placeholder='' disabled={true}/>
            </div>
          );
         }
         else{
          
          return(
          <div className='h-32'> 
            <InterviewTextArea id={'gptResponse'+index} value={message} placeholder='' disabled={true}/>
          </div>
          );
         }

      })}
    </div>
    
    </div>
    <div className='fixed bottom-0 pb-10 w-3/5 h-30 left-1/2 -translate-x-1/2'>
      <div className='flex space-x-2 items-center justify-center'>

      <InterviewTextAreaG  id='userResponse' placeholder='Enter your text here' disabled={false}/>
      <button onClick={()=> {moreQuestions()?(setCounter(count-1),addMessage(olderArray => [...olderArray, showUserResponse() ]), addMessage(oldArray => [...oldArray, '']),nextCompletion(messages.length+2)):console.log("done")}} className=' mb-1 flex w-18 rounded-md h-max justify-center items-center bg-blue-950'><MdNavigateNext size='70px' className='text-white'/></button>
      </div>

    </div>
    </div>
  )
}