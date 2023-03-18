import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handlerSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handlerSubmitGuess={handlerSubmitGuess} />
    </>
  );
}

export default Game;
