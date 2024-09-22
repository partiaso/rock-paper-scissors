


let choice;
function getComputerChoice() {
    ranNumber = Math.floor(Math.random() * 3)
    if (ranNumber === 0) {
        choice = "Rock";
    }
    else if (ranNumber === 1) {
        choice = "Paper";
    }
    else if (ranNumber === 2) {
        choice = "Scissors"
    }
    else alert("Wrong input, the only values are 'Rock' 'Paper' and 'Scissors'")
}
// getComputerChoice();


let myChoice;
function getHumanChoice() {
    myChoice = prompt("Rock, Paper or Scissors?");
    myChoice = myChoice.toLowerCase();
    if (myChoice === "rock") {
        alert("Your choice is ROCK");
    }
    else if (myChoice === "paper") {
        alert("Your choice is PAPER")
    }
    else if (myChoice === "scissors") {
        alert("Your choice is SCISSORS")
    }
    else "Wrong choice"
}
// getHumanChoice();



let humanScore = 0;
let computerScore = 0;

function playRound() {
    if (myChoice == "rock" && choice == "Rock") {
        console.log("Empate");
        humanScore;
        computerScore;
    }
    else if (myChoice == "paper" && choice == "Rock") {
        console.log(`You WIN`);
        humanScore++;
    }
    else if (myChoice == "scissors" && choice == "Rock") {
        console.log(`You LOSE`);
        computerScore++;
    }
    else if (myChoice == "rock" && choice == "Paper") {
        console.log(`You LOSE`);
        computerScore++;
    }
    else if (myChoice == "paper" && choice == "Paper") {
        console.log("Empate");
        humanScore;
        computerScore;
    }
    else if (myChoice == "scissors" && choice == "Paper") {
        console.log("You WIN");
        humanScore++;
    }
    else if (myChoice == "rock" && choice == "Scissors") {
        console.log("You WIN");
        humanScore++;
    }
    else if (myChoice == "paper" && choice == "Scissors") {
        console.log("You LOSE");
        computerScore++;
    }
    else if (myChoice == "scissors" && choice == "Scissors") {
        console.log("Empate");
        humanScore;
        computerScore;
    }
    else "ERROR"
}
// playRound();


function PlayGame(i) {
for (let i = 0; i < 5; i++) {
    console.log(`Ronda ${i}`);
    getComputerChoice();
    getHumanChoice();
    console.log(`Has elegido ${myChoice}`);
    console.log(`Rival ha elegido ${choice}`);  
    playRound();
    console.log(`YOUR SCORE: ${humanScore} CPU SCORE: ${computerScore}`)
}
ganador()
}



PlayGame();





function ganador() {
    if (humanScore > computerScore) {
        console.log("YOU HAVE WON THE GAME!")}
    else if (humanScore < computerScore) {
        console.log("YOU HAVE LOST THE GAME :(")}
    else if (humanScore == computerScore) {
        console.log("TIE")
    } 
}



