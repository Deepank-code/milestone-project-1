var image = document.getElementById("image");

// set initial position of the image
var x = 0;
var y = 0;

// define the movement step size
var step = 10;

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37: // left arrow
      x -= step;
      break;
    case 38: // up arrow
      y -= step;
      break;
    case 39: // right arrow
      x += step;
      break;
    case 40: // down arrow
      y += step;
      break;
  }

  // update the position of the image
  image.style.left = x + "px";
  image.style.top = y + "px";
});
