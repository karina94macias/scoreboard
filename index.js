let homeCount = 0;
let homeScore = document.getElementById('home-score');

function plusOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function plusTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function plusThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

let guestCount = 0;
let guestScore = document.getElementById('guest-score');

function plusOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function plusTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function plusThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function newGame() {
    homeCount = 0;
    homeScore.textContent = homeCount;
    guestCount = 0;
    guestScore.textContent = guestCount;
}