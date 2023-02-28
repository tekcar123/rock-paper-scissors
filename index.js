let a = document.getElementsByClassName("choice")
for (b of a) {
    b.addEventListener('click', myFunction)
}

let playerScore = 0
let computerScore = 0
let winnerMessage = document.getElementById("winnerMessage")

function myFunction() {
    let random = Math.random() * 3
    if (random <= 1) {
        playerScore += 1
        document.getElementById("player").innerHTML = playerScore
        document.getElementById("winnerMessage").innerHTML = "You won!"
    } else if (random <= 2) {
        computerScore += 1
        document.getElementById("computer").innerHTML = computerScore
        document.getElementById("winnerMessage").innerHTML = "You lost :("
    }
    else {
        document.getElementById("winnerMessage").innerHTML = "Tie."
    }
}