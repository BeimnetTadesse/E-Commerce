import React, { useState } from "react";

function Rand() {
  const [number, setNumber] = useState();

  function generateNumber() {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(newRandomNumber);
  }

  return (
    <>
      <div>random number:{number}</div>
      <button onClick={generateNumber}>generateNumber</button>

    </>
  );
}

export default Rand;
