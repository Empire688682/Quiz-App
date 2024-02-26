import React,{ useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const questions = [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'Berlin', 'Madrid', 'London'],
          correctAnswer: 'Paris'
        },
        {
          question: 'How many continents are there in the world?',
          options: ['Five', 'Six', 'Seven', 'Eight'],
          correctAnswer: 'Seven'
        },
        {
          question: 'Who wrote "Romeo and Juliet"?',
          options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
          correctAnswer: 'William Shakespeare'
        },
        {
          question: 'What is the largest planet in our solar system?',
          options: ['Earth', 'saturn', 'Jupiter', 'uranus'],
          correctAnswer: 'Jupiter'
        },
        {
          question: 'In what year did the United States declare its independence?',
          options: ['1801', '1776', '1890', '1899'],
          correctAnswer: '1776'
        },
      ];
    return <AppContext.Provider value={{questions}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
};

export {AppProvider};