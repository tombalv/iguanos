// Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

import React, { useState } from "react";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Task2 = () => {
  const [isCircle, setIsCircle] = useState(true);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(5, 25));

  const changeShape = () => {
    setIsCircle((prevIsCircle) => !prevIsCircle);
  };

  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNumber(5, 25));
  };

  const shapeStyle = {
    width: isCircle ? "200px" : "200px",
    height: isCircle ? "200px" : "200px",
    borderRadius: isCircle ? "50%" : "0",
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div className="sq-bin">
      <button onClick={changeShape}>Change Shape</button>
      <button onClick={changeRandomNumber}>Change Random Number</button>
      <div className={isCircle ? "circle" : "square"} style={shapeStyle}>
        {randomNumber}
      </div>
    </div>
  );
};

export default Task2;
