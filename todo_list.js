const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task can't be empty!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-light deleteButton";
    deleteButton.textContent = "\u00D7";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
});