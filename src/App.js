import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Questions from './components/Questions';
import GameOver from './components/GameOver';
import SessionR from './components/SessionR';
import quizData from './data/quiz.json'; /*à modifier*/

let interval; 


const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] =useState(0);
  const [answers, setAnswer] = useState([]);
  const [showSessionR, setShowSessionR] = useState(false);
  const [time, setTime] = useState(0); 

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  

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
      {step === 3 && <GameOver
      results={answers}
      data={quizData.data}
      onReset={resetClickHandler}
      onAnswerCheck={() => setShowSessionR (true)}
      time={time}
      />}

    {showSessionR && <SessionR
      onClose={() => setShowSessionR(false)}
      results={answers}
      data={quizData.data}
      />}
    </div>
  );
}

export default App;
