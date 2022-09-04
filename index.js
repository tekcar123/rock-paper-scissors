'use strict'

// function get computer choice

function getComputerChoice() {
    let choice = Math.floor(Math.random()) * 3
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else if (choice === 3) {
        return "scissors"
    } else {
        console.warn("incorrect random number")
    }
}

// function get player choice (case insensitive)

// function to play a round with computer and player choice

// game function that asks how many rounds to play

// console.log winner