let cart = document.getElementById("cart");
let output = document.getElementById("result");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //logic
  let cart_arr = cart.value.split(",");

  let new_arr = cart_arr.filter(
    (item, index) => cart_arr.indexOf(item) === index
  );
  console.log(new_arr);
  output.innerHTML = `Your cart items are--
  <ul>
  ${new_arr.map((item) => {
    return item;
  })}
 
  </ul>
  `;
  output.style.color = "purple";
});
