const questioins = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican city", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shree Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari ", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Vanus", correct: false },
      { text: "Saturns", correct: false },
    ],
  },
  {
    question: " What is the capital city of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question:
      "Which planet is known as the Morning Star or Evening Star and is often visible from Earth?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    answers: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "George R.R. Martin", correct: false },
      { text: "Suzanne Collins", correct: false },
    ],
  },
  {
    question: " In which year did the Titanic sink?",
    answers: [
      { text: "1905", correct: false },
      { text: "1931", correct: false },
      { text: "1923", correct: false },
      { text: "1912", correct: true },
    ],
  },
  {
    question: "Which element has the chemical symbol Hg?",
    answers: [
      { text: "Hyrogen", correct: false },
      { text: "Helium", correct: false },
      { text: "Mercury", correct: true },
      { text: "Magnesium", correct: false },
    ],
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questioins[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questioins.length}!`;
  nextButton.innerHTML = "Start Again!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questioins.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questioins.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
