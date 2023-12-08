console.log("app.js started");

const minGuess = 1;
const maxGuess = 10;
// create a random number called "target"
//let target = getRandomIntInclusive(minGuess, maxGuess)
const num = parseInt(Math.random() * 10);

while(true){
    const result = guessOnce();
    alert(result)
    if(result === false) {
        break;
    }
}

function guessOnce() {
    let input = prompt(`Guess a number between ${minGuess} and ${maxGuess}.`)
    console.log(`The user guessed ${input}`)
// compare user to target
    let inputNum = parseInt(input);
    if(inputNum < target){
        alert("Higher")

    }else if(inputNum > target) {
        alert("Lower")
    }else {
        alert("Correct")
    }
}
// use prompt to get user input 
console.log(`The number was ${target}`)

// inform user if guess is >, < or = to target

// function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }