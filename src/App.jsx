import React from "react";
import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
     
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
