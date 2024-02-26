import React, { useState } from 'react';
import '../App.css';
import { useGlobalContext } from '../Context';

const Quiz = () => {
    const {questions} = useGlobalContext();
    const [quiz, setQuiz] = useState('');
    const[index, setIndex] = useState(0);

    function handleNextButton(e){
      setIndex(index +1);
      if(index === questions.length-1){
        setIndex(0)
      }
    }

  return (
    <section className='container'>
      <div className="quiz-app">
        <h1 className="heading">Quiz App</h1>
        <p className="question"> {index+1 + ". "}{questions[`${index}`].question}</p>
        <div className="options">
          <button className="answer-1">Option 1</button>
          <button className="answer-1">Option 2</button>
          <button className="answer-1">Option 3</button>
          <button className="answer-1">Option 4</button>
          <button className="answer-1">Option 5</button>
        </div>
        <button className="next-button" onClick={()=>handleNextButton()}>Next</button>
      </div>
    </section>
  )
}

export default Quiz
