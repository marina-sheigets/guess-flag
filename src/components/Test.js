import React from "react";
import {questions} from "../questions";
import "../assets/test.scss";

const Test=()=>{
    const [numberQuestion,setNumberQuestion]=React.useState(0);
  const [endStatus,setEndStatus]=React.useState(false);
  React.useEffect(()=>{

  },endStatus);
 

  function changeQuestion()
  {
    const nextQuestion=numberQuestion+1;
    setNumberQuestion(nextQuestion);
    if(numberQuestion==questions.length-1)
    {
      setEndStatus(true);
    }  
  }
    return(
        <div className="container">
      {
          endStatus ?
            (
             <div className="w">End</div>
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
                      <button onClick={changeQuestion}>{elem.answerText}</button>
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