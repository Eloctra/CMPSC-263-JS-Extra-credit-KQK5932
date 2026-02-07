const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("list");

function addTask() {
    const task = taskInput.value.trim();
    
    if(task==""){
        alert("Please type some task");
        return;
    }

    const li=document.createElement("li");
    li.classList.add("task-item");

    const checkbox=document.createElement('input');
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox");

    const text=document.createElement("span");
    text.classList.add("task-text");
    text.textContent=task;

    li.append(checkbox);
    li.append(text);

    taskList.append(li);

    taskInput.value="";
    taskInput.focus();

}
addTaskBtn.addEventListener("click", addTask);
