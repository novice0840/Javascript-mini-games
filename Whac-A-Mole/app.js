const MOLE_NUMBER = 25;
const LIMIT_TIME = 30;
const $moles = document.querySelectorAll(".mole");
const $moleOn = document.querySelector(".mole-on");
const $startButton = document.querySelector(".start-button");
const $timer = document.querySelector(".timer");
const $score = document.querySelector(".score");

const createRandomNumber = () => {
  return Math.floor(Math.random() * MOLE_NUMBER);
};

const changeMole = () => {
  const randomNumber = createRandomNumber();
  $moles.forEach(($mole, index) => {
    if (index === randomNumber) {
      $mole.classList.add("mole-on");
    } else {
      $mole.classList.remove("mole-on");
    }
  });
};

const endGame = () => {
  const name = prompt("닉네임을 입력해주세요");
  localStorage.setItem(name, $score.innerText);
  $timer.innerText = "";
  $score.innerText = "";
};

const startGame = () => {
  changeMole();
  $timer.innerText = LIMIT_TIME;
  $score.innerText = 0;
  const timeInterval = setInterval(() => {
    $timer.innerText = Number($timer.innerText) - 1;
    if ($timer.innerText === "0") {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};

$moles.forEach(($mole, index) => {
  $mole.addEventListener("click", (event) => {
    if ($mole.classList.contains("mole-on")) {
      changeMole();
      $score.innerText = Number($score.innerText) + 1;
    }
  });
});

$startButton.addEventListener("click", () => {
  startGame();
});
