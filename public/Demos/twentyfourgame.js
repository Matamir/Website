const twentyfourgame = () => {

  let num1 = Math.ceil(Math.random() * 10);
  let num2 = Math.ceil(Math.random() * 10)
  let num3 = Math.ceil(Math.random() * 10)
  let num4 = Math.ceil(Math.random() * 10)

  let add = "+";
  let sub = "-";
  let mult = "*";
  let div = "/";
  let openParen = "("
  let closeParen = ")"


  let equation = ""

  const number = (num) =>
    `<div class = "col" onClick="equationText.value = equationText.value.concat(${num})">
    <button type="button" class = "btn btn-info">
    ${num}
    </button>
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
    `<div class = "col" onClick="equationText.value = equationText.value.concat('${sym}')">
    <button type="button" class = "btn btn-success">
    ${sym}
    </button>
    </div>`

  const tools =
    `
    <div class = "container">
      <div class = "row">
        ${tool(add)}
        
        ${tool(sub)}
        
        ${tool(mult)}

        ${tool(div)}

        ${tool(openParen)}

        ${tool(closeParen)}
      </div>
    </div>
    `

  return (`
    <div>
      ${numbers}
      <br/>
      ${tools}

      <br/>

      <div class = "container">
        <div class = "row">

          <div class = "col">
            <textarea readonly style = "resize:none" rows = "3" cols = "100" id="equationText" value="${equation}"></textarea>
          </div>

          <div class = "col">

            <div class = "row">
              <button class = "mr-3 btn btn-warning" id ="checkButton" onClick="if(eval(equationText.value) == 24) {console.log('good')} else {console.log('bad')}">
                Check Math
              </button>
            </div>

            <div class = "row">
              <button class = "mr-3 btn btn-danger" id ="reset" onClick="equationText.value = ''">
                Reset Equation
              </button>
            </div>
              
          </div>
        </div>
      </div>
    
    </div>
  `);
}
export default twentyfourgame;
