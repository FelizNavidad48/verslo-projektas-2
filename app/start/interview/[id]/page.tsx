'use client';

//imports
import {InterviewTextArea, InterviewTextAreaG, InterviewTextAreaGradient} from '../../../../components/InterviewTextArea';
import { useState,useRef, useEffect} from 'react';
import {initialCompletion, logArray, nextCompletion} from '../../../../functions/openai';
import { fillChatData, retrieveDataById } from '../../../../functions/database';
import {MdNavigateNext} from 'react-icons/md';
import { Counter } from '../../../../components/counter';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'

export default function interview({ params }: { params: { id: string } }) {
  
  //State and effect hooks
  
  const [messages, addMessage] = useState(['']); 
  const [count, setCounter] = useState(0);
  const router =  useRouter();
  //Retrieves data from the previous page by using the id of the page
  useEffect(() => {
    initialCompletion(params.id)
    var counter = retrieveDataById(params.id)[3];
    //@ts-ignore
    setCounter(counter);
  	return () => {};
  }, [params.id]);

  //Every time that array messages changes the useEffect hook calls function that scrolls down to the bottom of the page
  useEffect(()=>{
    scroll();
    return () =>{};

  }, [messages])


  //useRef used for scrolling function
  const ref = useRef(null);
  function scroll() {
    //@ts-ignore
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  //Displays the user response that was typed as a chat window
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
  

  //Executes functions when the button is pressed
  function submitButton(){
    if(moreQuestions()){
      setCounter(count-1),
      addMessage(olderArray => [...olderArray, showUserResponse() ]),
       addMessage(oldArray => [...oldArray, ''])
       ,nextCompletion(messages.length+2)
    }
  }
  

  //Checks whether there are more questions remaining, if not, then ends the interview
  function moreQuestions(){   
    if(count<1){
      Swal.fire({
        icon: 'warning',
        title: 'No more questions remaining',
        text: 'You will be able to review your answers later',
        showCancelButton: true,
        confirmButtonText: 'End Interview',
        confirmButtonColor: 'black',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Your Interview has been saved!', '', 'success')
          fillChatData(params.id)
          router.push("/start/interview/"+params.id+"/review")
        }
        else{
          return false;
        }
      })
      
    }
    else{
      return true;
    }
  }


  //HTML content of the page 
  return (
    <div className=''>
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
      <div id="scrollingDiv" ref={ref}></div>
    </div>
    
    </div>
    <div className='fixed bottom-0 pb-10 w-3/5 h-30 left-1/2 -translate-x-1/2'>
      <div className='flex space-x-2 items-center justify-center'>
      
      <InterviewTextAreaGradient  id='userResponse'  placeholder='Enter your text here' disabled={false} />
      <button onClick={submitButton} className='flex mb-1.25 w-18 rounded-2xl h-18 justify-center items-center p-0.25 bg-gradient-to-l from-black from-1% to-90% to-blue-900'><MdNavigateNext size='70px' className='text-white'/></button>
  
      </div>

    </div>
    </div>
  )
}