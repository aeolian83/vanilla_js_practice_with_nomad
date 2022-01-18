const inputNumber = document.querySelector(".number-input");
const generateNumber = document.getElementById("generate-number")
const myNumber = document.getElementById("guess-number");
const numberDisplay = document.querySelector(".current-number");
const resultDisplay = document.querySelector(".game-result");

const HIDDEN_CLASSNAME = "hidden"

function numberGame(event) {
    event.preventDefault();
    const ceilNumber = generateNumber.value;
    const argumentNumber = Math.floor(Math.random() * ceilNumber);
    const currentNumber = myNumber.value;
    numberDisplay.innerText = `You chose: ${currentNumber}, the machine chose: ${argumentNumber}`;
    numberDisplay.classList.remove(HIDDEN_CLASSNAME);
    if (currentNumber == argumentNumber){
        resultDisplay.innerText = "You win!!";
        resultDisplay.classList.remove(HIDDEN_CLASSNAME);
    } else {
        resultDisplay.innerText = "You lost!!";
        resultDisplay.classList.remove(HIDDEN_CLASSNAME);
    }
}



inputNumber.addEventListener("submit", numberGame);