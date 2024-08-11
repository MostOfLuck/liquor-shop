import React, { useState } from 'react';
import './chatbot.css'

const questions = [
  {
    id: 1,
    text: 'Какое у вас сегодня настроение?',
    options: ['Расслабленное', 'Энергичное', 'Романтическое'],
  },
  {
    id: 2,
    text: 'Какой вкус вам нравится?',
    options: ['Сладкий', 'Кислый', 'Горький'],
  },
  {
    id: 3,
    text: 'Какой крепости напиток вы предпочитаете?',
    options: ['Легкий', 'Средний', 'Крепкий'],
  },
];

function ChatBot() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState('');

  const handleAnswer = answer => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setRecommendation(getRecommendation(updatedAnswers));
    }
  };

  const getRecommendation = answers => {
    if (
      answers[0] === 'Расслабленное' &&
      answers[1] === 'Сладкий' &&
      answers[2] === 'Легкий'
    ) {
      return 'Рекомендуем вам попробовать десертное вино!';
    }
    return 'Рекомендуем вам попробовать коктейль!';
  };

  return (
    <div className="chatbot">
      {recommendation ? (
        <div className="recommendation">{recommendation}</div>
      ) : (
        <div className="question">
          <p>{questions[currentQuestion].text}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatBot;
