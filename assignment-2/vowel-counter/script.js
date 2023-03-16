let fname = document.getElementById("name");
let output = document.getElementById("result");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let vowelCounter = 0;
  console.log(fname.value.split(""));
  fname.value.split("").forEach((char) => {
    console.log(char);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowelCounter++;
      console.log(char, vowelCounter);
    }
    return vowelCounter;
  });

  output.innerText = `Your name ${fname.value} has ${vowelCounter} `;
  output.style.color = "purple";
});
