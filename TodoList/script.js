var todos = [];

var input = prompt("What do you want to do with the todo list?");
while (input !== "quit") {
    if ( input === "new") {
        // it records the new todo that will be inputed by user
        var newTodo = prompt("Enter a new Todo");
        // we push it in out todo list
        todos.push(newTodo);
    } else if (input === "list"){
        console.log(todos);
    } 
    /// aks the user for a new input
    var input = prompt("What do you want to do with the todo list?");  
}
console.log("OK, you quit this app!!!! BYE!")
