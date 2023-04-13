
var highscorePage = document.getElementById("highscorePage");
var frontPage = document.getElementById("frontPage");

function theScores() {

    frontPage.style.display = "none";
    highscorePage.style.display = "block";
}

function theFront() {
    
    highscorePage.style.display = "none";
    frontPage.style.display = "block";
}