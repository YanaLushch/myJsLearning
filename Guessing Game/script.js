var GuessedNumber = 21;
var someTries = Number(prompt("Guess a number!"));
if(someTries < GuessedNumber){
     alert("The number is too low")
} else if (someTries === GuessedNumber){
    alert("YESSS! YOU GUESSED THE NUMBER")
} else {
    alert("The number is tooooo high")
}   
