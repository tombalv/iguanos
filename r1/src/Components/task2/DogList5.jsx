const DogList5 = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => {
        const length = dog.length;
        const color = length > 6 ? "green" : "red";

        return (
          <div key={index} style={{ color }}>
            {length}
          </div>
        );
      })}
    </div>
  );
};

export default DogList5;

// const App = () => {
//   const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

//   return (
//     <div>
//       <DogList5 dogs={dogs} />
//     </div>
//   );
// };
