// Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina

import React, { useState } from "react";

const Task5 = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = (color) => {
    setSquares((prevSquares) => [...prevSquares, color]);
  };

  const resetSquares = () => {
    setSquares([]);
  };

  return (
    <div>
      <button onClick={() => addSquare("red")}>Add Red</button>
      <button onClick={() => addSquare("blue")}>Add Blue</button>
      <button onClick={resetSquares}>Reset</button>
      <div className="sq-bin">
        {squares.map((color, index) => (
          <div
            key={index}
            className="sq small"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Task5;
