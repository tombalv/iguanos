import "./App.scss";
import "./buttons.scss";
import Counter from "./Components/005/Counter";
import Sq from "./Components/005/Sq";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Props</h1>
        <Counter count />
        <Sq />
      </header>
    </div>
  );
}

export default App;
