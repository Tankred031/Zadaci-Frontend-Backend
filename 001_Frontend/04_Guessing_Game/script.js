let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let inputElement = document.getElementById("guess").value;
    let feedbackElement = document.getElementById("feedback").value;

    let guess = inputElement.value;

    if (guess === randomNumber) {
        feedbackElement.innerHTML = "Congratulations!";
        feedbackElement.style.color = "green";
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = "Too low! Try again.";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.innerHTML = "Too high! Try again.";
        feedbackElement.style.color = "red";
    }
}

