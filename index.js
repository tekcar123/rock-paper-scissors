
let playerScore = 0
let computerScore = 0
let winnerMessage = document.getElementById("winnerMessage")
let playersPicked = [];
let playself = false;
/*
let choices = document.getElementsByClassName("choice")
for (div of choices) {
    console.log(`${div.innerText} // event listener created`)
    div.addEventListener('click', () => {
        playersPicked[0] = div.innerText
        computerPick()
        console.log(`${div.innerText} was clicked`)
    })
}



function myFunction() {
    let random = Math.random()
    if (random <= 0.33) {
        

        playerScore += 1
        document.getElementById("player").innerHTML = playerScore
        document.getElementById("winnerMessage").innerHTML = "You won!"
    } else if (random <= 0.66) {
        computerScore += 1
        document.getElementById("computer").innerHTML = computerScore
        document.getElementById("winnerMessage").innerHTML = "You lost :("
    }
    else {
        document.getElementById("winnerMessage").innerHTML = "Tie."
    }
}
*/

function computerPlaySelf() {
    if (playself) {
        document.getElementById('playself').innerText = 'Let computer play itself'
        playself = false;
    } else {
        document.getElementById('playself').innerText = 'Stop computer playing itself'
        playself = true;
        startPlaySelf()
    }
}

function startPlaySelf() {
    if (playself) {
        let random = Math.random()
        if (random <= 0.33) 
            playersPicked[0] = 'rock'
        else if (random <= 0.66)
            playersPicked[0] = 'paper'
        else
            playersPicked[0] = 'scissors'

        console.log(`player picked %c${playersPicked[1]}`, `color: #00ff00; font-size: 25px`)
        computerPick()

        setTimeout(startPlaySelf, 20)
    }
}

function computerPick() {
    let random = Math.random()
    if (random <= 0.33) 
        playersPicked[1] = 'rock'
    else if (random <= 0.66)
        playersPicked[1] = 'paper'
    else
        playersPicked[1] = 'scissors'

    console.log(`computer picked %c${playersPicked[1]}`, `color: #ff0000; font-size: 25px`)
    // Paper > Rock > Scissors > Paper

    if (playersPicked[0] == 'paper' && playersPicked[1] == 'rock')
        playerWin()
    else if (playersPicked[0] == 'rock' && playersPicked[1] == 'scissors')
        playerWin()
    else if (playersPicked[0] == 'scissors' && playersPicked[1] == 'paper')
        playerWin()
    else if (playersPicked[0] == playersPicked[1])
        playersTie()
    else
        playerLoss()
}

function playerWin() {
    playerScore += 1
    document.getElementById("player").innerHTML = playerScore
    document.getElementById("winnerMessage").innerHTML = "You won!"
    console.log(`player won`)
}

function playerLoss() {
    computerScore += 1
    document.getElementById("computer").innerHTML = computerScore
    document.getElementById("winnerMessage").innerHTML = "You lost :("
    console.log(`player loss`)
}

function playersTie() {
    document.getElementById("winnerMessage").innerHTML = "Tie."
    console.log(`player tie`)
}