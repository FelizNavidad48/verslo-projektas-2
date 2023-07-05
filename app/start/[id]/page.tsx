'use client';
import InterviewTextArea from '../../../components/InterviewTextArea';
import { useState } from 'react';
import {initialCompletion, nextCompletion} from '../../../functions/openai';

export default function interview({ params }: { params: { id: string } }) {
 

    
  return (
    <div className="flex justify-center py-28">
    <div className='w-96 h-48'>
        <InterviewTextArea id="interviewStart" placeholder="" disabled={true} /> 
    </div>
      
    </div>
  )
}