let btn = document.getElementById("btn");
let color_arr = ["blue", "red", "green", "yellow", "grey", "brown"];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  document.body.style.backgroundColor =
    color_arr[Math.floor(Math.random() * color_arr.length + 1)];
});
