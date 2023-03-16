let list_item = document.getElementById("item");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

let item_arr = [];
let i = 0;
let x = " ";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  item_arr.push(list_item.value);

  item_arr.forEach((element) => {
    if (i < item_arr.length) {
      x += item_arr[i++] + "<br>";
    }
    // result.innerHTML += "<li>" + element + "</li>";
  });
  result.innerHTML = x;
  console.log(item_arr);
});
