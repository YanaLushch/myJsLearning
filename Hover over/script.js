var list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    
    
}


list.addEventListener('mouseover', function () {
    this.style.color = 'green';
})
list.addEventListener('mouseout', function(){
    this.style.color = 'black';
})