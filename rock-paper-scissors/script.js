"use strict"
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".my-modal");
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if (rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Get game winner
function getWinner(pl, comp) {
    if (pl === comp) {
        return "draw";
    }
    else if (pl === "rock") {
        if (comp === "paper") {
            return "computer";
        } else {
            return "player";
        }
    }
    else if (pl === "paper") {
        if (comp === "scissors") {
            return "computer";
        }
        else { return "player" }
    }
    else if (pl === "scissors") {
        if (comp === "rock") {
            return "computer";
        } else { return "player" }
    }
}

//Show Winner
function showWinner(winner, computerChoice) {
    if (winner === "player") {
        scoreboard.player++;
        result.innerHTML =
            `<h1 class="text-win">You Win!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else if (winner === "computer") {
        scoreboard.computer++;
        result.innerHTML =
            `<h1 class="text-lose">You Lose!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else {
        result.innerHTML =
            `<h1>It's a draw!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    score.innerHTML = `<div class="row  justify-content-center">
    <div class="player col-5 mx-2 py-2">Player: ${scoreboard.player}</div>
    <div class="computer col-5 mx-2 py-2">Computer: ${scoreboard.computer}</div>
</div>`;
    //         `<p>Player: ${scoreboard.player}</p>
    //         <p>Computer: ${scoreboard.computer}</p>
    // `;
    modal.style.display = "block";
}
//Restart
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <div class="row finalscore justify-content-center">
    <div class="player col-5 mx-2 py-2">Player: 0</div>
    <div class="computer col-5 mx-2 py-2">Computer: 0</div>
</div>
    `;
    restart.style.display = "none"
}

//Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

//Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
