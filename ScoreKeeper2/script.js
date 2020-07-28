var player1 = document.querySelector('.p1');
var p1Display = document.querySelector('.p1Display');
var p1Score = 0;
var player2 = document.querySelector('.p2');
var p2Display = document.querySelector('.p2Display');
var p2Score = 0;
var ScoreLimit = 5;
var isGameOver = false;
var resetButton = document.querySelector('.resetButton')
var input = document.querySelector('input');
var playingTill = document.querySelector('.playingTill')
player1.addEventListener('click', function(){
    if (!isGameOver) {
        p1Score++; 
        if (p1Score === ScoreLimit) {
            isGameOver = true; 
            p1Display.classList.add('winningClass');
        } 
        p1Display.textContent = p1Score; 
    }   
});
player2.addEventListener('click', function(){
    if (!isGameOver) {
        p2Score++;
        if (p2Score === ScoreLimit) {
            isGameOver = true;
            p2Display.classList.add('winningClass');
        }
        p2Display.textContent = p2Score;  
    }
});
resetButton.addEventListener("click", function(){
   reset();
});
input.addEventListener('change', function(){
    playingTill.textContent = Number(this.value);
    ScoreLimit = Number(this.value);
    reset();
});
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winningClass');
    p2Display.classList.remove('winningClass');
    isGameOver = false; 
};


