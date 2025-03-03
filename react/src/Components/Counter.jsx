import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();
  const clickHandle = () => {
    setCount(count + Number(input));
  };
  const clickHandler = () => {
    setCount(count - input);
  };
  return (
    <div>
      <label>Increament/Decrement step</label>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{count}</h1>
      <button onClick={clickHandle}>Increment</button>
      <button onClick={clickHandler}>Decrement</button>
    </div>
  );
};
export default Counter;


