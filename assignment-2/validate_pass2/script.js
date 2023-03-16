let email = document.getElementById("email");
let password = document.getElementById("password");
let result = document.getElementById("result");
let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email.innerText.indexOf("@"));
  if (email.innerText.indexOf("@") >= -1 && password.innerText.length() >= 8) {
    result.innerText = "“Valid email and password!”";
    result.style.color = "green";
  } else {
    result.innerText = "“Invalid email or password!”";
    result.style.color = "red";
  }
});
