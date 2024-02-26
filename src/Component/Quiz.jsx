import React from 'react';
import '../App.css';
import { useGlobalContext } from '../Context';

const Quiz = () => {
    const {questions} = useGlobalContext();
  return (
    <section className='container'>
      <div className="quiz-app">
        <h1 className="heading">Quiz App</h1>
        <p className="question">Question goes here.</p>
        <div className="options">
          <button className="answer-1">Option 1</button>
          <button className="answer-1">Option 2</button>
          <button className="answer-1">Option 3</button>
          <button className="answer-1">Option 4</button>
          <button className="answer-1">Option 5</button>
        </div>
        <button className="next-button">Next</button>
      </div>
    </section>
  )
}

export default Quiz
