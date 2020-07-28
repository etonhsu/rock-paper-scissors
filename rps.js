function computerPlay() {
    let round = Math.floor(Math.random() * 3)
    if (round === 0) {
        return "rock"
    }
    else if (round === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function compare(new_playerChoice, computerChoice) {
    let result = ""

    if (new_playerChoice === "rock") {
        if (computerChoice === "rock") {
            result = "draw"
        }
        else if (computerChoice === "paper") {
            result = "lose"
        }
        else if (computerChoice === "scissors"){
            result = "win"
        }
    }
    else if (new_playerChoice === "paper") {
        if (computerChoice === "rock") {
            result = "win"
        }
        else if (computerChoice === "paper") {
            result = "draw"
        }
        else if (computerChoice === "scissors") {
            result = "lose"
        }
    }
    else if (new_playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "lose"
        }
        else if (computerChoice === "paper") {
            result = "win"
        }
        else if (computerChoice === "scissors") {
            result = "draw"
        }
    }

    return result
}

function playRound(playerChoice = prompt("Rock paper scissors?")) {
    let new_playerChoice = playerChoice.toLowerCase()
    
    if (new_playerChoice !== "rock" && new_playerChoice !== "scissors" && new_playerChoice !== "paper") {
        alert("invalid input")
        playRound() 
    }

    let computerChoice = computerPlay()
    let result = compare(new_playerChoice, computerChoice)
    console.log(result)

    return result
}

function game() {
    playerWins = 0
    compWins = 0

    while (playerWins < 5 && compWins < 5) {
        result = playRound()
        if (result === "win") {
            playerWins += 1
        }
        else if (result === "lose") {
            compWins += 1
        }
    }

    if (playerWins === 5) {
        console.log("You win!")
    }
    else if (compWins === 5) {
        console.log("Computer wins")
    }
}



game()