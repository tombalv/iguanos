// Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

import React, { useState } from "react";

const Task1 = () => {
  const [isCircle, setIsCircle] = useState(true);

  const changeShape = () => {
    setIsCircle(!isCircle);
  };

  return (
    <div>
      <button onClick={changeShape}>Change</button>
      <div
        className={isCircle ? "circle" : "square"}
        style={{
          width: isCircle ? "200px" : "200px",
          height: isCircle ? "200px" : "200px",
          borderRadius: isCircle ? "50%" : "0",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
};

export default Task1;
