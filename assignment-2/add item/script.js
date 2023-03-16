let result = document.getElementById("result");
let btn = document.getElementById("btn");
let item_arr = ["apple", "choco", "mango", "potato", "tomato"];

let i = 0;
let x = " ";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (i < item_arr.length) {
    x += item_arr[i++] + "<br>";
  } else {
    document.getElementById("desc").innerHTML =
      "“No more item are left list is empty”";
    document.getElementById("desc").style.color = "purple";
  }
  document.getElementById("result").innerHTML = x;
});
