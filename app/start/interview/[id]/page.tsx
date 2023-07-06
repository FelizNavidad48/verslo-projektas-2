'use client';
import InterviewTextArea from '../../../../components/InterviewTextArea';
import { useState } from 'react';
import {initialCompletion, nextCompletion} from '../../../../functions/openai';

export default function interview({ params }: { params: { id: string } }) {
 

  initialCompletion(params.id)
  return (
    <div className="flex justify-center py-28">
    <div className='w-2/3 h-48'>
        <InterviewTextArea id="initialResponse" placeholder='' disabled={true} /> 
    </div>
    <div>
        <InterviewTextArea id="userResponse" placeholder='Enter your text here' disabled={false} /> 
    </div>
    <button onClick={() => {
        nextCompletion();
  
      }}> Next Question </button>
    <div>
      <InterviewTextArea id="response" placeholder='' disabled={true} /> 
    </div>
    </div>
  )
}