let homeButtonPlusOne = document.getElementById("home-plus-one-btn")
let homeButtonPlusTwo = document.getElementById("home-plus-two-btn")
let homeButtonPlusThree = document.getElementById("home-plus-three-btn")
let homeButtonNegativeOne = document.getElementById("home-negative-one-btn")
let homeButtonNegativeTwo = document.getElementById("home-negative-two-btn")
let homeButtonNegativeThree = document.getElementById("home-negative-three-btn")
let homeScore = document.getElementById("home-score")
let currentHomeScore = 0


function increaseHomeScoreOne(){
    currentHomeScore += +1
    homeScore.textContent = currentHomeScore
    console.log("Clicked home 1 " + "Score = " + currentHomeScore)
}

function increaseHomeScoreTwo(){
    currentHomeScore += +2
    homeScore.textContent = currentHomeScore
    console.log("Clicked home 2 " + "Score = " + currentHomeScore)
}

function increaseHomeScoreThree(){
    currentHomeScore += +3
    homeScore.textContent = currentHomeScore
    console.log("Clicked home 3 " + "Score = " + currentHomeScore)
}


function decreaseHomeScoreOne(){
    currentHomeScore += -1
    homeScore.textContent = currentHomeScore
    console.log("Clicked home -1 " + "Score = " + currentHomeScore)
}

function decreaseHomeScoreTwo(){
    currentHomeScore += -2
    homeScore.textContent = currentHomeScore
    console.log("Clicked home -2 " + "Score = " + currentHomeScore)
}

function decreaseHomeScoreThree(){
    currentHomeScore += -3
    homeScore.textContent = currentHomeScore
    console.log("Clicked home -3 " + "Score = " + currentHomeScore)
}



let awayButtonPlusOne = document.getElementById("home-plus-one-btn")
let awayButtonPlusTwo = document.getElementById("home-plus-two-btn")
let awayButtonPlusThree = document.getElementById("home-plus-three-btn")


let awayButtonNegativeOne = document.getElementById("away-negative-one-btn")
let awayButtonNegativeTwo = document.getElementById("away-negative-two-btn")
let awayButtonNegativeThree = document.getElementById("away-negative-three-btn")


let awayScore = document.getElementById("away-score")
let currentAwayScore = 0


function increaseAwayScoreOne(){
    currentAwayScore += +1
    awayScore.textContent = currentAwayScore
    console.log("Clicked away 1 " + "Score = " + currentAwayScore)
}

function increaseAwayScoreTwo(){
    currentAwayScore += +2
    awayScore.textContent = currentAwayScore
    console.log("Clicked away 2 " + "Score = " + currentAwayScore)
}

function increaseAwayScoreThree(){
    currentAwayScore += +3
    awayScore.textContent = currentAwayScore
    console.log("Clicked away 3 " + "Score = " + currentAwayScore)
}



function decreaseAwayScoreOne(){
    currentAwayScore += -1
    awayScore.textContent = currentAwayScore
    console.log("Clicked away -1 " + "Score = " + currentAwayScore)
}

function decreaseAwayScoreTwo(){
    currentAwayScore += -2
    awayScore.textContent = currentAwayScore
    console.log("Clicked away -2 " + "Score = " + currentAwayScore)
}

function decreaseAwayScoreThree(){
    currentAwayScore += -3
    awayScore.textContent = currentAwayScore
    console.log("Clicked away -3 " + "Score = " + currentAwayScore)
}






function resetScore(){
    currentAwayScore = 0
    currentHomeScore = 0
    awayScore.textContent = currentAwayScore
    homeScore.textContent = currentHomeScore
    console.log("Clicked Reset ")
}