// Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

import React, { useState } from "react";
import "../task4/App1.scss";

const Task1 = () => {
  const [trees, setTrees] = useState([]);

  const addTree = (treeName) => {
    setTrees([...trees, treeName]);
  };

  return (
    <div className="App">
      <div className="rectangle">
        {trees.map((tree, index) => (
          <div key={index} className="tree-square">
            {tree}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => addTree("ąžuolas")}>ąžuolas</button>
        <button onClick={() => addTree("beržas")}>beržas</button>
        <button onClick={() => addTree("uosis")}>uosis</button>
      </div>
    </div>
  );
};

export default Task1;
