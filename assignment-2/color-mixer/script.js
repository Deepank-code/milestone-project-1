let color1 = document.getElementById("color1");

let color2 = document.getElementById("color2");
let btn = document.querySelector(".btn");
let result = document.getElementById("result");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let res;
  switch (true) {
    case color1.value == "red" && color2.value == "blue":
      console.log(color1.value == "red" && color2.value == "blue");
      res = "purple";
      break;
    case color1.value == "red" && color2.value == "yellow":
      res = "orange";
      break;
    case color1.value === "blue" && color2.value === "yellow":
      res = "green";

      break;

    default:
      res = "Invalid color combination";
  }

  console.log(res);

  result.innerText = `Result of above operation is:${String(res)}`;
});
