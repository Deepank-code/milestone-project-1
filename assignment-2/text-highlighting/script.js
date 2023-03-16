let para = document.getElementById("para").innerText;
let para_arr = para.split(" ");

window.onload = function () {
  const check = (word) => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + "</span>";
    } else {
      return word;
    }
  };

  const para = document.querySelector("#para");
  para.innerHTML = para.innerText.trim().split(" ").map(check).join(" ");
};
