//Variable
let numberOfSq = 6;
let colors = [];
let pickedColor;

//DOM selectors
const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector("#message");
const header = document.querySelector(".header");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

//Initializes everything
function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

//Sets up easy and hard mode buttons
function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.innerHTML === "Easy" ? numberOfSq = 3 : numberOfSq = 6;
            reset();
        });
    }
}

//Creates the background colors of the squares
function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.innerHTML = "Correct!";
                resetButton.innerHTML = "Play again?";
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.innerHTML = "Try again"
            }
        });
    }
}

//Resets the game after winning
function reset() {
    colors = generateColors(numberOfSq);
    pickedColor = pickRandomColor();
    colorDisplay.innerHTML = pickedColor;
    resetButton.innerHTML = "New colors";
    messageDisplay.innerHTML = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    header.style.backgroundColor = "#008080";
}

//Reset button event
resetButton.addEventListener("click", function () {
    reset();
});

//Shows the
colorDisplay.innerHTML = pickedColor;

//Changes the colors of all the squares
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
//Picks a random color that the player has to guess
function pickRandomColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generates RGB colors for all squares
function generateColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//Creates a random number for Red, Green and Blue
function randomColor() {
    let r = Math.floor(Math.random() * 256);

    let g = Math.floor(Math.random() * 256);

    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

