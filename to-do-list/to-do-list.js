function addList() {
    let newTask = document.getElementById("new-task").value;
    if (newTask === "") {
        alert("Please enter a task.");
        return;
    }
    console.log("Adding task:", newTask);

    let list = document.getElementById("task-list");
    console.log("Current task list:", list.innerText);

    let listItem = document.createElement("li");
    listItem.textContent = newTask;
    list.appendChild(listItem);

    document.getElementById("new-task").value = "";
        // list.addList(newTask);


}