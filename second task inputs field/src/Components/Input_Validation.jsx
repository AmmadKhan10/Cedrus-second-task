function Input_Validation() {
    
    return (
    <>
    {/*<!-----------------------------Question no#01  ----------------->*/}
<hr />
<div class="parent1">
    <h1 class="main-heading">Question No#01</h1>
    <input type="text" placeholder="Enter your string here" id="field"/><br/>
    <button onclick="string_check()">Click to check</button>
    <p id="para1"></p>
</div>
<hr />
 {/*<!-----------------------------Question no#02  ----------------->*/}

<div class="parent2">
    <h1 class="main-heading">Question No#02</h1>
    <input type="text" placeholder="Enter your string here" id="remove"/><br/>
    <input type="text" placeholder="Enter the index" id="position"/><br/>
    <button onclick="remove_letter()">Click to remove</button>
    <p id="result"></p>
</div>
<hr />
 {/*<!-----------------------------Question no#03  ----------------->*/}

 <div class="parent3">
    <h1 class="main-heading">Question No#03</h1>
    <input type="text" placeholder="Enter your string here" id="field1"/><br/>
    <button onclick="add_New()">Click to check</button>
    <p id="para2"></p>
</div>
<hr />
 {/*<!-----------------------------Question no#04  ----------------->*/}
<div class="parent4">
    <h1 class="main-heading">Question No#04</h1>
    <input type="text" placeholder="Enter your string here" id="field2"/><br/>
    <button onclick="add_FrontEnd()">Click to check</button>
    <p id="para3"></p>
</div>
<hr />
 {/*<!-----------------------------Question no#05  ----------------->*/}

<div class="parent5">
    <h1 class="main-heading">Question No#05</h1>
    <input type="text" placeholder="Enter a number to be check" id="field3"/><br/>
    <button onclick="check_Multiple()">Click to check Multiple</button>
    <p id="para4"></p>
</div>
<hr />
 {/*<!-----------------------------Question no#06  ----------------->*/}

<div class="parent6">
    <h1 class="main-heading">Question No#06</h1>
    <input type="text" placeholder="Enter a number to be check" id="field4"/><br/>
    <button onclick="add_New3char()">Click to check</button>
    <p id="para5"></p>
</div>
<hr />
   {/*<!-----------------------------Question no#07  ----------------->*/}
  <div class="parent7">
    <h1 class="main-heading">Question No#07</h1>
    <input type="number" placeholder="Enter first number" id="num1"/><br/>
    <input type="number" placeholder="Enter second number" id="num2"/><br/>
    <input type="number" placeholder="Enter third number" id="num3"/><br/>
    <button onclick=" largest_Number()">Click to check</button>
    <p id="result1"></p>
</div>
<hr />
   {/*<!-----------------------------Question no#08  ----------------->*/}

<div class="parent8">
    <h1 class="main-heading">Question No#8</h1>
    <input type="number" placeholder="Enter your grade" id="grade"/><br/>
    <input type="text" placeholder="Enter Exam type" id="exam"/><br/>
    <button onclick=" grade_Check()">Click to check</button>
    <p id="result2"></p>
    <p id="result3"></p>
</div>
<hr />
</>
    )
}

export default Input_Validation;