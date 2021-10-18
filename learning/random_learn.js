let randomNumber = Math.floor(Math.random() * 6);

console.log(randomNumber);

// if we do not use floor then the random number would be 0.039398484


function rollDice() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

console.log(rollDice());