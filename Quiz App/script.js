const questions = [
    {
        question: "Who is known as the father of computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Ada Lovelace", correct: false },
        ]
    },
    {
        question: "What was the first programmable computer?",
        answers: [
            { text: "ENIAC", correct: false },
            { text: "Zuse Z3", correct: true },
            { text: "Colossus", correct: false },
            { text: "Harvard Mark I", correct: false },
        ]
    },
    {
        question: "Which company introduced the first personal computer?",
        answers: [
            { text: "IBM", correct: true },
            { text: "Apple", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Commodore", correct: false },
        ]
    },
    {
        question: "In what year was the World Wide Web invented?",
        answers: [
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1987", correct: false },
            { text: "1995", correct: false },
        ]
    },
    {
        question: "What does the acronym 'CPU' stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Central Programming Unit", correct: false },
            { text: "Central Processor Unit", correct: false },
            { text: "Computer Processing Unit", correct: false },
        ]
    },
    {
        question: "Who developed the C programming language?",
        answers: [
            { text: "Dennis Ritchie", correct: true },
            { text: "Ken Thompson", correct: false },
            { text: "Brian Kernighan", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
        ]
    },
    {
        question: "What was the name of the first commercial computer?",
        answers: [
            { text: "UNIVAC I", correct: true },
            { text: "ENIAC", correct: false },
            { text: "IBM 701", correct: false },
            { text: "Whirlwind I", correct: false },
        ]
    },
    {
        question: "Which operating system is considered the first widely-used graphical user interface (GUI)?",
        answers: [
            { text: "Mac OS", correct: false },
            { text: "Windows", correct: false },
            { text: "Xerox Alto", correct: true },
            { text: "Linux", correct: false },
        ]
    },
    {
        question: "What was the first programming language?",
        answers: [
            { text: "Fortran", correct: true },
            { text: "COBOL", correct: false },
            { text: "Assembly", correct: false },
            { text: "BASIC", correct: false },
        ]
    },
    {
        question: "Which invention is considered to mark the beginning of the modern computer era?",
        answers: [
            { text: "The Transistor", correct: true },
            { text: "The Vacuum Tube", correct: false },
            { text: "The Microchip", correct: false },
            { text: "The Punch Card", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } 
    else {
        startQuiz();
    }
});
startQuiz();


