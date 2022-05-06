import React from 'react';
import "../assets/result.scss";

const Result=function({score})
{
    return(
        <div>
          <h2>Количество верных ответов {score}</h2> 
        </div>
    );
}

export default Result;