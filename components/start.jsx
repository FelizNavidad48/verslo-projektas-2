import React from "react";

import {initialCompletion, nextCompletion} from '../functions/openai';
import { useState } from "react";

export function Start(props) {
    const [state, setState] = useState(0);

    function decrement() {
        setState(state-1);
    }
return(
<div className="flex flex-col space-y-16 items-center py-32">
    
    <h1 className="w-4/5 text-4xl text-">Enter The Details For Your Interview</h1>
    
<div className="flex w-4/5 space-x-10 items-center">
    <div  className="h-48">
    <label class="block text-black text-2xl mb-2" for="companyName">Company Name</label>
    <textarea className=" block drop-shadow-xl w-64 h-36 py-2 px-2 rounded-md text-xl" id = "company" placeholder="Enter your text here..."></textarea>
    </div>
    <div>
    <label class="block text-black  text-2xl mb-2" for="position">Position</label>
    <textarea className=" drop-shadow-xl w-64 h-36 py-2 px-2 rounded-md text-xl" id = "position" placeholder="Enter your text here..."></textarea>
    </div>
    
    <div className="grid-cols-1 w-48 space-y-6">
    <select  className=" drop-shadow-xl h-1/3 w-48 py-2 px-2 rounded-md align-middle" id="typeQuestions">
          <option  value=""  selected disabled hidden>Type of Questions</option>
          <option value="HR">HR</option>
          <option value="Job Tasks">Job Tasks</option>
          <option value="HR and Job Tasks">Both</option>
    </select>
    <select  className=" drop-shadow-xl h-1/3 w-48 py-2 px-2 rounded-md align-middle" onChange={e=>setState(e.target.value)} id="amount" >
          <option  value="0"  selected disabled hidden>Interview Length</option>
          <option value="5" >Short (5 Questions)</option>
          <option value="8" >Medium (8 Questions)</option>
          <option value="12" >Long (12 Questions)</option>
    </select>

    <button onClick = {() => {decrement(); initialCompletion();}} className="bg-blue-950 text-white drop-shadow-xl w-48 h-1/3 py-2 px-2 rounded-md align-middle">Start</button>
    </div>


</div>
</div>
);
}