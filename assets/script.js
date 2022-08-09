// listing core elements
let highScoreEl = document.getElementById("high_score"); 
let beginBtnEl = document.getElementById("begin-btn-1");


let startBoxEl = document.getElementById("start_quiz");
let rulesBoxEl = document.getElementById("rules");
//let begin_quiz_btn = rules_box.getElementById("start_quiz");
//let quit_quiz_btn = rules_box.getElementById("quit_quiz"); 

//add countdown variable

/*var quizQuestionEl = document.getElementById("q&a-event");
var nextQuestionBtnEl = document.getElementById("next_question"); */

//BEGIN FUNCTIONS
function startQuiz () {
    rulesBoxEl.className += " rules_box_turnOn";
    startBoxEl.className += " start_box_dissappear";
    highScoreEl.className += " high_score_dissappear";
}


// Start Button Click
beginBtnEl.onclick = startQuiz;