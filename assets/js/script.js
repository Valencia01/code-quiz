
//These are all the pages so I can toggle them on or not 
var highscorePage = document.getElementById("highscorePage");
var frontPage = document.getElementById("frontPage");
var questionsPage = document.getElementById("questionsPage");
var scorePage = document.getElementById("scorePage");

//These are the question and answer placeholders to be able to fill them in
var questionPlace = document.getElementById("questionPlace");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

//These are both the timer and choice by the user 
var choiceResult = document.getElementById("choiceResult");
var timerElement = document.querySelector("timer");

//Global variable
var x = 0;

//This shows the scores page and hides everything else
function theScores() {

    frontPage.style.display = "none";
    highscorePage.style.display = "block";
    questionsPage.style.display = "none";
    choiceResult.style.display = "none";
}

//This shows the front page and hides everything else
function theFront() {
    
    highscorePage.style.display = "none";
    frontPage.style.display = "block";
    choiceResult.style.display = "none";
}

//This shows the questions page and hides everything else
function theQuestions() {
    frontPage.style.display = "none";
    questionsPage.style.display = "block";

    timerCount = 75;

    //This array holds the questions and answers along with the correct answer
    var questions = [
        {
          question: "Commonly used datatypes do NOT include:",
          answers: ["strings", "booleans", "alerts", "numbers"],
          correct: "alerts"
        },
        {
          question: "A sequence of steps that must be taken to perform a task is called a(n):",
          answers: ["function", "machine learning", "classes", "algorithm"],
          correct: "algorithm"
        },
        {
          question: "Which of the following variable types can hold a value of either true or false?",
          answers: ["function", "boolean", "classes", "variable"],
          correct: "boolean"
        },
        {
          question: "Inside which HTML element do we put the JavaScript?",
          answers: ["<javascript>", "<js>", "<scripting>", "<script>"],
          correct: "<script>"
        },
      ]

    //This replaces all the header and list with the question depending on the index given
    questionPlace.innerText = questions[x].question;

    one.innerText = questions[x].answers[0];
    two.innerText = questions[x].answers[1];
    three.innerText = questions[x].answers[2];
    four.innerText = questions[x].answers[3];

    theQuestions.getChoice(choice) = getChoice;

    //This is supposed to get user input and compare it to the correct answer
    function getChoice(choice) {

        if(choice.innerText == questions[x].correct) {
    
          showCorrect();
        }
        else {
    
          showWrong();
        }
    
    }

}

//This is supposed to diplay that the user got the question correct and it increases the global varible by 1 to change to the next question
function showCorrect() {
  choiceResult.innerText = "Correct";
  x++;

  theQuestions();
}

//This is supposed to diplay that the user got the question wrong and it increases the global varible by 1 to change to the next question
function showWrong() {
  choiceResult.innerText = "Wrong";
  x++;

  theQuestions();
}

//This is supposed to start the timer
function startTimer() {
  
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {

      clearInterval(timer);
      endScreen();
    }
  }, 7500);
}

//This is the end screen that hides everything else
function endScreen() {
  frontPage.style.display = "none";
  highscorePage.style.display = "none";
  questionsPage.style.display = "none";
  choiceResult.style.display = "none";
  scorePage.style.display = "block";
}


