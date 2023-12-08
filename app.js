const randomNumber = Math.floor(Math.random() * 10) + 1;

function parseInput(string){
  if(string === ''){
    return NaN;
  } else if(string === null){
    return null;
  } else {
    return Number(string);
  }
}

function promptForGuess(message){
  let guess = prompt(message);
  let guessNum = parseInput(guess);
  while( !Number.isInteger(guessNum) || guessNum < 1 || guessNum > 10){
    guessNum = parseInput(prompt("Please enter a valid number"));
  }
  return guessNum;
}

function guessingGame(){
  const numTarget = Math.floor(Math.random() * 10) + 1;
  let name = prompt("What is your name?");
  let guess = promptForGuess("Guess a number between 1 and 10");

  console.log(`User guessed ${guess}`);
  console.log("The number was", numTarget);
  let numGuesses = [guess];
  while(guess !== numTarget){
    if(guess < numTarget){
      guess = promptForGuess(`Guess higher, ${name}`);
    } else {
      guess = promptForGuess(`Guess lower ${name}`);
    }
   numGuesses.push(guess);
  }
  alert(`Congratulations ${name}! It took you ${numGuesses.length} guesses. You guessed ${numGuesses} .`);
  let playAgain = tryAgain("Would you like to play again? (y/n)");
}

function tryAgain(play){
  let tryAgain = prompt("Would you like to play again? (y/n)");
  if(tryAgain === "y" || tryAgain === "yes"){
    guessingGame();
  } else {
    alert("Thanks for playing!");
  }
}

guessingGame();
