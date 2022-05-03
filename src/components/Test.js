import React from "react";
import {questions} from "../questions";

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
                <h4>Question {numberQuestion+1} / {questions.length}</h4>
                <img src={questions[numberQuestion].img}></img>
          
                  {
                    questions[numberQuestion].answersOptions.map((elem)=>
                      <button onClick={changeQuestion}>{elem.answerText}</button>
                    )
                  } 
                </>
            )
        }
        </div>
    );
}

export default Test;