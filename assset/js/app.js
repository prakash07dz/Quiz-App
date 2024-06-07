const questions = [
  {
    question: "ભારતમાં સૌથી લાંબી નદી કઈ છે?",
    answers: [
      { text: "યમુના", correct: false },
      { text: "ગંગા", correct: true },
      { text: "ગોદાવરી", correct: false },
      { text: "નર્મદા", correct: false },
    ],
  },
  {
    question: "ભારતના કયા રાજ્યમાં કૃત્રિમ ભરત સરોવર છે?",
    answers: [
      { text: "કેરળ", correct: false },
      { text: "ઉત્તર પ્રદેશ", correct: false },
      { text: "ગુજરાત", correct: false },
      { text: "રાજસ્થાન", correct: true },
    ],
  },
  {
    question: "ભારતનો રાષ્ટ્રગાન કોણે લખ્યો છે?",
    answers: [
      { text: "સબર્મતિ આશ્રમ", correct: false },
      { text: "બિપિનચંદ્ર પાલ", correct: false },
      { text: "રવિન્દ્રનાથ ઠાકુર", correct: true },
      { text: "મહાત્મા ગાંધી", correct: false },
    ],
  },
  {
    question: "સિંચાઈ માટે સૌપ્રથમ મોટું બંધ કયું છે?",
    answers: [
      { text: "ભાખરા નાંગલ બંધ", correct: true },
      { text: "નર્મદા બંધ", correct: false },
      { text: "કોયનાબંધ", correct: false },
      { text: "હરિકેકેશ", correct: false },
    ],
  },
  {
    question: "ભારતના પ્રથમ રાષ્ટ્રપતિ કોણ હતા?",
    answers: [
      { text: "ડૉ. બી. આર. અંબેડકર", correct: false },
      { text: "ડૉ. સર્વપલ્લી રાધાકૃષ્ણન", correct: false },
      { text: "ડૉ. રાજેન્દ્ર પ્રસાદ", correct: true },
      { text: "મહાત્મા ગાંધી", correct: false },
    ],
  },
  {
    question: "ભારતના પ્રથમ વડાપ્રધાન કોણ હતા?",
    answers: [
      { text: "સરદાર વલ્લભભાઈ પટેલ", correct: false },
      { text: "જવાહરલાલ નહેરુ", correct: true },
      { text: "મોરારજી દેસાઈ", correct: false },
      { text: "ઇન્દિરા ગાંધી", correct: false },
    ],
  },
  {
    question: "ભારતની રાષ્ટ્રીય રમત કઈ છે?",
    answers: [
      { text: "કબ્બડી", correct: false },
      { text: "ક્રિકેટ", correct: false },
      { text: "હોકી", correct: true },
      { text: "ફૂટબોલ", correct: false },
    ],
  },
  {
    question: "ભારતના રાષ્ટ્રીય પક્ષી કયું છે?",
    answers: [
      { text: "મોર", correct: true },
      { text: "કાગડો", correct: false },
      { text: "કબૂતર", correct: false },
      { text: "માયન", correct: false },
    ],
  },
  {
    question: "ભારતનું રાષ્ટ્રીય પંખી કયું છે?",
    answers: [
      { text: "મયૂર", correct: true },
      { text: "કાગડો", correct: false },
      { text: "કબૂતર", correct: false },
      { text: "બુલબુલ", correct: false },
    ],
  },
  {
    question: "ભારતનું રાષ્ટ્રીય પ્રાણી કયું છે?",
    answers: [
      { text: "વાઘ", correct: true },
      { text: "સિંહ", correct: false },
      { text: "હાથી", correct: false },
      { text: "ચિત્તલ", correct: false },
    ],
  },
  {
    question: "ભારતના પ્રથમ ન્યાયમૂર્તિ કોણ હતા?",
    answers: [
      { text: "ન્યાયમૂર્તિ પટંજલિ શાસ્ત્રી", correct: false },
      { text: "ન્યાયમૂર્તિ હરિલાલ કેનિયા", correct: true },
      { text: "ન્યાયમૂર્તિ જે. સીઆર. દાસ", correct: false },
      { text: "ન્યાયમૂર્તિ રાજેન્દ્ર માલિ", correct: false },
    ],
  },
  {
    question: "ભારતના રાષ્ટ્રપિતા કોણ છે?",
    answers: [
      { text: "સરદાર વલ્લભભાઈ પટેલ", correct: false },
      { text: "મહાત્મા ગાંધી", correct: true },
      { text: "જવાહરલાલ નહેરુ", correct: false },
      { text: "સુભાષચંદ્ર બોસ", correct: false },
    ],
  },
  {
    question: "ભારતની પ્રથમ મહિલા વડાપ્રધાન કોણ હતી?",
    answers: [
      { text: "મુરૂમ્મા કશ્મીર", correct: false },
      { text: "ઇન્દિરા ગાંધી", correct: true },
      { text: "મહર્ષિ અરવિંદ", correct: false },
      { text: "સોનીયા ગાંધી", correct: false },
    ],
  },
  {
    question: "ભારતના પ્રથમ મહામહિમ કોણ હતા?",
    answers: [
      { text: "જવાહરલાલ નહેરુ", correct: false },
      { text: "ડૉ. રાજેન્દ્ર પ્રસાદ", correct: true },
      { text: "સુમીત સહાય", correct: false },
      { text: "એમ. નવિન", correct: false },
    ],
  },
  {
    question: "ભારતની પ્રથમ મહિલા રાષ્ટ્રપતિ કોણ છે?",
    answers: [
      { text: "પ્રતિભા પાટીલ", correct: true },
      { text: "ઇન્દિરા ગાંધી", correct: false },
      { text: "સોનિયા ગાંધી", correct: false },
      { text: "સુશ્મા સ્વરાજ", correct: false },
    ],
  },
  {
    question: "ભારતના પ્રથમ મહિલા IPS અધિકારી કોણ છે?",
    answers: [
      { text: "કિરણ બેદી", correct: true },
      { text: "કંજણજંગા", correct: false },
      { text: "પ્રતિભા પાટીલ", correct: false },
      { text: "ઇન્દિરા નુઇ", correct: false },
    ],
  },
  {
    question: "ભારતના રાષ્ટ્રીય ફૂલ કયું છે?",
    answers: [
      { text: "ગુલાબ", correct: false },
      { text: "કમળ", correct: true },
      { text: "જાસુદ", correct: false },
      { text: "ચમેલી", correct: false },
    ],
  },
  {
    question: "ભારતની રાષ્ટ્રીય ફળ કયું છે?",
    answers: [
      { text: "સફરજન", correct: false },
      { text: "કેળું", correct: false },
      { text: "આંબા", correct: true },
      { text: "લીમડા", correct: false },
    ],
  },
  {
    question: "ભારતના રાષ્ટ્રીય વૃક્ષ કયું છે?",
    answers: [
      { text: "લીમડો", correct: false },
      { text: "આંબા", correct: false },
      { text: "વડ", correct: true },
      { text: "પીપળો", correct: false },
    ],
  },
  {
    question: "ભારતનો રાષ્ટ્રીય કબરીઓનો બાજ કોણ છે?",
    answers: [
      { text: "મોર", correct: false },
      { text: "વાઘ", correct: false },
      { text: "ચિત્તલ", correct: true },
      { text: "હાથી", correct: false },
    ],
  },
  {
    question: "ભારતની કયા દરિયાકિનારે વિસર્જિત રણ છે?",
    answers: [
      { text: "બંગાળની ખાડી", correct: false },
      { text: "અરબી સાગર", correct: true },
      { text: "મન્યાલિક દ્વીપ", correct: false },
      { text: "અંડમન સાગર", correct: false },
    ],
  },
  {
    question: "ભારતના પહેલા મુખ્ય ન્યાયાધીશ કોણ હતા?",
    answers: [
      { text: "હરિલાલ કેનિયા", correct: false },
      { text: "પટંજલિ શાસ્ત્રી", correct: true },
      { text: "સુપ્રિયા પાટીલ", correct: false },
      { text: "સ્વામિ વિવેકાનંદ", correct: false },
    ],
  },
  {
    question: "ભારતનું રાજ્યપક્ષી કયું છે?",
    answers: [
      { text: "સુપ્રિયા", correct: false },
      { text: "કાગડો", correct: false },
      { text: "ચિત્તલ", correct: false },
      { text: "પહાડ કાબર", correct: true },
    ],
  },
  {
    question: "ભારતની રાષ્ટ્રીય નદી કયું છે?",
    answers: [
      { text: "ગંગા", correct: true },
      { text: "યમુના", correct: false },
      { text: "નર્મદા", correct: false },
      { text: "તાપી", correct: false },
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
  let currentQuestion = questions[currentQuestionIndex];
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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Start Again!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
