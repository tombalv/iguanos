// Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

import React, { useState } from "react";

const Task3 = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 3);
  };

  return (
    <div>
      <button onClick={increaseNumber}>Plus</button>
      <button onClick={decreaseNumber}>Minus</button>
      <div>{number}</div>
    </div>
  );
};

export default Task3;
