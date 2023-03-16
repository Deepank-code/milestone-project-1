const scrollProgress = document.querySelector("#scroll-progress");

function scrollProgressfun() {
  const totalHeight = document.body.scrollHeight;

  const currentDistanceFromTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  console.log(totalHeight);
  console.log(currentDistanceFromTop);
  console.log(windowHeight);
  const scrolledPer =
    (currentDistanceFromTop / (totalHeight - windowHeight)) * 100;

  scrollProgress.style.width = Math.round(scrolledPer);
}
document.addEventListener("scroll", scrollProgressfun);
