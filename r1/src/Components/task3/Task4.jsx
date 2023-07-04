// Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.

import React, { useState } from "react";

const Task4 = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = () => {
    setSquares([...squares, {}]);
  };

  return (
    <div className="sq-bin">
      <button onClick={addSquare}>Add</button>
      {squares.map((index) => (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            margin: "10px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Task4;
