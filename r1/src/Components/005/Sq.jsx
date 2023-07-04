import { useRef, useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Sq() {
  const [sq, setSq] = useState([]);
  const [dir, setDir] = useState(1);
  const sortPress = useRef(0);

  const addOne = (_) => {
    setSq((s) => [
      ...s,
      { d: rand(1000, 9999), c: randColor(), row: s.length, show: true },
    ]);
  };

  const sort = (_) => {
    setSq((s) => [...s].sort((a, b) => dir * (a.d - b.d)));
    setDir((d) => d * -1);
    console.log("Send to MI6", ++sortPress.current);
  };
  const sortDefault = (_) => {
    setSq((s) => [...s].sort((a, b) => a.row - b.row));
  };
  const filterMore5000 = (_) => {
    setSq((s) =>
      s.map((sq) =>
        sq.d > 5000 ? { ...sq, show: true } : { ...sq, show: false }
      )
    );
  };

  const resetFilter = (_) => {
    setSq((s) => s.map((sq) => ({ ...sq, show: true })));
  };

  return (
    <div>
      <h1>Square</h1>
      <div className="sq-bin">
        {sq.map((s, i) =>
          s.show ? (
            <div
              key={i}
              className="sq small"
              style={{ backgroundColor: s.c, borderColor: s.c }}
            >
              {s.d}
            </div>
          ) : null
        )}
      </div>
      <button className="red" onClick={addOne}>
        Add Square
      </button>
      <button className="blue" onClick={(_) => setSq([])}>
        Clear
      </button>
      <button className="yellow" onClick={sort}>
        Sort
      </button>
      <button className="green" onClick={sortDefault}>
        Sort default
      </button>
      <button className="purple" onClick={filterMore5000}>
        Sort more than 5000
      </button>
      <button className="green" onClick={resetFilter}>
        Reset filter
      </button>
    </div>
  );
}
export default Sq;
