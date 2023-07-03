const Propscolors = (props) => {
  const { text1, text2, color } = props;

  const headingStyle = {
    color: color,
  };

  return (
    <div>
      <h1 style={headingStyle}>{text1}</h1>
      <h2 style={headingStyle}>{text2}</h2>
    </div>
  );
};

export default Propscolors;

{
  /* <div>
          <Propscolor
            text1="LABAS, ZUIKI!"
            text2="Sveiki, pasauli!"
            color="yellow"
          />
        </div> */
}
