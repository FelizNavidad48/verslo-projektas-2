//@ts-nocheck
'use client';
import { InterviewTextArea, InterviewTextAreaG, ReviewSpace, ReviewSpaceC, ReviewSpaceA } from "../../../../../components/InterviewTextArea";
import { fillTextAreas, fillAnswer, getMessageArray } from "../../../../../functions/database";
import { useEffect, useState, useRef } from "react";
import { generateReview } from "../../../../../functions/openai";
import {SiCodereview} from 'react-icons/si';
export default function Review({ params }: { params: { id: string } }){

    
    const [rendered, setRendered] = useState(false); 
    const [clicked, setClicked] = useState(-100);
    const handleClick = event => {
        console.log("Button clicked")
        event.currentTarget.disabled = true;
        
      };

  //Every time that array messages changes the useEffect hook calls function that scrolls down to the bottom of the page
  useEffect(()=>{
    scroll();
    if(clicked>=0){
      generateReview(clicked+1)
      fillAnswer(params.id, clicked+1)
    }
    
    return () =>{};

  }, [clicked])


  //useRef used for scrolling function
  const ref = useRef(null);
  function scroll() {
    //@ts-ignore
    ref.current?.scrollIntoView({ behavior: 'smooth' });
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
      
      <h1 className="text-6xl font-medium">Review your Interview!</h1>
      <h3 className = "text-2xl font-low "> After clicking "Review" under a question you will receive feedback from our AI Recruiting manager on how well you answered the question.</h3>

      
    <div className='w-3/5 space-y-10 h-screen'>
        
      {[...Array(numberOfTextAreas)].map((i, index) => {

         if(index%2==0 && index == clicked){
          return(
            <div ref={ref} className='justify-center w-full items-center flex flex-col h-screen'>
        
        
            <div className='z-20 h-32 w-full'>
              <InterviewTextAreaG id={'conversation'+index} placeholder='' disabled={true}/>
            </div>
            
            <div  onClick={() => setClicked(-100)} className='z-10 w-full h-1/3' style={{marginTop:-20}}>
              <ReviewSpaceA id={"answer"+(index+1)} disabled={true}/>
            </div>
            <div  onClick={() => setClicked(-100)} className='z-0 w-full h-2/4 pt-1' style={{marginTop:-25}}>
              <ReviewSpaceC id={"conversation"+(index+1)} disabled={true}/>
            </div>
            
            
            
            
            
          </div>
          );
         }
         else if(index%2==0 ){
          return(
            <div  className='justify-center w-full items-center flex flex-col'>
        
        
            <div className='z-20 h-32 w-full'>
              <InterviewTextAreaG id={'conversation'+index} placeholder='' disabled={true}/>
            </div>
            
            <div onClick={() => setClicked(index)} className ='z-10 h-16 w-full' style={{marginTop:-20}}>
              <ReviewSpace id="test2" disabled={true}/>
            </div>
            
            
            
            
            
            
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