const deleteBtn = `<button class="todo-list__task--delete-btn" onclick="deleteTask(this)">Delete Task</button>`;

function addTask() {
  var task = document.getElementById("taskInput").value;

  if (task != "") {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    li.innerHTML += deleteBtn;
    taskList.appendChild(li);

    li.addEventListener("click", function () {
      markTaskAsDone(li);
    });

    document.getElementById("taskInput").value = "";
  }
}

function deleteTask(task) {
  task.parentElement.remove();
}

function markTaskAsDone(task) {
  task.classList.toggle("done");
}
