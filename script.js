document.addEventListener("DOMContentLoaded", DOMContent);

function DOMContent() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      addTask();
    }
  });
}

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("task-list");

  if (taskText == "") {
    alert("Please input a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn";
  removeButton.addEventListener("click", (event) => {
    //remove logic
    taskList.removeChild(li);
  });

  li.appendChild(removeButton);
  taskList.appendChild(li);
}
