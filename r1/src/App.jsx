import "./App.scss";

// import Counter from "./Components/005/Counter";
// import Sq from "./Components/005/Sq";
// import Bank from "./Components/U1/App";
import Fancy from "./Components/006/Fancy";
import Input from "./Components/006/Input";
import Input2 from "./Components/006/Input2";
import Select from "./Components/006/Select";
import "./buttons.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Select />
        <Fancy />
        <Input />
        <Input2 />
      </header>
    </div>
  );
}

export default App;
