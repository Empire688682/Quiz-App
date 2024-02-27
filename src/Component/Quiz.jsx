import React, { useState } from 'react';
import '../App.css';
import { useGlobalContext } from '../Context';

const Quiz = () => {
    const {data} = useGlobalContext();
    
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]) ;
    let [lock, setLock] = useState(false)

    const handleSelected = (e, answer) =>{
      if(lock === false){
        if(question.answer === answer){
          e.target.classList.add("correct");
          setLock(true);
         }
         else{
          e.target.classList.add("wrong");
          console.log("wrong")
          setLock(true);
          const correctButton = document.querySelector(`.answer-${question.answer}`);
          console.log(correctButton)
          correctButton.classList.add("correct");
          console.log(question.answer)
      }
    
    }
  }

  return (
    <section className='container'>
      <div className="quiz-app">
        <h1 className="heading">Quiz App</h1>
        <p className="question">{index+1}. {question.question}</p>
        <div className="options">
          <button className="answer-1" onClick={(e) => handleSelected(e, 1)}>{question.option1}</button>
          <button className="answer-1" onClick={(e) => handleSelected(e, 2)}>{question.option2}</button>
          <button className="answer-1" onClick={(e) => handleSelected(e, 3)}>{question.option3}</button>
          <button className="answer-1" onClick={(e) => handleSelected(e, 4)}>{question.option4}</button>
        </div>
        {lock? <button className="next-button">Next</button>:null}
      </div>
    </section>
  )
}

export default Quiz
