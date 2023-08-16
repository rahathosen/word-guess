import React from "react";

function GuessInput({ handlerSubmitGuess ,gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handlerSubmit(event) {
    event.preventDefault();
    handlerSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <>
      <form onSubmit={handlerSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== 'running'}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 latter world"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
