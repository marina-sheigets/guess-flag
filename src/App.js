import React from "react";
import Home from "./components/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Test from "./components/Test";
import "./assets/common.scss"

const App=()=>{
  

  return(
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/quiz" element={<Test/>}></Route>
        </Routes>
    </Router>
  );
  }


export default App;
