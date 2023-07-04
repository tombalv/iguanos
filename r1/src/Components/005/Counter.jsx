import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const setTo555 = (_) => {
    setCount(555);
  };
  const add1 = (_) => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="red" onClick={setTo555}>
        set to 55
      </button>
      <button className="blue" onClick={add1}>
        +1
      </button>
    </div>
  );
}

export default Counter;
