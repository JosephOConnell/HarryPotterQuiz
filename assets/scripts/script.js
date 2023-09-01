const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const userNameArea = document.getElementById("user-name-area");
const userName = document.getElementById("user-name");
const questionElement = document.getElementById("question");
const questionArea = document.getElementById("question-area");
const answerArea = document.getElementById("answer-area");
const answerButtonsElement = document.getElementById("answer-buttons");
let scoreElement = parseInt(document.getElementById("score").innerText);
const finalScore = document.getElementById("final-score");

let shuffledQuestions, currentQuestionIndex;

// Start of the quiz.
startButton.addEventListener("click", startGame);

function startGame() {
    questionArea.style.display = "block";
    userNameArea.style.display = "none";
    startButton.style.display = "none";
    nextButton.style.display = "block";
    answerArea.style.display = "flex";
    finalScore.style.display = "none";

    // randomizes the questions.
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    scoreElement = 0;

    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
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

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

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
        if (button.dataset.correct === "true") {
        }
        button.disabled = true;
    });
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        setNextQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerText = "";
    startButton.innerText = "Play Again";
    startButton.style.display = "block";
    nextButton.style.display = "none";
    finalScore.style.display = "flex";
    finalScore.innerText = `${userName.value}\n You got ${score.innerText} out of 10`;
    document.getElementById("score").innerText = 0;
}

