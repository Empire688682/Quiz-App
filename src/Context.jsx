import React,{ useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const data = [
        { id:"1",
          question: 'What is the capital of France?',
          option1: 'Paris',
          option2: 'Berlin',
          option3:'Madrid', 
          option4:'London',
          answer: 1,
        },
        { id:"2",
          question: 'How many continents are there in the world?',
          option1: 'Five',
          option2: 'Six',
          option3: 'Seven',
          option4: 'Eight',
          answer: 3,
        },
        { id:"3",
          question: 'Who wrote "Romeo and Juliet"?',
          option1: 'Charles Dickens',
          option2: 'William Shakespeare',
          option3: 'Jane Austen',
          option4: 'Mark Twain',
          answer: 3,
        },
        { id:"4",
          question: 'What is the largest planet in our solar system?',
          option1: 'Earth',
          option2: 'saturn',
          option3: 'Jupiter',
          option4: 'uranus',
          answer: 3,
        },
        { id:"5",
          question: 'In what year did the United States declare its independence?',
          option1: '1801',
          option2: '1776',
          option3: '1890',
          option4: '1899',
          answer: 2,
        }
      ];
    return <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
};

export {AppProvider};