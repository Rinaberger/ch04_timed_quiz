// listing core elements
let highScoreEl = document.getElementById("high_score"); 
let beginBtnEl = document.getElementById("begin-btn-1");


let startBoxEl = document.getElementById("start_quiz");
let rulesBoxEl = document.getElementById("rules");
let beginQuizBtnEl = document.getElementById("start_questions");
let quitQuizBtnEl = document.getElementById("quit_quiz"); 

let countdownEl = document.getElementById("countdown");
let countdownTextEl = document.getElementById("countdown_text");
let quizQuestBoxEl = document.getElementById("q&a");

//variable getting questions and answers
let questionEl = document.getElementById('question');
let answerButtonsEl = document.getElementById('answer-btn');
//var nextQuestionBtnEl = document.getElementById("next_question"); */

// adding variable text for countdowm
let messageEl = ('And Here We Go');
let countdownText = messageEl.split(' ');

//adding variable to shuffle questions
let shuffledQuestions, currentQuestionIndex;

//BEGIN FUNCTIONS
function seeRules() {
    rulesBoxEl.className += " rules_box_turnOn";
    startBoxEl.className += " start_box_turnOff";
    highScoreEl.className += " high_score_turnOff";    
}

//countdown text function
function countdownMessage() {
    rulesBoxEl.className += " rules_box_turnOff";
    let wordCount = 0;
    let msgInterval = setInterval(function () {
        if (countdownText[wordCount] === undefined) {
        beginQuestions()
        } else {
        countdownEl.textContent = countdownText[wordCount];
        wordCount++;
        } 
    }, 1000);
}

function beginQuestions() {  
    console.log('Started')  
    //rulesBoxEl.className += " rules_box_turnOff"; 
    quizQuestBoxEl.className += " start_question_turnOn";
    //shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestion = 0
    setNextQuestion()
}

function endQuiz() {
    startBoxEl.className += " start_box_turnOn";
    highScoreEl.className += " high_score_turnOn";
    rulesBoxEl.className += " rules_box_turnOff"; 
    location.reload()  
}


function setNextQuestion() {
    console.log('Test 1')
    //showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    console.log('Test 2')
    questionEl.innerText = question.question
}

function selectAnswer() {

}

  
// Start Button Clicks
beginBtnEl.onclick = seeRules; 

beginQuizBtnEl.onclick = countdownMessage;

quitQuizBtnEl.onclick = endQuiz;


//adding questions
const questions = [
    {
       question: 'What does JS stand for?', 
       answers: [
        { text: 'Java', correct: false },
        { text: 'Script', correct: false },
        { text: 'Java Script', correct: true },
        { text: 'None of the above.', correct: false }
       ] 
    }
]

