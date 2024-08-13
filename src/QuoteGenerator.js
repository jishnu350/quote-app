import React, { useState } from 'react';

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of our lives is to be happy. – Dalai Lama"
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <p>{quote}</p>
      <button onClick={getRandomQuote}>Generate Random Quote</button>
    </div>
  );
};

export default QuoteGenerator;