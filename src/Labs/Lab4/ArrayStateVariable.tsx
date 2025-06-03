import { useState } from "react";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((_item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables" className="w-50">
    <h2>Array State Variable</h2>
    <button className="btn btn-success"
      onClick={addElement}>Add Element</button>
    <ul className="list-unstyled">
      {array.map((item, index) => (
      <li 
        className="d-flex border justify-content-between align-items-center py-1 fs-4"
        key={index}> 
        {item}
        <button 
          className="btn btn-danger"
          onClick={() => deleteElement(index)}>
          Delete
        </button>
      </li>))}
    </ul><hr/>
  </div>
);}