import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import { useGlobalContext } from '../Context';

const Quiz = () => {
    const {data} = useGlobalContext();
    
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]) ;
    let [lock, setLock] = useState(false);
    let [showScore, setShowScore] = useState(false);
    let [nextButton, setNextbutton] = useState(false);
    let [score, setScore] = useState(0);
    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);
    let option_Array = [option1, option2, option3, option4];

    const handleSelected = (e, answer) =>{
      if(lock === false){
        if(question.answer === answer){
          e.target.classList.add("correct");
          setLock(true);
          setScore(score + 1)
         setNextbutton(true)
         }
         else{
          e.target.classList.add("wrong");
          option_Array[question.answer-1].current.classList.add("correct");
          setLock(true);
          setNextbutton(true)
      }
    }
  }

  const handleNextButton = () =>{
    setNextbutton(false)
    if(lock === true){
      if(index === data.length - 1){
        setShowScore(true);
        return 0;
      }
      setLock(false)
      setIndex(++index);
      setQuestion(data[index]);
      for(const optionRef of option_Array){
        optionRef.current.classList.remove("correct");
        optionRef.current.classList.remove("wrong");
      }
    }
  }

  const handleReset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setShowScore(false);
    setNextbutton(false)
  }

  return (
    <section className='container'>
      {showScore? <>
        <div className="quiz-app">
        <h1 className="heading">Quiz App</h1>
        <p>You score {score} out of {data.length}</p>
        <button onClick={handleReset} className='next-button'>Reset</button>
      </div>
      </>:<>
          <div className="quiz-app">
        <h1 className="heading">Quiz App</h1>
        <p className="question">{index+1}. {question.question}</p>
        <div className="options">
          <button ref={option1} onClick={(e) => handleSelected(e, 1)}>{question.option1}</button>
          <button ref={option2} onClick={(e) => handleSelected(e, 2)}>{question.option2}</button>
          <button ref={option3} onClick={(e) => handleSelected(e, 3)}>{question.option3}</button>
          <button ref={option4} onClick={(e) => handleSelected(e, 4)}>{question.option4}</button>
        </div>
        {nextButton? <button className="next-button" onClick={handleNextButton}>Next</button>:null}
        <p className='quiz-Number'>{index + 1} Out {data.length}</p>
      </div>
          </>}
    </section>
  )
}

export default Quiz
