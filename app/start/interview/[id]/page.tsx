'use client';
import {InterviewTextArea, InterviewTextAreaG} from '../../../../components/InterviewTextArea';
import { useState, useEffect} from 'react';
import {initialCompletion, nextCompletion} from '../../../../functions/openai';

import {MdNavigateNext} from 'react-icons/md';

export default function interview({ params }: { params: { id: string } }) {
  const [messages, addMessage] = useState(['']);
  
  const [count, addCount] = useState(1);
  useEffect(() => {
    initialCompletion(params.id)
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


  
  return (
    <div>

    
    <div className="flex flex-col justify-center items-center space-y-6 py-28">
    <div className='w-3/5 space-y-10'>
      {messages.map((message, index) => {

         if(index%2==0){
          return(
            <div >
              <InterviewTextAreaG  id={'gptResponse'+index} placeholder='' disabled={true}/>
            </div>
          );
         }
         else{
          
          return(
          <div > 
            <InterviewTextArea id={'gptResponse'+index} value="asddddasd ajsndj asndjk jsandj kashhdj hasjdh kjashdjkh akjsdhkjas hdkjash kjdhaskj hdkjh askjhd kjashd kjsahd kjashdk jhaskjd hkajshdk jahskjdad asd asd asdasasdasd asdahjiaks h djiashndjkl hnaskjid hbjuikasdhb juikashd kjahsbkjd akjsd jkasd kjasnd kjasd kjasd kjasd kjaws dhkjashd kjas dkjasd kjsabd kjasbndkj baskjed n haksjdh jashd kjashdjk ahsdjk hasjkd hjdshj" placeholder='' disabled={true}/>
          </div>
          );
         }

      })}
    </div>
    
    </div>
    <div className='fixed bottom-0 pb-10 w-3/5 h-30 left-1/2 -translate-x-1/2'>
      <div className='flex space-x-2 items-center justify-center'>

      <InterviewTextAreaG  id='userResponse' placeholder='Enter your text here' disabled={false}/>
      <button onClick={()=> {addMessage(olderArray => [...olderArray, showUserResponse() ]); addMessage(oldArray => [...oldArray, '']);nextCompletion(messages.length+2);}} className=' mb-1 flex w-18 rounded-md h-max justify-center items-center bg-blue-950'><MdNavigateNext size='70px' className='text-white'/></button>
      </div>

    </div>
    </div>
  )
}