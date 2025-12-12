
let humanScore = 0
let puterScore = 0
let choice = prompt("Please enter your choice", "rock")

function getComputerChoice(arg) {
    if (arg <= 0.33) {
        return "rock"
    } else if (arg > 0.33 && arg <= 0.66) {
        return "paper"
    } else return "scissors"
}

function getPlayerChoice() {
    choice = choice.toLowerCase()
    if (choice != null) return choice
}

function playRound() {
    human = getPlayerChoice()
    puter = getComputerChoice(Math.random())
    console.log(`Computer chooses ${puter}`)
    console.log(`Human chooses ${human}`)

    if (human == puter) {
        console.log("Draw!")
    }
    else if (human == "paper" && puter == "rock" || human == "scissors" && puter == "paper" || human == "rock" && puter == "scissors") {
        humanScore++
        console.log("You win")
    }
    else {
        puterScore++
        console.log("You lose!")
    }
    console.log()
}

function playGame() {
    playRound()
    choice = prompt(`Computer ${puterScore} vs ${humanScore} Human. Next round!`,"paper")
    playRound()
    choice = prompt(`Computer ${puterScore} vs ${humanScore} Human. Next round!`,"scissors")
    playRound()
    choice = prompt(`Computer ${puterScore} vs ${humanScore} Human. Next round!`,"rock")
    playRound()
    choice = prompt(`Computer ${puterScore} vs ${humanScore} Human. Next round!`,"paper")
    playRound()
    console.log(`Computer ${puterScore} vs ${humanScore} Human. Game over!`)
}

playGame()