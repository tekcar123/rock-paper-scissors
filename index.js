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

// function get player choice (case insensitive)

function getPlayerChoice() {
    let choice = prompt("What do you want to play?").toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.warn("invalid input, try again.")
        return getPlayerChoice();
    }
}

console.log(getPlayerChoice())

// function to play a round with computer and player choice

// game function that asks how many rounds to play

// console.log winner