let num1 = document.getElementById("num1");
let operands = document.getElementById("operator");
let num2 = document.getElementById("num2");
let btn = document.querySelector(".btn");
let result = document.getElementById("result");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let res;
  switch (operands.value) {
    case "+":
      res = Number(num1.value) + Number(num2.value);
      break;
    case "-":
      res = Number(num1.value) - Number(num2.value);

      break;
    case "*":
      res = Number(num1.value) * Number(num2.value);

      break;
    case "/":
      res = Number(num1.value) / Number(num2.value);

      break;

    default:
      res = "Invalid Operator";
  }

  console.log(res);
  result.innerText = `Result of above operation is:${Number(res)}`;
});