// Questions and Answers.
const questions =
    [
        {
            question: "What was the name of Hepzibah Smith's house elf?",
            answers: [
                { text: "Winky", correct: false },
                { text: "Dobby", correct: false },
                { text: "Kreacher", correct: false },
                { text: "Hokey", correct: true },
            ]
        },
        {
            question: "Triwizard Champion Cedric Diggory was from which Hogwarts house?",
            answers: [
                { text: "Hufflepuff", correct: true },
                { text: "Ravenclaw", correct: false },
                { text: "Slytherin", correct: false },
                { text: "Griffindor", correct: false },
            ]
        },
        {
            question: "Which of he following was NOT a Gilderoy Lockheart book?",
            answers: [
                { text: "Holidays with Hags", correct: false },
                { text: "Wanderings with Werewolves", correct: false },
                { text: "Travels with Thestrals", correct: true },
                { text: "Break with a Banshee", correct: false },
            ]
        },
        {
            question: "What is the first name of Professor Quirrel?",
            answers: [
                { text: "Quirinel", correct: false },
                { text: "Quirinus", correct: true },
                { text: "Quasar", correct: false },
                { text: "Quasim", correct: false },
            ]
        },
        {
            question: "How many subjects are first years taught at Hogwarts?",
            answers: [
                { text: "8", correct: false },
                { text: "7", correct: true },
                { text: "9", correct: false },
                { text: "10", correct: false },
            ]
        },
        {
            question: "In what year was the chamber of Secrets opened?",
            answers: [
                { text: "1950", correct: false },
                { text: "1951", correct: false },
                { text: "1947", correct: false },
                { text: "1943", correct: true },
            ]
        },
        {
            question: "Where did Harry attend primary school?",
            answers: [
                { text: "St Brutus's", correct: false },
                { text: "St Vincent's", correct: false },
                { text: "St James's", correct: false },
                { text: "St Grogory's", correct: true },
            ]
        },
        {
            question: "What colour are Ginny and Gabrielle's bridesmaids dresses?",
            answers: [
                { text: "Gold", correct: true },
                { text: "Pink", correct: false },
                { text: "Lavendar", correct: false },
                { text: "Blue", correct: false },
            ]
        },
        {
            question: "What does Dudley throw out the window in a tantrum?",
            answers: [
                { text: "Playstation", correct: true },
                { text: "Gameboy", correct: false },
                { text: "TV", correct: false },
                { text: "Walkman", correct: false },
            ]
        },
        {
            question: "What fruit do you tickle on the painting to get into the kitchen?",
            answers: [
                { text: "Peach", correct: false },
                { text: "Pear", correct: true },
                { text: "Banana", correct: false },
                { text: "Orange", correct: false },
            ]
        },
        {
            question: "What is Professor Binns's first name?",
            answers: [
                { text: "Harold", correct: false },
                { text: "Gideon", correct: false },
                { text: "Cuthbert", correct: true },
                { text: "Elphias", correct: false },
            ]
        },
        {
            question: "Which of these is NOT an ingredient in Polyjuice Potion?",
            answers: [
                { text: "Dandelion root", correct: true },
                { text: "Boomslang skin", correct: false },
                { text: "Leeches", correct: false },
                { text: "Lacewing fly", correct: false },
            ]
        },
        {
            question: "What did Mrs Weasley gift Percy when he became prefect?",
            answers: [
                { text: "New Robes", correct: false },
                { text: "A New Wizards Chess Set", correct: false },
                { text: "A Broom", correct: false },
                { text: "An Owl", correct: true },
            ]
        },
        {
            question: "Who came up with the name Dumbledore's Amry?",
            answers: [
                { text: "Ginny", correct: true },
                { text: "Cho", correct: false },
                { text: "Luna", correct: false },
                { text: "Hermione", correct: false },
            ]
        },
        {
            question: "How many obstacles were guarding the Philosophers Stone at Hogwarts?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "7", correct: true },
                { text: "8", correct: false },
            ]
        },
        {
            question: "What is Neville's grandmother's name?",
            answers: [
                { text: "Pomona", correct: false },
                { text: "Alice", correct: false },
                { text: "Bertha", correct: false },
                { text: "Augusta", correct: true },
            ]
        },
        {
            question: "What colour are Harry's dress robes which he wears to the yule ball?",
            answers: [
                { text: "Green", correct: true },
                { text: "Black", correct: false },
                { text: "Navy", correct: false },
                { text: "Grey", correct: false },
            ]
        },
        {
            question: "How is the Diadem destroyed?",
            answers: [
                { text: "Basalisk venom", correct: false },
                { text: "The sword of griffindor", correct: false },
                { text: "Fiendfire", correct: true },
                { text: "It's owner is killed", correct: false },
            ]
        },
        {
            question: " What is Dracos wand made of?",
            answers: [
                { text: "Yew", correct: false },
                { text: "Holly", correct: false },
                { text: "Hawthorn", correct: true },
                { text: "Cherry", correct: false },
            ],
        },
        {
            question: "Whats Ron's middle name?",
            answers: [
                { text: "Barnabus", correct: false },
                { text: "Arthur", correct: false },
                { text: "Gideon", correct: false },
                { text: "Billius", correct: true },
            ]
        },
        {
            question: "Whats the entrace code for the ministry of magic?",
            answers: [
                { text: "69339", correct: false },
                { text: "62442", correct: true },
                { text: "54335", correct: false },
                { text: "87886", correct: false },
            ]
        },
        {
            question: "Who helped Harry do his history of magic homework in Diagon Alley?",
            answers: [
                { text: "Garrick Ollivandar", correct: false },
                { text: "Tom the barman", correct: false },
                { text: "Madam Malkin", correct: false },
                { text: "Florean Fortescue", correct: true },
            ]
        },
        {
            question: "Which of the following was NOT a horcrux?",
            answers: [
                { text: "Riddle's diary", correct: false },
                { text: "Hufflepuff's cup", correct: false },
                { text: "Griffindor's sword", correct: true },
                { text: "Slytherin's locket", correct: false },
            ]
        },
        {
            question: "Who is the aunt of Susan Bones?",
            answers: [
                { text: "Emiline", correct: false },
                { text: "Bathilda", correct: false },
                { text: "Clementine", correct: false },
                { text: "Amelia", correct: true },
            ]
        },
        {
            question: "According to Luna, where do Crumpled Horn Snorkacks live?",
            answers: [
                { text: "Denmark", correct: false },
                { text: "Sweden", correct: true },
                { text: "Finland", correct: false },
                { text: "Norway", correct: false },
            ]
        },
        {
            question: "Who said: Don't let it worry you. It's me, I'm extremely famous?",
            answers: [
                { text: "Ron", correct: true },
                { text: "Harry", correct: false },
                { text: "Sirius", correct: false },
                { text: "Dumbledore", correct: false },
            ]
        },
        {
            question: "Who curses George, causing him to lose his ear?",
            answers: [
                { text: "Lucius", correct: false },
                { text: "Snape", correct: true },
                { text: "Voldemort", correct: false },
                { text: "Greyback", correct: false },
            ]
        },
        {
            question: "Whats the name of the drill company uncle vernon works for?",
            answers: [
                { text: "Grady's", correct: false },
                { text: "Gillingham's", correct: false },
                { text: "Garsington's", correct: false },
                { text: "Grunning's", correct: true },
            ]
        },
        {
            question: "Who visits the Dursleys in the second book?",
            answers: [
                { text: "Dumbledore", correct: false },
                { text: "Pierce Polkiss", correct: false },
                { text: "the Masons", correct: true },
                { text: "Aunt Marge", correct: false },
            ]
        },
        {
            question: "What does Arthur Weasley collect?",
            answers: [
                { text: "Matches", correct: true },
                { text: "A rubber ducks", correct: false },
                { text: "Plugs", correct: false },
                { text: "Stamps", correct: false },
            ]
        },
        {
            question: "Who said 'If you die, you need not hand it in'?",
            answers: [
                { text: "Snape", correct: false },
                { text: "Umbridge", correct: false },
                { text: "Lockheart", correct: false },
                { text: "McGonagall", correct: true },
            ]
        },
        {
            question: "Who gave Rita Skeeter the controversial information to write Dumbledore's biography?",
            answers: [
                { text: "Bathilda Bagshot", correct: true },
                { text: "Elphias Dodge", correct: false },
                { text: "Aberforth Dumbledore", correct: false },
                { text: "Dumbledore himself", correct: false },
            ]
        },
        {
            question: "Which of these did Snape NOT mention in Harry's first potions lesson?",
            answers: [
                { text: "Bezor", correct: false },
                { text: "Wormwood", correct: false },
                { text: "Wolfsbane", correct: true },
                { text: "Asphodel", correct: false },
            ]
        },
        {
            question: "Who does Vernon suggest babysit Harry while they go to the zoo?",
            answers: [
                { text: "Marge", correct: false },
                { text: "Mrs Figg", correct: false },
                { text: "Petunia", correct: false },
                { text: "Yvonne", correct: true },
            ]
        },
        {
            question: "When is Hermione's birthday?",
            answers: [
                { text: "August", correct: false },
                { text: "June", correct: false },
                { text: "September", correct: true },
                { text: "April", correct: false },
            ]
        },
        {
            question: "Which of the following was NOT a common room password?",
            answers: [
                { text: "Pure blood", correct: false },
                { text: "Fairlights", correct: false },
                { text: "Fortuna major", correct: false },
                { text: "Pinefresh", correct: true },
            ]
        },
        {
            question: "Which of the following is not a death eater?",
            answers: [
                { text: "Narcissa Malfoy", correct: true },
                { text: "Regulus Black", correct: false },
                { text: "Francis Crabbe", correct: false },
                { text: "Corban Yaxley", correct: false },
            ]
        },
        {
            question: "Who was NOT in the orphanage where Tom Riddle grew up?",
            answers: [
                { text: "Amy Benson", correct: false },
                { text: "Dennis Bishop", correct: false },
                { text: "Timmy Cole", correct: true },
                { text: "Billy Stubbs", correct: false },
            ]
        },
        {
            question: "Which of the following was a Christmas present sent to Harry by the Dursleys?",
            answers: [
                { text: "A single tissue", correct: true },
                { text: "A used battery", correct: false },
                { text: "An old dictionary ", correct: false },
                { text: "A 5p coin", correct: false },
            ]
        },
        {
            question: "Who was Draco Malfoys girlfriend?",
            answers: [
                { text: "Milicent Bulstrode", correct: false },
                { text: "Padma Patel", correct: false },
                { text: "Daphne Greengrass", correct: false },
                { text: "Pansy Parkinson", correct: true },
            ]
        },
    ];