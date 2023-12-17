let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0

function sum1Home() {
    countHome += 1
    homeScoreEl.textContent = countHome
}

function sum2Home() {
    countHome += 2
    homeScoreEl.textContent = countHome
}

function sum3Home() {
    countHome += 3
    homeScoreEl.textContent = countHome
}

function sum1Guest() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function sum2Guest() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
}

function sum3Guest() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
}

function newGame() {
    countHome = 0
    countGuest = 0
    
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}