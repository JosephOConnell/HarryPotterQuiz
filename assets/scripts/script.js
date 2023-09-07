/*jshint esversion: 6 */
/*global questions */

// Variables called from the ids in index.html and style.css.
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const userNameArea = document.getElementById("user-name-area");
const userName = document.getElementById("user-name");
const questionElement = document.getElementById("question");
const questionArea = document.getElementById("question-area");
const answerArea = document.getElementById("answer-area");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreArea = document.getElementById("score-area");
const contactArea = document.getElementById("contacts-area");
let scoreElement = parseInt(document.getElementById("score").innerText);
const finalScore = document.getElementById("final-score");

let shuffledQuestions, currentQuestionIndex, questionNumber;

// Calls the start of the quiz when the start button is clicked.
startButton.addEventListener("click", startGame);

/**
 * 
 * The displays are all set for the start of the game.
 * the questions are then sorted at random.
 * scores and indexs are set to 0.
 */
function startGame() {
    questionArea.style.display = "block";
    userNameArea.style.display = "none";
    startButton.style.display = "none";
    nextButton.style.display = "block";
    answerArea.style.display = "flex";
    scoreArea.style.display = "block";
    finalScore.style.display = "none";
    contactArea.style.display = "block";

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionNumber = 0;
    scoreElement = 0;

    setNextQuestion();
}

// Calls the random questions
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * 
 * @param {string} question question from the array of questions.
 * First the next button is disabled.
 * Then the question is put into the inner text of the questionElement id.
 * New buttons are called with the answers as the inner text.
 * Checks if the answer is correct.
 * When answer is clicked select Answer function is called
 */
function showQuestion(question) {
    resetState();
    document.getElementById("question-number").innerText = `${++questionNumber}/10`;

    nextButton.disabled = true;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset state removes old answer buttons.
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * 
 * @param {Event} e The e.target
 * The e.target is used to select an answer
 * Correct = green / Wrong = red.
 * The score is indented if correct.
 * Next button is disable if no answer is picked.
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        document.getElementById("score").innerText = ++scoreElement;
        selectedBtn.style.background = "green";
    } else {
        selectedBtn.style.background = "red";
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.disabled = false;
}

/**  
 * 
 * When clicked it will indent the question index.
 * Will then check if the quiz is over or if another question is needed.
 */

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) 
    {
        setNextQuestion();
    } else {
        showScore();
    }
});

/**
 * 
 * The displays are all set for the end of the game.
 * Start button is recalled with the inner text of "replay"
 * There are 3 end messages depending on how many you get right 
 */
function showScore() {
    resetState();
    questionElement.innerText = "";
    startButton.innerText = "Replay";
    startButton.style.display = "block";
    nextButton.style.display = "none";
    scoreArea.style.display = "none";
    questionArea.style.display = "none";
    finalScore.style.display = "flex";
    if (scoreElement > 6) {
        finalScore.innerText = `Well Done ${userName.value}\n You scored ${scoreElement} out of 10`;
    } else if (scoreElement > 4) {
        finalScore.innerText = `Not bad ${userName.value}\n You scored ${scoreElement} out of 10`;
    } else {
        finalScore.innerText = `Hey ${userName.value}\nDid you even read the books?\n You scored ${scoreElement} out of 10`;
    }
    document.getElementById("score").innerText = 0;
}