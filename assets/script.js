// listing core elements
let highScoreEl = document.getElementById("high_score"); 
let beginBtnEl = document.getElementById("begin-btn-1");


let startBoxEl = document.getElementById("start_quiz");
let rulesBoxEl = document.getElementById("rules");
let beginQuizBtnEl = document.getElementById("start_quiz");
let quitQuizBtnEl = document.getElementById("quit_quiz"); 
//add countdown variable
let quizQuestBoxEl = document.getElementById("q&a");
//var nextQuestionBtnEl = document.getElementById("next_question"); */

//BEGIN FUNCTIONS
function seeRules() {
    rulesBoxEl.className += " rules_box_turnOn";
    startBoxEl.className += " start_box_turnOff";
    highScoreEl.className += " high_score_turnOff";    
}

function beginQuestions() {    
    rulesBoxEl.className += " rules_box_turnOff"; 
    quizQuestBoxEl.className += " start_question_turnOn";
}

function endQuiz() {
    startBoxEl.className += " start_box_turnOn";
    highScoreEl.className += " high_score_turnOn";
    rulesBoxEl.className += " rules_box_turnOff"; 
    location.reload()  
}

  
// Start Button Clicks
beginBtnEl.onclick = seeRules; 

beginQuizBtnEl.onclick = beginQuestions;

quitQuizBtnEl.onclick = endQuiz;



