

// ***** BEGIN VARIABLES *****

// listing core elements
let highScoreEl = document.getElementById("high_score");
let beginBtnEl = document.getElementById("begin-btn-1");


let startBoxEl = document.getElementById("start_quiz");
let rulesBoxEl = document.getElementById("rules");
let beginQuizBtnEl = document.getElementById("start_questions");
let quitQuizBtnEl = document.getElementById("quit_quiz");

let countdownEl = document.getElementById("countdown");
//let messageEl = document.getElementById("countdown_text");
let quizQuestBoxEl = document.getElementById("q&a");

let nextQuestionBtnEl = document.getElementById("next_question");
let endQuizEl = document.getElementById('end')

// adding variable text for countdowm
messageEl = ("And Here We Go!")
let countdownText = messageEl.split(' ');

//adding timer variable
let timeCounter = document.getElementById("seconds");

let keepScore = document.getElementById("calc-score");
//populate final score
let showFinalScore = document.getElementById("finalScore");

//BEGIN FUNCTIONS
function seeRules() {
    rulesBoxEl.className += " rules_box_turnOn";
    startBoxEl.className += " start_box_turnOff";
    highScoreEl.className += " high_score_turnOff";
}


// *****  BEGIN FUNCTIONS *****

//countdown text function
function countdownMessage() {
    rulesBoxEl.className += " rules_box_turnOff";
    let wordCount = 0;
    let msgInterval = setInterval(function () {
        if (countdownText[wordCount] === undefined) {
            startTimer(),
            beginQuestions()
            clearInterval(msgInterval)
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

let que_count = 0;
//click next to next questions
nextQuestionBtnEl.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
    } else {
        que_count++;
    }
}


let time = 60
function startTimer() {    
    let counter = setInterval(timer, 1000);
    function timer() {
        console.log(que_count)
        time--;
        timeCounter.textContent = time;
        if(time === 0 || que_count > questions.length - 1) {
            console.log('quiz is over')
            endQuiz()
            clearInterval(counter)
        }
    }
}

let score = 0

function selectAnswer(event) {
    let answer = event.target /*.textContent; */
    console.log('clicked answer');
    console.log(event.target);
        if (answer === questions.answer) {
            console.log("correct answer")
            score += 5;
            console.log(score)
            keepScore.textContent = score;
        }
        else {
        console.log("wrong answer")        
        time -= 5;
        console.log(time)
        }
}

function endQuiz() {
    quizQuestBoxEl.className += " start_question_turnOff";
    endQuizEl.className += 'end-on'
    highScoreEl.className += " high_score_turnOn"
    showFinalScore.textContent = score;  


    let btn = document.getElementById('end-quiz-btn')
    btn.addEventListener('click', function() {
        let username = document.getElementById('username').value
        username.value = '';

        let userObj = {
            user: username,
            userHighscore: score   //this is getting pulled to localStorage
        }

        let storage = JSON.parse(localStorage.getItem('quizHighscores'))
        if (storage === null) {
            storage =[]
        }

        storage.push(userObj)
        localStorage.setItem('quizHighscores', JSON.stringify(storage))

        window.location.href = 'highscores.html'
    })
}

function cancelQuiz() {
    startBoxEl.className += " start_box_turnOn";
    highScoreEl.className += " high_score_turnOn";
    rulesBoxEl.className += " rules_box_turnOff";
    location.reload()
}







// ***** BUTTON EVENTS *****

// Start Button Clicks
beginBtnEl.onclick = seeRules;
beginQuizBtnEl.onclick = countdownMessage;
quitQuizBtnEl.onclick = cancelQuiz;

let selAnswerBtn = document.getElementById('answer-btn');
selAnswerBtn.addEventListener('click', selectAnswer);





// **** LIST OF QUESTION 

//adding questions
let questions = [
    {
        question: 'JavaScript statements include:',
        answer: "All of the above",
        options: [
            "Values", 
            "Operators",
            "Expressions",
            "All of the above"
        ]
    },
    {
        question: 'To make a comment in the JS file, you need to add:',
        answer: "// or /*..*/",
        options: [
            "< >",
            "***",
            "// or /*..*/",
            "None of the above",
        ]
    },
    {
        question: 'The ++ operator in arithmetic operators does what?',
        answer: "Increments",
        options: [
            "Increments",
            "Subtracts",
            "Decrements",
            "Multiplies",
        ]
    },
    {
        question: 'JavaScript variables are:',
        answer: "Containers for data values",
        options: [
            "Another form of CSS", 
            "Containers for data values",
            "Used only in mathematical formulas",
            "Are not needed in defining JS Objects",
        ]
    },
    {
        question: 'Which are examples of variable data types?',
        answer: "All of the above",
        options: [
            "Number",
            "String",
            "Object",
            "All of the above",
        ]
    },
    {
        question: 'Arrays, which hold more than on value, begin and end with:',
        answer: "[ ]",
        options: [
            "[ ]",
            "{ }",
            "' '",
            "( )",
        ]
    },
    {
        question: 'A Booleans represents:',
        answer: "True or False",
        options: [
            "The events in an If/Else condition",
            "A null value",
            "True or False",
            "None of the above",
        ]
    },
    {
        question: 'One of the core elements to getting a random output is:',
        answer: "Math.random",
        options: [
            "getElementId",
            "setDate()",
            "sort.values",
            "Math.random",
        ]
    },
]