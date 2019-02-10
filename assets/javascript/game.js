
// variables for each item changed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = [];

//letters for computer to pick from
var alphabet = ["a", "b" ,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

//start game
function computerChoice() {
    
    //computer chooses word
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    //reset at start of new game
    document.getElementById("guesses-left-text").innerHTML = guessesLeft;
    document.getElementById("your-guess-text").innerHTML = yourGuess.join(", ");

    console.log(computerPick);
}

computerChoice();





//reset game to start values
function resetGame() {

    yourGuess = [];
    guessesLeft = 9;

    computerChoice();
}


//function which key is pressed.
document.onkeyup = function(event) {

    //user guessed key
    var userGuess = event.key;
    
    // disables duplicated letter    
    if (yourGuess.indexOf(userGuess) > -1) {
        return false;
    }

    //user guess equals chosen letter
    if (userGuess === computerPick) {
        wins++;
        document.getElementById("wins-text").innerHTML = wins;
        resetGame();
    } else {
        guessesLeft--;
        yourGuess.push(userGuess);
        document.getElementById("guesses-left-text").innerHTML = guessesLeft;
        document.getElementById("your-guess-text").innerHTML = yourGuess.join(", ");

        //final condition to lose
        if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses-text").innerHTML = losses;
  
            resetGame();
        }
    }
    

};