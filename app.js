let letsPlayBingoBtn = document.getElementById("lets-play-bingo-btn");
let nextBallBtn = document.getElementById("next-ball-btn");
let endGameBtn = document.getElementById("end-game-btn");
let currentBall = document.getElementById("current-ball");
let currentBallCall = document.getElementById("current-ball-call");
let allDranBallsList = document.getElementById("all-drawn-balls-list");

let drawnBalls = [];

nextBallBtn.addEventListener("click", function () {
  let getRandomBingoBall = Math.floor(Math.random() * 90);
  let nextBall = bingoBallsAndCalls[getRandomBingoBall];

  drawnBalls.push(nextBall);
  console.log(drawnBalls);
  currentBall.innerHTML = nextBall.Number;
  currentBallCall.innerHTML = nextBall.Call;
  allDranBallsList.innerHTML += nextBall.Number + "--";
});
