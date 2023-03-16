let fname = document.getElementById("name");
let output = document.getElementById("result");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let captalize =
    fname.value[0].toUpperCase() + fname.value.slice(1, fname.length);

  output.innerText = "Your name is " + captalize;
  output.style.color = "purple";
});
