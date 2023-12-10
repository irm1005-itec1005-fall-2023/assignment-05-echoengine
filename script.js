let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What is the correct way to use background colour?",
        choices: ["background/colour", 
                  "backgroundcolour", 
                  "background-colour;", 
                  "background-colour:"],
        answer: "background-colour:"
    },
  {
    question: "What is the capital of Spain?",
    choices: ["Lisbon", "Barcelona", "Madrid", "Seville"],
    answer: "Madrid"
  },
  {
     question: "What is the capital of Iraq?",
     choices: ["Mousal", "Basra", "Baghdad", "Erbil"],
     answer: "Baghdad"
  },

  {
     question: "What is 5 to the power of 2?",
     choices: ["15", "10", "25", "30"],
     answer: "25"
  },

  
];


document.getElementById("start-btn").addEventListener("click", function() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.add("start");
  displayQuestion();
});

document.getElementById("quiz-container").classList.add("hidden");



function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    let choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    question.choices.forEach(choice => {
        let button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => selectAnswer(choice));
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(choice) {
    let question = questions[currentQuestionIndex];
    if (choice === question.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {

    document.getElementById("quiz-container").innerHTML = 

        `<h1>Quiz Completed!</h1><p>Your score: ${score}/${questions.length}</p>`;
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();
