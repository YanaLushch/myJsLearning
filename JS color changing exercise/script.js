//1st approach - only changes to purple
// var button = document.querySelector("button");
// var body = document.querySelector("body")
// button.addEventListener("click", function() {
//    body.style.background = "purple" 
// });

//second approach - changes to  purple and back - with toggle 
// var button = document.querySelector('button');
// var body = document.querySelector("body")
// button.addEventListener('click', function(){
//     body.classList.toggle('button-purple')
// });

///third approach changes to purple and back with if statement
var button = document.querySelector('button');
var body = document.querySelector("body");
var isPurple = false;
button.addEventListener('click', function(){
    if (isPurple) {
        body.style.background = 'white';
    } else{
        body.style.background = 'purple';
    };
    isPurple = !isPurple;
});