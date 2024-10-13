document.addEventListener("DOMContentLoaded", DOMContent);

let tasks = []

function DOMContent() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const rawTask = localStorage.getItem("tasks") || '[]'
   tasks = JSON.parse(rawTask);

  tasks.forEach((element,index) => {
    const li = document.createElement("li");
    li.textContent = element;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", (event) => {
      //remove logic
      taskList.removeChild(li);
      tasks = tasks.filter((v,i)=>i!=index);
      const rawTask = JSON.stringify(tasks);
      localStorage.setItem("tasks",rawTask)
    });
  
    li.appendChild(removeButton);
    taskList.appendChild(li);
  });

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
  removeButton.classList.add("remove-btn");
  tasks.push(taskText);
  const rawTask = JSON.stringify(tasks);
  localStorage.setItem("tasks",rawTask)
  const index = tasks.length - 1;
  removeButton.addEventListener("click", (event) => {
    //remove logic
    taskList.removeChild(li);
    tasks = tasks.filter((v,i)=>i!=index);
    const rawTask = JSON.stringify(tasks);
    localStorage.setItem("tasks",rawTask)
  });

  li.appendChild(removeButton);
  taskList.appendChild(li);
}
