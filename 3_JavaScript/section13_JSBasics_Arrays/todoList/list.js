var input;
var todo = [];

window.setTimeout( function(){
while (input !== "quit"){
	input = prompt("What would you like to do?");
	
	if (input === "new"){
		addTodos()

}
	else if (input === "list"){
		listTodos()
	}
	else if (input === "delete"){
		// delete todo[itemDel];
		delTodos()
	}

}},500)

window.setTimeout( function() {
	console.log("okay u quit ");},501)



function listTodos(){
		console.log("**********");
		todo.forEach(function(a,i){
			console.log(i+": "+a)
		})
		console.log("**********");
}

function addTodos(){
		var addToDo = prompt("Enter a new todo");
		todo.push(addToDo);
		console.log(addToDo + " added to the list");
}

function delTodos(){
		var itemDel = prompt("what to delete");
		todo.splice(itemDel,1);
		console.log("Deleted Todo");
}
