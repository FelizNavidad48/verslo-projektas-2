//@ts-nocheck
'use client';
import { InterviewTextArea, InterviewTextAreaG } from "../../../../../components/InterviewTextArea";
import { fillTextAreas, getMessageArray } from "../../../../../functions/database";
import { useEffect, useState } from "react";
import { generateReview } from "../../../../../functions/openai";
import {SiCodereview} from 'react-icons/si';
export default function Review({ params }: { params: { id: string } }){

    
    const [rendered, setRendered] = useState(false); 
    
    const handleClick = event => {
        console.log("Button clicked")
        event.currentTarget.disabled = true;
        
      };
    
    var numberOfTextAreas = 11;
    useEffect(() => {
        numberOfTextAreas = getMessageArray(params.id)
          return () => {};
      }, [params.id]);

    useEffect(() => {
        if(rendered){
            fillTextAreas(params.id)
        }
    
        return () => {};
    }, [params.id, rendered]);

    
    return(
        <div className=''>    
    <div className="flex flex-col justify-center items-center space-y-6 py-28">
    <div className='w-3/5 space-y-10'>
        
      {[...Array(numberOfTextAreas)].map((i, index) => {

         if(index%2==0){
          return(
            <div className='h-32'>
              <InterviewTextAreaG  id={'conversation'+index} placeholder='' disabled={true}/>
              
            </div>
          );
         }
         else{
          
          return(
          <div className='flex space-x-2 items-start h-32'> 
            <InterviewTextArea id={'conversation'+index} value="" placeholder='' disabled={true}/>
            <button role="button" onClick={ (event)=>{handleClick(event); generateReview(index-1);}} className='flex rounded-2xl disabled:brightness-50 h-18 p-4 py-2 justify-center items-center bg-gradient-to-l from-black from-1% to-90% to-blue-900'><SiCodereview size='50px' className='text-white'/></button>

          </div>
          );
         }

      })
       
      }
      {fillTextAreas(params.id)}
      
    </div>
    
    </div>
    
    </div>
    );
}