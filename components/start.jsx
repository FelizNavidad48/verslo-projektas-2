'use client';
import React from "react";
import styles from './start.css'
import {MdNavigateNext} from 'react-icons/md';

import { useRouter } from 'next/navigation'
import Link from 'next/link';
import {initialCompletion, nextCompletion} from '../functions/openai';
import { useState } from "react";
import Swal from "sweetalert2";
import { retrieveDataById, writeInitialCustomizationData } from "../functions/database";
export function Start(props) {
    const [state, setState] = useState(0);
    const router =  useRouter();

    function decrement() {
        setState(state-1);
    }
    function confirmEntries(){
        if(document.getElementById("company").value == "" || document.getElementById("position").value == "" || document.getElementById("typeQuestions").value == "" || document.getElementById('amount').value == ""){
            Swal.fire({
                icon: 'error',
                title: 'Missing data',
                text: 'Fill in all required fields',
              })
            return false;
        } 
        return true;

    }
return(
<div className="flex flex-col space-y-10 h-screen items-center justify-center py-28 bg-back">
    
    <h1 className="w-4/5 text-8xl font-medium">Enter The Details For Your</h1>
    <h1 className = "w-4/5 text-8xl font-bold"> Interview</h1>
    
<div className="flex pt-4 w-4/5 space-x-10 items-center">
    <div  className="h-56">
    <label class="block text-black text-4xl mb-2" for="companyName">Company Name</label>
    <textarea className=" block drop-shadow-xl w-96 h-48 py-2 px-2 rounded-md text-xl" id = "company" placeholder="Enter your text here..."></textarea>
    </div>
    <div>
    <label class="block text-black  text-4xl pt-5 mb-2" for="position">Position</label>
    <textarea className=" drop-shadow-xl w-96 h-48 py-2 px-2 rounded-md text-xl" id = "position" placeholder="Enter your text here..."></textarea>
    </div>
    
    <div className="grid-cols-1 w-64 h-52 space-y-6 text-2xl">
    <select  className=" drop-shadow-xl h-1/3 w-64 py-2 px-2 rounded-md align-middle" id="typeQuestions">
          <option    selected disabled hidden>Type of Questions</option>
          <option value="HR">HR</option>
          <option value="Job Tasks">Job Tasks</option>
          <option value="HR and Job Tasks">Both</option>
    </select>
    <select  className=" drop-shadow-xl h-1/3 w-64 py-2 px-2 rounded-md align-middle"  id="amount" >
          <option  value=""  selected disabled hidden>Interview Length</option>
          <option value="5" >Short (5 Questions)</option>
          <option value="8" >Medium (8 Questions)</option>
         <option value="12" >Long (12 Questions)</option>
    </select>

    <button onClick = {() => {confirmEntries()?( router.push('/start/interview/' + writeInitialCustomizationData(document.getElementById("company").value , document.getElementById("position").value, document.getElementById("typeQuestions").value, document.getElementById('amount').value))):console.log("false")}} className="flex items-center bg-blue-950 font-medium text-4xl justify-end text-white drop-shadow-xl w-64 h-1/3 py-2 px-2 rounded-md align-middle hover:bg-black hover:text-5xl  duration-500 ">Start
        <div className="ml-5 "><MdNavigateNext size="70px"className="text-white"/></div>
    </button>
    </div>


</div>
</div>
);
}