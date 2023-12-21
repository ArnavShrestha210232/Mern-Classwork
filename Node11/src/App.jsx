import React, { useState } from "react";

const QuoteVotingApp = () => {
  const initialQuotes = [
    "Embrace the journey, for within the twists and turns, you discover the true colors of your soul.",
    "In the symphony of life, let resilience be the melody that carries you through every note of challenge.",
    "The canvas of your dreams awaits the brushstrokes of your determination. Paint a masterpiece.",
    "Wisdom whispers in the silence between words, and growth thrives in the spaces between comfort and chaos.",
    "Cherish the power of now, for it is the seed from which the tree of your future will bloom."
  ];

  const [quotes, setQuotes] = useState(initialQuotes.map((quote) => ({ text: quote, votes: 0 })));

  const voteForQuote = (index) => {
    setQuotes((prevQuotes) => {
      const newQuotes = [...prevQuotes];
      newQuotes[index].votes += 1;
      return newQuotes;
    });
  };

  const getHighestVotedQuote = () => {
    const highestVotedQuote = quotes.reduce((prev, current) => (prev.votes > current.votes ? prev : current), quotes[0]);
    return highestVotedQuote;
  };

  const resetVotes = () => {
    setQuotes(initialQuotes.map((quote) => ({ text: quote, votes: 0 })));
  };

  return (
    <>
      <h1>Quote Voting App</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <p>{quote.text}</p>
            <p>Votes: {quote.votes}</p>
            <button onClick={() => voteForQuote(index)}>Vote</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Highest Voted Quote</h2>
        {quotes.length > 0 && (
          <p>
            "{getHighestVotedQuote().text}" with {getHighestVotedQuote().votes} votes.
          </p>
        )}
        <button onClick={resetVotes}>Reset Votes</button>
      </div>
    </>
  );
};

export default QuoteVotingApp;
