
let humanScore = 0
let puterScore = 0

const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")
const display = document.getElementById("displayDiv")
const scoreDiv = document.getElementById("scoreDiv")

btnRock.addEventListener("click", () => playRound("rock"))
btnPaper.addEventListener("click", () => playRound("paper"))
btnScissors.addEventListener("click", () => playRound("scissors"))

function getComputerChoice(arg) {
    if (arg <= 0.33) {
        return "rock"
    } else if (arg > 0.33 && arg <= 0.66) {
        return "paper"
    } else return "scissors"
}

function getPlayerChoice(arg) {
    if (arg != null) return arg
}

function playRound(choice) {
    display.textContent = ""
    human = getPlayerChoice(choice)
    puter = getComputerChoice(Math.random())
    display.textContent += `Computer chooses ${puter}. `
    display.textContent += `Human chooses ${human}. `

    if (human == puter) {
        display.textContent += "Draw!"
    }
    else if (human == "paper" && puter == "rock" || human == "scissors" && puter == "paper" || human == "rock" && puter == "scissors") {
        humanScore++
        display.textContent += "You win!"
    }
    else {
        puterScore++
        display.textContent += "You lose!"
    }
    scoreDiv.textContent = `Computer ${puterScore} vs ${humanScore} Human`
    if (puterscore == 5 || humanScore == 5) {
        btnPaper.style.visibility = "hidden"
        btnRock.style.visibility = "hidden"
        btnScissors.style.visibility = "hidden"
    }
}
