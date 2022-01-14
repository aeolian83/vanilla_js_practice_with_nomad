const body = document.querySelector("body");

function resizeBackground() {
  const bodyWidth = window.innerWidth;
  if (bodyWidth < 500) {
    body.style.backgroundColor = "#2e8cd5";
  } else if (bodyWidth >= 500 && bodyWidth < 900) {
    body.style.backgroundColor = "#904fad";
  } else if (bodyWidth > 900) {
    body.style.backgroundColor = "#eebc12";
  }
}

window.onresize = resizeBackground;
