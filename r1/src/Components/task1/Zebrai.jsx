const zebras = (props) => {
  let color = "black";

  if (props.value === 1) {
    color = "blue";
  } else if (props.value === 2) {
    color = "red";
  }

  const textStyle = {
    color: color,
  };

  return (
    <div>
      <h1 style={textStyle}>Zebrai ir Bebrai</h1>
    </div>
  );
};

export default zebras;

// const value = () => {
//   return (
//     <div>
//       <CustomComponent value={1} />
//       <CustomComponent value={2} />
//       <CustomComponent value={3} />
//     </div>
//   );
// };
