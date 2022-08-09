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
//let questionEl = document.getElementById('question');
//let answerButtonsEl = document.getElementById('answer-btn');
let nextQuestionBtnEl = document.getElementById("next_question");

// adding variable text for countdowm
let messageEl = ('And Here We Go');
let countdownText = messageEl.split(' ');

//adding timer variable
let timeCounter = document.getElementById("seconds");

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
            startTimer(60),
            beginQuestions()
        } else {
            countdownEl.textContent = countdownText[wordCount];
            wordCount++;
        }
    }, 1000);
}

function beginQuestions() {
    console.log('Started')    
    quizQuestBoxEl.className += " start_question_turnOn";
    showQuestions(0);    
}

let que_count = 0;
let counter;
//click next to next questions
nextQuestionBtnEl.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
    }
    else {
        console.log("Questions completed");
    }
}


function showQuestions(index) {
    let que_text = document.getElementById("question");
    let answer_list = document.getElementById("answer-btn");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let answer_tag = '<button class="answer_details answer"><span>' + questions[index].options[0] + '</span></button>'
        + '<button class="answer_details answer"><span>' + questions[index].options[1] + '</span></button>'
        + '<button class="answer_details answer"><span>' + questions[index].options[2] + '</span></button>'
        + '<button class="answer_details answer"><span>' + questions[index].options[3] + '</span></button>'
    que_text.innerHTML = que_tag;
    answer_list.innerHTML = answer_tag;
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCounter.textContent = time;
        time--;
    }
}


function endQuiz() {
    startBoxEl.className += " start_box_turnOn";
    highScoreEl.className += " high_score_turnOn";
    rulesBoxEl.className += " rules_box_turnOff";
    location.reload()
}


function selectAnswer() {

}


// Start Button Clicks
beginBtnEl.onclick = seeRules;

beginQuizBtnEl.onclick = countdownMessage;

quitQuizBtnEl.onclick = endQuiz;




//adding questions
let questions = [
    {
        question: 'What does 1 stand for?',
        answer: "Java Script",
        options: [
            "Java",
            "Script",
            "Java Script",
            "None of the above.",
        ]
    },
    {
        question: 'What does 2 stand for?',
        answer: "Java Script2",
        options: [
            "Java2",
            "Script2",
            "Java Script2",
            "None of the above.2",
        ]
    },
    {
        question: 'What does 3 stand for?',
        answer: "Java Script3",
        options: [
            "Java3",
            "Script3",
            "Java Script3",
            "None of the above.3",
        ]
    },
]

