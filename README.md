# ch04_timed_quiz

![Screenshot (19)](https://user-images.githubusercontent.com/108424256/184041106-733301ea-6622-46d0-819d-dfdb3399f664.png)

TITLE: Timed JavaScript Quiz
AUTHOR: Scott Rinaberger

LINKS:
    ** HTTP URL Link: https://rinaberger.github.io/ch04_timed_quiz/
    ** GitHub URL: https://github.com/Rinaberger/ch04_timed_quiz.git
    
PURPOSE: 

This assignment was designed to apply my learnings around HTML, CSS, and javaScript to develop a timed quiz without starter code. The features
of the quiz include:

1) Create a landing page that allows user to checkout highs cores (stored in localStorage) and begin quiz.
2) The user will be provided the overall rules/instructions of the quiz prior to beginning the quiz, and the option to quit, if they don't want to take the quiz.
3) Once the user begins quiz, there is a brief countdown allowing the user time to get ready.
4) Once countdown is complete, the first multiple choice question appears and the timer and score appears in upper left corner. Timer begins counting down from the set time.
5) User can choose between one of four answers. If the answer is correct, 5 points are added to score. If answer is incorrect, 5 seconds is deducted from the timer.
6) The quiz is over at either 1) all eight questions are answered, or 2) the timer runs out. 
7) The End Quiz screen displays the final score and allows the user to input their initials or name to be added to the high scores (stored in localStorage).


USER STORY

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

ACCEPTANCE CRITERIA

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question (COMPLETED)

WHEN I answer a question
THEN I am presented with another question (COMPLETED)

WHEN I answer a question incorrectly
THEN time is subtracted from the clock (COMPLETED)

WHEN all questions are answered or the timer reaches 0
THEN the game is over (COMPLETED)

WHEN the game is over
THEN I can save my initials and score (COMPLETED)