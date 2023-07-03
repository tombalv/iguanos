const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div key={index} style={squareStyle}>
          {dog}
        </div>
      ))}
    </div>
  );
};

const squareStyle = {
  width: "100px",
  height: "100px",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
};

export default DogList;

// const App = () => {
//   const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

//   return (
//     <div>
//       <DogList dogs={dogs} />
//     </div>
//   );
// };
