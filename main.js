const deleteBtn = `<button class="deleteTaskBtn" onclick="deleteTask(this)">Delete Task</button>`;

function addTask() {
  var task = document.getElementById("taskInput").value;
  
  if (task != "") {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    li.innerHTML += deleteBtn;
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
  }
}

function deleteTask(task) {
  task.parentElement.remove();
}
