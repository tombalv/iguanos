import React from "react";

const DogList3 = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div key={index} style={getStyleByIndex(index)}>
          {index % 2 === 0 ? (
            <div style={squareStyle}>{dog}</div>
          ) : (
            <div style={circleStyle}>{dog}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const getStyleByIndex = (index) => {
  return {
    display: "inline-block",
    margin: "5px",
  };
};

const squareStyle = {
  width: "100px",
  height: "100px",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const circleStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default DogList3;

// const App = () => {
//   const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

//   return (
//     <div>
//       <DogList3 dogs={dogs} />
//     </div>
//   );
// };
