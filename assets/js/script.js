
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
var timerElement = document.querySelector("#timer");

//Global variable
var x = 0;
var timerCount = 0;

var scoreInitals = JSON.parse(localStorage.getItem("initals")) || [];

//An array of every question with their answers
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
    question: "How do you get the length of this array? intArray = []",
    answers: ["Array.length", "intArray[] length = x;", "length = x;", "intArray.length"],
    correct: "intArray.length"
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    answers: ["Math.ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correct: "Math.max(2,4)"
  },
]



//This shows the scores page and hides everything else
function theScores() {

    frontPage.style.display = "none";
    highscorePage.style.display = "block";
    questionsPage.style.display = "none";
    choiceResult.style.display = "none";
    scorePage.style.display = "none";

    clearInterval(timer);
}

//This shows the front page and hides everything else
function theFront() {
    
    highscorePage.style.display = "none";
    frontPage.style.display = "block";
    choiceResult.style.display = "none";
    scorePage.style.display = "none";
}

//This shows the questions page and hides everything else
function theQuestions() {

    frontPage.style.display = "none";
    questionsPage.style.display = "block";
    

    //This replaces all the header and list with the question depending on the index given
    questionPlace.innerText = questions[x].question;

    one.innerText = questions[x].answers[0];
    two.innerText = questions[x].answers[1];
    three.innerText = questions[x].answers[2];
    four.innerText = questions[x].answers[3];

}

//This collects the highscores and initals then puts them into an object
function saveHighscore() {
  var inputInitals = document.querySelector("#userInput").value;
  console.log(inputInitals);

  var userObject = {
    initals: inputInitals,
    score: timerCount
  }
  scoreInitals.push(userObject);
  localStorage.setItem("score", JSON.stringify(scoreInitals));

  theScores();

}

//This gets user input and compare it to the correct answer
function getChoice(event) {

  if(event.target.innerHTML == questions[x].correct) {

    showCorrect();
  }
  else {

    showWrong();
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
  //This penalizes the user by 10 points/seconds for a wrong answer
  timerCount = timerCount - 10;

  if (timerCount <= 0) {

    timerCount = 1;
    
  }

  theQuestions();
}

//This is supposed to start the timer
function startTimer() {
  
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0 || x > questions.length - 1) {

      clearInterval(timer);

      endScreen();
    }
  

  }, 1000);
}

//This starts the quiz everytime the start button is pressed
function startBtn() {

  timerCount = 100;
  startTimer();
  x = 0;
  theQuestions();
}

//This is the end screen that hides everything else
function endScreen() {
  frontPage.style.display = "none";
  highscorePage.style.display = "none";
  questionsPage.style.display = "none";
  choiceResult.style.display = "none";
  scorePage.style.display = "block";
}


