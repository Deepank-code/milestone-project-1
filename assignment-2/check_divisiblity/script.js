let numbers = document.getElementById("numbers");
let output = document.getElementById("result");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let num_arr = numbers.value.split(",").map((item) => {
    return parseInt(item);
  });
  let new_arr = [];

  for (let i = 0; i < num_arr.length; i++) {
    if (num_arr[i] % 3 == 0 && !(num_arr[i] % 2 == 0)) {
      new_arr.push(num_arr[i]);
    } else {
      continue;
    }
  }

  output.innerText =
    "Number that are divisible by 3 not by 2 are " + new_arr.join(",");
  output.style.color = "purple";
});
