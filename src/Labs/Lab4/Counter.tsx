import { useState } from "react";
export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-success me-2"
        onClick={() => { setCount(count + 1); console.log(count); }}
        id="wd-counter-up-click">Up</button>
      <button
        className="btn btn-danger"
        onClick={() => { setCount(count - 1); console.log(count); }}
        id="wd-counter-down-click">Down</button>
<hr/></div>);}