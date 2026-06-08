const input = prompt

let playerWins = 0;
let computerWins = 0;
let rounds = 0

while (rounds < 3) {

    let playerChoice = input("Odaberi 'par' ili 'nepar': ");
    let playerNumber = parseInt(input("Odaberi broj između 1 i 5: "));

    let computerNumber = Math.floor(Math.random() * 5) + 1;
    let computerChoice = "";
    if (playerChoice === "par") {
        computerChoice = "nepar";
    } else {
        computerChoice = "par";
    }

    let sum = playerNumber + computerNumber;

    let result = "";
    if (sum % 2 === 0) {
        result = "par";
    } else {
        result = "nepar";
    }

    console.log(`Ti si izabrao ${playerNumber} (${playerChoice})`);
    console.log(`Kompjuter je izabrao ${computerNumber} (${computerChoice})`);
    console.log(`Zbroj brojeva je ${sum}, stoga je ${result}`);

    if (result === playerChoice) {
        console.log("Pobjedio si!");
        playerWins++;
    } else {
        console.log("Pobjedio je Kompjuter!");
        computerWins++;
    }

    rounds++;
}

console.log("Ukupni rezultat:");
console.log(`Pobjedio si: ${playerWins} puta`);
console.log(`Kompjuter je pobjedio: ${computerWins} puta`);
