let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById('message-el');
let message = '';


function startGame() {
    if (sum <= 21) {
        console.log('Do you wanna draw a new card');
    } else if (sum === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = 'You are outta the game';
        isAlive = false;
    }
    messageEl.textContent = message
}

console.log(hasBlackJack);
console.log(isAlive);  