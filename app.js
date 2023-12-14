let letsPlayBingoBtn = document.getElementById("lets-play-bingo-btn");
let nextBallBtn = document.getElementById("next-ball-btn");
let endGameBtn = document.getElementById("end-game-btn");
let currentBall = document.getElementById("current-ball");
let currentBallCall = document.getElementById("current-ball-call");
let allDranBallsList = document.getElementById("all-drawn-balls-list");

let availableBalls = [...bingoBallsAndCalls];
let drawnBalls = [];

letsPlayBingoBtn.addEventListener("click", function () {
  nextBallBtn.classList.remove("hidden");
  endGameBtn.classList.remove("hidden");
  letsPlayBingoBtn.classList.add("hidden");
  confirm("Click next ball to start!");
});

nextBallBtn.addEventListener("click", function () {
  if (availableBalls.length === 0) {
    console.log("No more balls available.");
    return;
  }

  let getRandomIndex = Math.floor(Math.random() * availableBalls.length);
  let nextBall = availableBalls[getRandomIndex];
  availableBalls.splice(getRandomIndex, 1);
  drawnBalls.push(nextBall);
  drawnBalls.sort((a, b) => a.Number - b.Number);
  currentBall.innerHTML = nextBall.Number;
  currentBallCall.innerHTML = nextBall.Call;

  updateDrawnBallsList();
});

function updateDrawnBallsList() {
  allDranBallsList.innerHTML = "";

  for (let ball of drawnBalls) {
    let listItem = document.createElement("li");
    listItem.textContent = ball.Number;
    allDranBallsList.appendChild(listItem);
  }
}

endGameBtn.addEventListener("click", () => {
  let userConfirms = confirm("Are you sure you want to end this game?");
  if (userConfirms == true) {
    availableBalls = [...bingoBallsAndCalls];
    drawnBalls = [];
    allDranBallsList.innerHTML = "";
    currentBall.innerHTML = "";
    currentBallCall.innerHTML = "";
    endGameBtn.classList.add("hidden");
    nextBallBtn.classList.add("hidden");
    letsPlayBingoBtn.classList.remove("hidden");
  }
});
