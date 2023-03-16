let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (text.innerHTML == "PW Skill") {
    console.log("clicked");
    text.innerText = "The most affordable learning platform";
  } else {
    text.innerText = "PW Skill";
  }
});
