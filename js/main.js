function start() {
  const message = document.getElementById("message");
  message.style.display = "block";
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
  start();
});
