/*------------------------ Cached Element References ------------------------*/
const numberElement = document.querySelectorAll(".number");
const operatorElement = document.querySelectorAll(".operator");
const equalsrElement = document.querySelector(".equals");
const displayElemt = document.querySelector(".display");
console.log(displayElemt);
console.log(numberElement);
console.log(operatorElement);
console.log(equalsrElement);

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let number1 = null;
let number2 = null;
let opreator = null;
let result = null;
/*-------------------------------- Functions --------------------------------*/
function handleClicNumber(event) {
  console.log("clicked on number");
  console.log(event.target.textContent);
  if (!number1 && !number2 && !opreator) {
    number1 = event.target.textContent;
    displayElemt.textContent = number1;
  } else if (number1 && !number2 && !opreator) {
    number1 += event.target.textContent;
    displayElemt.textContent = number1;
  } else if (number1 && !number2 && opreator) {
    number2 = event.target.textContent;

    displayElemt.textContent = number2;
  }

  console.log(`number 1: ${number1}`);
  console.log(`number 2: ${number2}`);
  console.log(`opreator ${opreator}`);
}
function handleClicOpreator(event) {
  console.log("clicked on Opreator");
  if (number1 && !number2 && !opreator) {
    opreator = event.target.textContent;
  }

  console.log(`number 1: ${number1}`);
  console.log(`number 2: ${number2}`);
  console.log(`opreator ${opreator}`);
}
function handleClicEquals(event) {
  console.log("clicked on equals");
  if (opreator === "*") {
    result = Number(number1) * Number(number2);
    displayElemt.textContent = number1;
    displayElemt.textContent = number2;
    displayElemt.textContent = result;
  } else if (opreator === "+") {
    result = Number(number1) + Number(number2);
    displayElemt.textContent = number1;
    displayElemt.textContent = number2;
    displayElemt.textContent = result;
  } else if (opreator === "-") {
    result = Number(number1) - Number(number2);
    displayElemt.textContent = number1;
    displayElemt.textContent = number2;
    displayElemt.textContent = result;
  } else if (opreator === "/") {
    result = Number(number1) / Number(number2);
    displayElemt.textContent = number1;
    displayElemt.textContent = number2;
    displayElemt.textContent = result;
  }

  console.log(result);
}

/*----------------------------- Event Listeners -----------------------------*/
equalsrElement.addEventListener("click", handleClicEquals);
for (let oneNumElement of numberElement) {
  oneNumElement.addEventListener("click", handleClicNumber);
}

for (let oneOprElement of operatorElement) {
  oneOprElement.addEventListener("click", handleClicOpreator);
}
