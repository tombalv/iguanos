// Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).

import React, { useState } from "react";
import "../task4/App2.scss";
const Task2 = () => {
  const [squares, setSquares] = useState([]);

  const addSquare = () => {
    const newSquare = {
      id: squares.length + 1,
      count: 0,
    };
    setSquares([...squares, newSquare]);
  };

  const incrementCount = (id) => {
    setSquares((prevSquares) =>
      prevSquares.map((square) =>
        square.id === id ? { ...square, count: square.count + 1 } : square
      )
    );
  };

  return (
    <div className="App">
      <button onClick={addSquare}>Pridėti</button>
      {squares.map((square) => (
        <div key={square.id} className="square">
          <button
            className="plus-button"
            onClick={() => incrementCount(square.id)}
          >
            +
          </button>
          <span className="count">{square.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Task2;
