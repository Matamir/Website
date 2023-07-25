const twentyfourgame = () => {

  let num1 = Math.ceil(Math.random() * 10);
  let num2 = Math.ceil(Math.random() * 10)
  let num3 = Math.ceil(Math.random() * 10)
  let num4 = Math.ceil(Math.random() * 10)

  let add = "+";
  let sub = "-";
  let mult = "*";
  let div = "/";

  let equation = ""

  const number = (num) => 
  `<div class = "col" onClick="equationText.value = equationText.value.concat(${num})">
    ${num}
  </div>`

  const numbers =
    `
    <div class = "container">
      <div class = "row">
        ${number(num1)}
        
        ${number(num2)}
        
        ${number(num3)}

        ${number(num4)}
      </div>
    </div>
    `
  const tool = (sym) => 
    `<div class = "col" onClick="equationText.value = equationText.value.concat(${sym})">
      ${sym}
    </div>`

  const tools =
    `
    <div class = "container">
      <div class = "row">
        ${tool(add)}
        
        ${tool(sub)}
        
        ${tool(mult)}

        ${tool(div)}
      </div>
    </div>
    `

  return (`
    <div>
      ${numbers}
      <br/>
      ${tools}

      <textarea id="equationText" value="${equation}"></textarea>

      <button style="margin-top: 100px" id ="checkButton" onClick="if(eval(equationText.value) == 24) {console.log('good')} else {console.log('bad')}">
        check Math
      </button>

    </div>
  `);
}
export default twentyfourgame;
