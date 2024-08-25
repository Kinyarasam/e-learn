
import React, { useState, useEffect } from 'react';
import '../src/quiz.css';

const Quiz = ({ onComplete }) => {
  const [questions] = useState([
    {
      question: 'What is the main topic of this lesson?',
      options: ['Topic A', 'Topic B', 'Topic C'],
      answer: 'Topic B'
    },
    {
      question: 'Which feature was discussed?',
      options: ['Feature X', 'Feature Y', 'Feature Z'],
      answer: 'Feature X'
    },
    
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsQuizCompleted(true);
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  if (isQuizCompleted) {
    return (
      <div className="quiz-result">
        <h3>Quiz Completed!</h3>
        <p>Your score: {score} out of {questions.length}</p>
        <p>Time taken: {60 - timeLeft} seconds</p>
        <button onClick={() => onComplete(score)} className="button primary">Finish</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>Quiz Time!</h2>
      <div className="quiz-timer">Time Left: {timeLeft} seconds</div>
      <div className="quiz-question">
        <h3>{questions[currentQuestionIndex].question}</h3>
        <div className="quiz-options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)} className="button secondary">
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
