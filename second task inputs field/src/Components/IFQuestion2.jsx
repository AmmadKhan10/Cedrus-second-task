
import { useState } from "react";

function IFQuestion2() {
  const [field1, setField] = useState('');
  const [index, setIndex] = useState('');
  const [click, setClick] = useState('');

  function handleFieldInput(e) {
    setField(e.target.value);
  }

  function handleIndexInput(e) {
    const result=parseInt(e.target.value);
    setIndex(result);
    
    
  }

  function handleRemove() {
    const parsedIndex = parseInt(index);
    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < field1.length) {
      setClick(field1.slice(0, parsedIndex) + field1.slice(parsedIndex +1));
    } else {
      setClick('Invalid index');
    }
  }

  return (
    <>
      <div className="parent2">
        <h1 className="main-heading">Question No#02</h1>
        <input type="text" placeholder="Enter your string here" onChange={handleFieldInput} />
        <br />
        <input type="number" placeholder="Enter the index" onChange={handleIndexInput} />
        <br />
        <button onClick={handleRemove}>Click to remove</button>
        <p>{click}</p>
      </div>
      <hr />
    </>
  );
}

export default IFQuestion2;
