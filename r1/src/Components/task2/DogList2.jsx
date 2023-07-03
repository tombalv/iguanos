const DogList2 = ({ dogs }) => {
  const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);

  return (
    <div>
      {sortedDogs.map((dog, index) => (
        <div key={index} style={circleStyle}>
          <span>{index + 1}</span>
          <span>{dog}</span>
        </div>
      ))}
    </div>
  );
};

const circleStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
};

export default DogList2;

// const App = () => {
//   const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

//   return (
//     <div>
//       <DogList2 dogs={dogs} />
//     </div>
//   );
// };
