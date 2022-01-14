const body = document.querySelector("body");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resizeBackground() {
  const bodyWidth = window.innerWidth;
  if (bodyWidth < 500) {
    body.style.backgroundColor = "#2e8cd5";
  } else if (bodyWidth >= 500 && bodyWidth <= 900) {
    body.style.backgroundColor = "#904fad";
  } else if (bodyWidth > 900) {
    body.style.backgroundColor = "#eebc12";
  }
}

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.innerText = window.innerWidth;
}

// window.onresize = resizeBackground;

window.addEventListener("resize", resizeBackground);
window.addEventListener("resize", reportWindowSize);
