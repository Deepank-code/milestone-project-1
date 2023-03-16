const password = document.getElementById("password");
const cpass = document.getElementById("con_password");
let submitbtn = document.querySelector(".btn");

submitbtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.value == "" || cpass.value == "") {
    alert("password and conform password should't be blank");
  } else if (password.value === cpass.value) {
    console.log(password.value, cpass.value);
    alert("Password Matched.");
    console.log("Password Matched");
  } else {
    alert("Password didn't match.");
    console.log("Password did't Matched");
  }
});
