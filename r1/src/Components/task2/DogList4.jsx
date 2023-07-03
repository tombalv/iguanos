const DogList4 = ({ dogs }) => {
  const filteredDogs = dogs.filter((dog) => dog[0] === dog[0].toLowerCase());

  return (
    <div>
      {filteredDogs.map((dog, index) => (
        <div key={index}>{dog}</div>
      ))}
    </div>
  );
};

export default DogList4;

// const App = () => {
//   const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

//   return (
//     <div>
//       <DogList4 dogs={dogs} />
//     </div>
//   );
// };
