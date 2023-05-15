function addTask() {
    var task = document.getElementById("taskInput").value;
    var taskList = document.getElementById("taskList");
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
}