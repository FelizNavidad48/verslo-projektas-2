'use client';
import Link from 'next/link';
import React from 'react';
import {Start} from '../components/start';
import {initialCompletion, nextCompletion} from '../functions/openai';
export default function Home(){
    return (
    <div>

      <p>
          hello 
      </p>
      <br />
      <textarea id = "company">
      
      </textarea>
      <br />
      <textarea id = "position">
      
      </textarea>
      <br />
      <h4>Type of questions?</h4>
     
        <select  id="typeQuestions">
          <option value="HR">HR</option>
          <option value="Job Tasks">Job Tasks</option>
          <option value="Job Interview">Both</option>
        </select>

  
      
      <br />
      
      

      <br />

     

      <br />
    
      

      <br />

      
      
      <br />

      <p id = "response"> </p>

    </div>
  );
}



