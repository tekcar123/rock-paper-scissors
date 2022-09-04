'use strict'

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        console.warn("incorrect random number");
        return choice;
    }
}

function getPlayerChoice() {
    let choice = prompt("What do you want to play?").toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.warn("invalid input, try again.")
        return getPlayerChoice();
    }
}

// function to play a round with computer and player choice

function round(player, computer) {
    if (player === "rock") {
        if (computer === "rock") {
            console.log("Tie.")
            return "tie"
        } else if (computer === "paper") {
            console.log("The computer wins with paper!")
            return "computer"
        } else if (computer === "scissors") {
            console.log("The player wins with rock!")
            return "player"
        } else {
            console.error("wrong computer choice")
            return "error"
        }
    } else if (player === "paper") {
        if (computer === "rock") {
                console.log("The player wins with paper !")
                return "player"
            } else if (computer === "paper") {
                console.log("Tie.")
                return "tie"
            } else if (computer === "scissors") {
                console.log("The computer wins with scissors !")
                return "computer"
            } else {
                console.error("wrong computer choice")
                return "error"
            }
    } else if (player === "scissors") {
        if (computer === "rock") {
                console.log("The computer wins with rock !")
                return "computer"
            } else if (computer === "paper") {
                console.log("The player wins with scissors !")
                return "player"
            } else if (computer === "scissors") {
                console.log("Tie.")
                return "tie"
            } else {
                console.error("wrong computer choice")
                return "error"
            }
    } else {
        console.error("wrong player choice")
        return "error"
    }
}


// game function that asks how many rounds to play

// console.log winner