const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const userNameArea = document.getElementById("user-name-area");
const userName = document.getElementById("user-name");
const questionElement = document.getElementById("question");
const answerArea = document.getElementById("answer-area");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = parseInt(document.getElementById("score").innerText);
const finalScore = document.getElementById("final-score");

// randomizes the questions.
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
scoreElement = 0;

// Start of the quiz.
startButton.addEventListener("click", startGame);
function startGame() {
    userNameArea.style.display = "none";
    startButton.style.display = "none";
    nextButton.style.display = "block";
    answerArea.style.display = "flex";
    finalScore.style.display = "none";

    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
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
                { text: "winky", correct: false },
                { text: "dobby", correct: false },
                { text: "kreacher", correct: false },
                { text: "hokey", correct: true },
            ]
        },
        {
            question: "Triwizard Champion Cedric Diggory was from which Hogwarts house?",
            answers: [
                { text: "hufflepuff", correct: true },
                { text: "ravenclaw", correct: false },
                { text: "slytherin", correct: false },
                { text: "griffindor", correct: false },
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
                { text: "gold", correct: true },
                { text: "Pink", correct: false },
                { text: "lavendar", correct: false },
                { text: "blue", correct: false },
            ]
        },
        {
            question: "What does Dudley throw out the window in a tantrum?",
            answers: [
                { text: "playstation", correct: true },
                { text: "gameboy", correct: false },
                { text: "tv", correct: false },
                { text: "walkman", correct: false },
            ]
        },
        {
            question: "What fruit do you tickle on the painting to get into the kitchen?",
            answers: [
                { text: "peach", correct: false },
                { text: "pear", correct: true },
                { text: "banana", correct: false },
                { text: "orange", correct: false },
            ]
        },
        {
            question: "what is Professor Binns's first name?",
            answers: [
                { text: "harold", correct: false },
                { text: "gideon", correct: false },
                { text: "cuthbert", correct: true },
                { text: "elphias", correct: false },
            ]
        },
        {
            question: "which of these is NOT an ingredient in Polyjuice Potion?",
            answers: [
                { text: "Dandelion root", correct: true },
                { text: "Boomslang skin", correct: false },
                { text: "Leeches", correct: false },
                { text: "Lacewing fly", correct: false },
            ]
        },
        {
            question: "what did Mrs Weasley gift Percy when he became prefect?",
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
            question: "what is Neville's grandmother's name?",
            answers: [
                { text: "Pomona", correct: false },
                { text: "Alice", correct: false },
                { text: "Bertha", correct: false },
                { text: "Augusta", correct: true },
            ]
        },
        {
            question: "what colour are Harry's dress robes which he wears to the yule ball?",
            answers: [
                { text: "green", correct: true },
                { text: "black", correct: false },
                { text: "navy", correct: false },
                { text: "grey", correct: false },
            ]
        },
        {
            question: "How is the Diadem destroyed?",
            answers: [
                { text: "basalisk venom", correct: false },
                { text: "the sword of griffindor", correct: false },
                { text: "fiendfire", correct: true },
                { text: "It's owner is killed", correct: false },
            ]
        },
        {
            question: " what is Dracos wand made of?",
            answers: [
                { text: "Yew", correct: false },
                { text: "Holly", correct: false },
                { text: "Hawthorn", correct: true },
                { text: "Cherry", correct: false },
            ],
        },
        {
            question: "whats Ron's middle name?",
            answers: [
                { text: "Barnabus", correct: false },
                { text: "Arthur", correct: false },
                { text: "Gideon", correct: false },
                { text: "Billius", correct: true },
            ]
        },
        {
            question: "whats the entrace code for the ministry of magic?",
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
                { text: "madam malkin", correct: false },
                { text: "florean Fortescue", correct: true },
            ]
        },
        {
            question: "which of the following was NOT a horcrux?",
            answers: [
                { text: "riddle's diary", correct: false },
                { text: "hufflepuff's cup", correct: false },
                { text: "griffindor's sword", correct: true },
                { text: "slytherin's locket", correct: false },
            ]
        },
        {
            question: "who is the aunt of Susan Bones?",
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
                { text: "Ron", correct: true },
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
            question: "who visits the Dursleys in the second book?",
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
            question: "who said 'If you die, you need not hand it in'?",
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
            question: "which of these did Snape NOT mention in Harry's first potions lesson?",
            answers: [
                { text: "Bezor", correct: false },
                { text: "wormwood", correct: false },
                { text: "wolfsbane", correct: true },
                { text: "asphodel", correct: false },
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
            question: "which of the following was NOT a common room password?",
            answers: [
                { text: "pure blood", correct: false },
                { text: "Fairlights", correct: false },
                { text: "fortuna major", correct: false },
                { text: "Pinefresh", correct: true },
            ]
        },
        {
            question: "which of the following is not a death eater?",
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
            question: "which of the following was a Christmas present sent to Harry by the Dursleys?",
            answers: [
                { text: "a single tissue", correct: true },
                { text: "a used battery", correct: false },
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