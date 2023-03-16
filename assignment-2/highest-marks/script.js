let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");

console.log(typeof marks);
let btn = document.querySelector(".btn");
let result = document.getElementById("result");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let mark_arr = [
    Number(m1.value),
    Number(m2.value),
    Number(m3.value),
    Number(m4.value),
    Number(m5.value),
  ];
  console.log(mark_arr);

  let max_marks = 0;

  mark_arr.forEach((element) => {
    if (element > max_marks) {
      max_marks = element < 33 ? "sorry you are literally failed" : element;
      //  max_marks = element;
      console.log(element, max_marks);
    }
    return max_marks;
  });

  result.innerText = `Maximum marks :${max_marks}`;
});
