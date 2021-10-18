let hasBlackJack = false;
let message = '';
let isAlive = true;

let cards = [];   // array
let sum = 0;

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    if (randomNumber > 10) {
        return 10;    // queen or king
    } else if(randomNumber === 1) {
        return 11;    // ace
    } else {
        return randomNumber;    
    }
}


function startGame() {
    isAlive = true;
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    
    sum = firstCard + secondCard;
    renderGame()
}



function renderGame() {
    cardsEl.textContent = 'Cards: ';
    
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = 'Do you wanna draw a new card?';
    } else if (sum === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true;
    } else {
        message = 'You are outta the game';
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame()
}