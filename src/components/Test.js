import React from "react";
import {questions} from "../questions";
import "../assets/test.scss";
import Result from "./Result";

const Test=()=>{
  const [score,setScore]=React.useState(0);
  const [numberQuestion,setNumberQuestion]=React.useState(0);
  const [endStatus,setEndStatus]=React.useState(false);
 
 
{/*}
  document.querySelector(".buttons").addEventListener("click",(e)=>{
    let variant=e.target.innerHTML;
    console.log(variant);
  })*/}
  function changeQuestion(isCorrect)
  {
    if(isCorrect)
    {
      setScore(score+1);
    }
    
    const nextQuestion=numberQuestion+1;
    setNumberQuestion(nextQuestion);
    if(numberQuestion===questions.length-1)
    {
      setEndStatus(true);
    }  
  }
    return(
        <div className="container">
      {
          endStatus ?
            (
              <Result score={score}/>
            ):(
                <>
                <div className="condition">
                  <h4>Question {numberQuestion+1} / {questions.length}</h4>
                  <div className="img-container">
                      <img src={questions[numberQuestion].img}></img>
                  </div>
                </div>
               
                <div className="buttons">
                  {
                    questions[numberQuestion].answersOptions.map((elem)=>
                      <button key={elem.answerText} onClick={()=>(changeQuestion(elem.isCorrect))}>{elem.answerText}</button>
                    )
                  } 
                </div>
                </>
            )
        }
        </div>
    );
}

export default Test;