let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let message = '';


function startGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 21) {
        message = 'Do you wanna draw a new card?';
    } else if (sum === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = 'You are outta the game';
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = 7;
    sum += card;
    startGame()
}