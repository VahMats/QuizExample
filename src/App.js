import { useState, useEffect } from 'react';
import './App.css';

export default function () {
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [showScore,setShowScore] = useState(false);

    // fetch("./quiz.json")
    //     .then(function (resp){
    //         return resp.json();
    //     })
    //     .then(function (questions){
    //
    //     })

  const handleAnswerOptionClick = (isCorrect)=>{
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < data.questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      setShowScore(true)
    }
  }

  const getData=()=>{
    fetch('./quiz.json')
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
            setData(myJson);
            setLoading(false)
        });
  }
  useEffect(()=>{
    getData()
  },[])
if (loading) {
    return <div className="loading">loading</div>;
}

  return (
    <div className="App">
      <div className="main">

       

        {
          showScore
          ?  <div className="section__score">
              <div>Your score {score} from {data.questions.length}</div>
            </div>
          :  <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Question { currentQuestion + 1 }</span>
            </div>
            <div className="question__text">{ data.questions[currentQuestion].questionText }</div>
          </div>
          <div className="answer__section">
            {data.questions[currentQuestion].answerOptions.map(item=>(
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

