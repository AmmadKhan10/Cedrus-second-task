import { useState } from "react";
function IFQuestion3() {
    const [field, setFiled] = useState(" ");
    function handleIndex() {
        setFiled(e.target.value);
    }
    return (
        <>
         <div className="parent3">
        <h1 className="main-heading">Question No#03</h1>
        <input type="text" placeholder="Enter your string here" onChange={handleIndex}/>
        <br />
        <button onclick="add_New()">Click to check</button>
        <p id="para2"></p>
      </div>
      <hr />
        </>
    )
}
export default IFQuestion3;