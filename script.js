function handleAdd(){
	var input = document.getElementById("newTodoInput").value;
	var defVal = document.getElementById("newTodoInput").defaultValue;
	if(input !== defVal){
		const newLi = document.createElement('li');
		newLi.textContent = input;
		const ol = document.querySelector("ol");
		ol.appendChild(newLi);
		document.getElementById("newTodoInput").value = ""
	}
}

