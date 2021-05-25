import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Questions from './components/Questions';
import quizData from './data/quiz.json'; /*à modifier*/


const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] =useState(0);
  const [answer, setAnswer] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  }
  return (
    <div className="App">
      {step ===1 && <Start onQuizStart={quizStartHandler} />}
      {step ===2 && <Questions 
      data={quizData.data[activeQuestion]}
      onAnswerUpdate={setAnswer}
      numberOfQuestions={quizData.data.length}
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
    </div>
  );
}

export default App;
