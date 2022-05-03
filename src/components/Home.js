import React from "react";
import Test from "./Test"
import {Link} from "react-router-dom";
import "../assets/home.scss"
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
 
function Home (){

    return(
        <div id="container">
           
              <h1>QuessFlag</h1>
              <img src="data:image/png;base64,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" alt="" />
              <div className="actions">
                <button><Link to="/quiz">Start the quiz</Link></button>
                <div className="socials">
                   <a href="https://github.com/marina-sheigets" target="_blank"> <AiFillGithub/></a>
                   <a href="https://www.linkedin.com/in/marina-sheigets-3a04a620a/"  target="_blank"> <AiFillLinkedin/></a>
                </div>
             </div>
          </div>
       
    );
}
export default Home;