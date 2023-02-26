function start() {
  const startPad = document.getElementById("startPad");
  const screen = document.getElementById("screen");
  screen.style.backgroundColor = "red";
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
  start();
});
