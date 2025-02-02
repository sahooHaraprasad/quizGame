import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0, answers = [] } = location.state || {};

  return (
    <div className="result-container">
      <h2 className="result-title glow">Quiz Completed!</h2>
      <p className="result-score">
        Your Score: <span className="score-highlight">{score}</span>
      </p>
      <p className="result-summary">
        You answered <strong>{answers.length}</strong> questions.
      </p>

      <div className="result-buttons">
        <button className="home-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="retry-button" onClick={() => navigate("/quiz")}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Result;
