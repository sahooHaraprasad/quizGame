import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://api.jsonserve.com/Uw5CrX"
        );
        const data = await response.json();
        setQuestion(data.questions);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setScore((prevScore) => (option.is_correct ? prevScore + 1 : prevScore));
    setAnswers((prevAnswers) => [...prevAnswers, option]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/result", {
        state: {
          score: score + (option.is_correct ? 1 : 0),
          answers: [...answers, option],
        },
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <button className="home-button" onClick={() => navigate("/")}>
        Home
      </button>
      <h2 className="quiz-header glow">AI Quiz Challenge</h2>
      <div className="question">
        {currentQuestion ? currentQuestion?.description : "Loading..."}
      </div>
      <div className="options">
        {currentQuestion?.options?.map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
            {option.description}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
