//create a random number called "target"

const target = parseInt(Math.random() * 10);

function guessUntilCorrect() {
  let input = prompt(`Guess a number between 1 and 10.`)
  console.log(`The user guessed ${input}`)
// compare user to target
  let inputNum = parseInt(input);
  if(inputNum < target){
    alert("Higher. Try again!")
  }else if(inputNum > target) {
      alert("Lower. Try again!")
  }else {
      alert("Correct");
  }
}
// use prompt to get user input 
console.log(`The number was ${target}`)
while(true){
  if(guessUntilCorrect()) {
    break;
  }
  else{
    continue;
  }
}