const questions = ["Koji planet nazivamo 'Crvenim planetom'?",
  "Tko je naslikao Mona Lisa?"
];
const choicesArray = [
  ["Zemlja", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"]
];
const correctAnswers = ["Mars", "Da Vinci"];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[
      currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choicesArray[currentQuestionIndex][i];
    btn.value = choicesArray[currentQuestionIndex][i];
  }
    } else {
    document.getElementById('result').innerHTML =
      `Skupio si ${score} od ${questions.length}!`;
      document.getElementById('question').innerHTML = "";
      document.getElementById('choices').innerHTML = "";
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}
displayQuestion();