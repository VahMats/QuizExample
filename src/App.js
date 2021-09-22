import { useState } from 'react';
import './App.css';

export default function () {

  const questions = [
    {
      questionText: "4+9",
      answerOptions: [
        {answerText: "23", isCorrect: false},
        {answerText: "13", isCorrect: true},
        {answerText: "15", isCorrect: false},
        {answerText: "10", isCorrect: false}
      ]
    },
    {
      questionText: "16/4",
      answerOptions: [
        {answerText: "3", isCorrect: false},
        {answerText: "2", isCorrect: false},
        {answerText: "5", isCorrect: false},
        {answerText: "4", isCorrect: true}
      ]
    },
    {
      questionText: "5*7",
      answerOptions: [
        {answerText: "35", isCorrect: true},
        {answerText: "13", isCorrect: false},
        {answerText: "64", isCorrect: false},
        {answerText: "48", isCorrect: false}
      ]
    },
    {
      questionText: "64-53",
      answerOptions: [
        {answerText: "23", isCorrect: false},
        {answerText: "13", isCorrect: false},
        {answerText: "15", isCorrect: false},
        {answerText: "11", isCorrect: true}
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore,setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect)=>{
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      setShowScore(true)
    }
  }



  return (
    <div className="App">
      <div className="main">

       

        {
          showScore
          ?  <div className="section__score">
              <div>Your score {score} from {questions.length}</div>
            </div>
          :  <div className="quizz"> 
          <div className="question__section">
            <div className="question__count">
              <span>Question { currentQuestion + 1 }</span>
            </div>
            <div className="question__text">{ questions[currentQuestion].questionText }</div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map(item=>(
            <button
              onClick = {()=> handleAnswerOptionClick(item.isCorrect)}
            >
              {item.answerText }</button>))}
          </div>
        </div> 


        }
  
        
      </div>
    </div>
  );
}

