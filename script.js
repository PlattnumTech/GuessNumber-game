/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 *  DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    this.getRandomNumber();

}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
 let numberGuess = document.getElementById("number-guess").value;
displayResult(numberGuess);
saveGuessHistory(numberGuess);
displayHistory()
}

 function displayResult (numberGuess){
   
    if(numberGuess < correctNumber){
      showNumberBelow();
    } else if(numberGuess > correctNumber){
           showNumberAbove();    
    } else {
        showYouWon();
    }
}   
 
// *CODE GOES BELOW HERE *



/**
 * // Reset correctNumber
 * // Reset result display - displayResult 
 * // Reset guesses array - guesses
 * // Reset guessHistory Display - saveGuessHistory
 */
function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = '';
  guesses = [];
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

//Function that generates a random number for cpu to pick
function getRandomNumber(){
  let randomNumber = Math.floor(Math.random()* 100);
  return randomNumber;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
 guesses.push(guess);

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}You guessed
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";

  /*for(guesses = 0; index < guesses.length; length++){
      console.log(guesses[index])
  }*/
  while(index >= 0){
      list += "<li class='list-group-item'>" +
      'You guessed ' + guesses[index] + "</li>";
        index-=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!" 
 const dialog = getDialog('won', text);//Passes Won in getDialog
  document.getElementById("result").innerHTML = dialog;
  displayResult();
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  const dialog = getDialog('warning', text);//Passes Warning in getDialog

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  const dialog = getDialog('warning', text); //Passes Warning in getDialog

  document.getElementById("result").innerHTML = dialog;
}
