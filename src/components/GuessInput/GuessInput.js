import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handlerSubmit(event) {
    event.preventDefault();

    console.log({ guess });
    setGuess("");
  }
  return (
    <>
      <form onSubmit={handlerSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 latter world"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
