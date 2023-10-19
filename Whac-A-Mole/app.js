const moleNumber = 25;
const $moles = document.querySelectorAll(".mole");
const $moleOn = document.querySelector(".mole-on");
const $startButton = document.querySelector(".start-button");
const $timer = document.querySelector(".timer");
const $score = document.querySelector(".score");

const createRandomNumber = () => {
  return Math.floor(Math.random() * moleNumber);
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

const startGame = () => {
  changeMole();
  $timer.innerText = 30;
  $score.innerText = 0;
};

$moleOn?.addEventListener("click", () => {
  console.log("mole on ");
  changeMole();
});

$startButton.addEventListener("click", () => {
  startGame();
});
