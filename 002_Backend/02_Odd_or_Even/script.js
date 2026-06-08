const input = prompt

let playerWins = 0;
let computerWins = 0;
let rounds = 0

while (rounds < 3) {

    let playerChoice = input("Choose 'odd' or 'even': ");
    let playerNumber = parseInt(input("Choose a number between 1 and 5: "));

    let computerNumber = Math.floor(Math.random() * 5) + 1;
    let computerChoice = "";
    if (playerChoice === "odd") {
        computerChoice = "even";
    } else {
        computerChoice = "odd";
    }

    let sum = playerNumber + computerNumber;

    let result = "";
    if (sum % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }

    console.log(`Player chose ${playerNumber} (${playerChoice})`);
    console.log(`Computer chose ${computerNumber} (${computerChoice})`);
    console.log(`The sum of the numbers is ${sum}, which is ${result}`);

    if (result === playerChoice) {
        console.log("Player wins!");
        playerWins++;
    } else {
        console.log("Computer wins!");
        computerWins++;
    }

    rounds++;
}

console.log("FInal score:");
console.log(`Player wins: ${playerWins}`);
console.log(`Computer wins: ${computerWins}`);
