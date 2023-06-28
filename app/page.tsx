'use client';
import React from 'react';
import {Start} from '../components/start';
import {initialCompletion, nextCompletion} from '../functions/openai';
import { Component2 } from '../components/FigmaCustomizeInterview/Component2';
class Home extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render(){
    return (
    <div className=''>
      <Start/>

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
      
      <button onClick={() => {
        initialCompletion();
        this.increment();
      }}    
      > Submit </button>

      <br />

      <textarea id = "userResponse"></textarea>

      <br />
    
      <button onClick={() => {
        nextCompletion();
        this.increment();
      }}> Next Question </button>

      <br />

      <h1>{this.state.counter === 0 ? "Start Interview" : "Question Number " + this.state.counter} </h1> 
      
      <br />

      <p id = "response"> </p>

    </div>
  );
}
}

export default Home
