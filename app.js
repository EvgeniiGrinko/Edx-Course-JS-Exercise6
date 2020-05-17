var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("tasklist");
var clearButton = document.getElementById("clear");
var taskListDone = document.getElementById("taskListDone");

addButton.addEventListener("click", function(){
    var task = taskInput.value;
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        
        newItem.appendChild(taskText);

        taskInput.value = "";
        var removeButton = document.createElement("INPUT");
        removeButton.setAttribute("type", "checkbox");
        newItem.appendChild(removeButton);

        taskList.appendChild(newItem);
        removeButton.addEventListener("click", removeTask);
        
        
 
    }
    else{
       var errorMessage =  document.createElement("p");
       errorMessage.innerHTML = "Error. Your enter is empty.";
       document.body.appendChild(errorMessage);
    }
});
clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";
});
function removeTask(e){
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
    taskListDone.appendChild(taskItem);
}
  
