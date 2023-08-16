import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({ numOfGuess }) {
  return (
    <Banner status="happy">
      <p>
        <stron>Congratulations!</stron> Got it in{" "}
        <strong>
          {numOfGuess === 1 ? "1 guess" : `${numOfGuess} guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
