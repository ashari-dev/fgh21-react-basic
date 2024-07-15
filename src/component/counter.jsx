import React, { useState } from "react";
function Counter() {
  const [num, setNum]=useState(0)
  function min() {
    setNum(i => i-1)
  }
  function plus() {
    setNum(i => i+1)
  }
  if (num < 0 || num > 10) {
    setNum(0)
  }
  return (
    <div className="container">
      <button onClick={min}>-</button>
      <div>{num}</div>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default Counter