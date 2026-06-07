let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");

    let guess = Number(inputElement.value);

    if (guess < 1 || guess > 10 || isNaN(guess)) {
        feedbackElement.innerHTML = "Unesi broj između 1 i 10.";
        feedbackElement.style.color = "orange";
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        feedbackElement.innerHTML = "Čestitam! Pogodio si broj!";
        feedbackElement.style.color = "green";
        inputElement.disabled = true;
        return;
    }

    if (attempts === 0) {
        feedbackElement.innerHTML = `Nemaš više pokušaja. Točan broj je bio ${randomNumber}.`;
        feedbackElement.style.color = "red";
        inputElement.disabled = true;
        return;
    }

    if (guess < randomNumber) {
        feedbackElement.innerHTML = `Prenisko! Preostalo pokušaja: ${attempts}`;
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.innerHTML = `Previsoko! Preostalo pokušaja: ${attempts}`;
        feedbackElement.style.color = "red";
    }

    inputElement.value = "";
}