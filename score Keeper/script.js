var p1Button = document.querySelector('.p1');
var p1Score = 0;
var p1Display = document.querySelector('.p1Display');
var p2Button = document.querySelector('.p2');
var p2Score = 0;
var p2Display = document.querySelector('.p2Display');
var playTo = 5;
var gameOver = false;
var resetButton = document.querySelector('.reset');
var NumInput = document.querySelector('input');
var playTill= document.querySelector(".playTill")

p1Button.addEventListener('click', function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === playTo) {
         gameOver = true;  
         p1Display.classList.add('winningColor') 
        }
        p1Display.textContent = p1Score;   
    } 
});
p2Button.addEventListener('click', function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === playTo) {
         gameOver = true; 
         p2Display.classList.add('winningColor')   
        }
        p2Display.textContent = p2Score;   
    } 
});
resetButton.addEventListener("click", function(){
    reset()
});
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p1Display.classList.remove('winningColor');
    p2Display.textContent = 0;
    p2Display.classList.remove('winningColor');
    gameOver = false;
};

NumInput.addEventListener('change', function(){
    playTill.textContent = this.value;
    playTo = Number(this.value);
    reset();
});