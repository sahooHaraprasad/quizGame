import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  }

  return (
    <div className="home-container">
      <h1 className="home-title glow">
        Welcome to the AI Quiz App
      </h1>
      <button  className="start-button animated-3d-button" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default Home;
