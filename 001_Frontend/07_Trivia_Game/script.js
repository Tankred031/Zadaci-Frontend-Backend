const question = "Koji planet nazivamo 'Crvenim planetom'?";

const choices = ["Zemlja", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function displayQuestion() {
    document.getElementById("question").innerHTML = question;

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`choice${i+1}`);

        btn.innerHTML = choices[i];
        btn.value = choices[i]        
    }
}

function checkAnswer(button) {
    if(button.value === correctAnswer) {
        document.getElementById('result').innerHTML = "Točno!";
    } else {
        document.getElementById('result').innerHTML = "Krivo!";
    }
    for (let i = 1; i <= 4; i++) {
    document.getElementById(`choice${i}`).disabled = true;
    }
}

displayQuestion();
