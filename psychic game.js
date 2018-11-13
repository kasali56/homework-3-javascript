// Possible computer/user choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Counters for wins, losses, remaining guesses, letters already guessed
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var computerChoice;
var userGuess = [];
$(document).keydown(function(e) {
    // Key's value is held in e.keyCode; 
});



function resetGame() {
    guessesRemaining = 10;
    lettersGuessed = [];
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;  //reset display on screen
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;    //reset display on screen
    psychicGame();
}

psychicGame();

function psychicGame() {

    // computer picks a random letter
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]; {
    console.log(computerChoice);

   
    // user guesses letters until they pick the computer's choice or run out of chances

        document.onkeyup = function(event) { 
            var userGuess = event.key.toLowerCase();
            lettersGuessed.push(userGuess);
            document.getElementById ("lettersGuessed").textContent = lettersGuessed;
            

                if ((userGuess === computerChoice[0]) && (guessesRemaining > 0)) {
                    wins++;
                    document.getElementById ("wins").textContent = wins;
                    resetGame();
                } else if ((userGuess !== computerChoice) && (guessesRemaining > 0)) {
                    guessesRemaining = guessesRemaining-1;
                    document.getElementById ("guessesRemaining").textContent = guessesRemaining; 
                } else if ((userGuess !== computerChoice) && (guessesRemaining < 1)) {
                    losses++;
                    document.getElementById ("losses").textContent = losses;
                    resetGame();
                } else if (userGuess.indexOf(lettersGuessed)) {
                    alert("You already guessed that!");
                } 
            }
        }
    }



    // document.getElementById ("lettersGuessed").textContent = lettersGuessed;
    
    
    // (function(e) {
    //     else if($.inArray(e.keyCode, lettersGuessed) !== -1){
    //          e.stopPropagation();
    //        }
    //        lettersGuessed.push(e.keyCode);
    //        lettersGuessed = $.unique(lettersGuessed);
    //      }

    // // 