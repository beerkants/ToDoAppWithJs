let taskList = [
    // {"id": 1 , "taskName" : "gorev1"},
    // {"id": 2 , "taskName" : "gorev2"}
]
let ul = document.querySelector("#taskList");
let editId;
let isEditId = false;
let taskInput = document.querySelector("#taskInput");
displayTask();



document.querySelector("#createTaskButton").addEventListener("click", newTask);





function openMenu(id) {
    document.getElementById(id).nextElementSibling.classList.toggle("show");
}
function newTask(event) {

    
    if ( (taskInput.value == "") ) {
        alert("You must enter a task.");
                
    }else {
        if ( isEditId == true ) {
            for ( let task of taskList ) {
                if ( editId == task.id ) {
                    task.taskName = taskInput.value;
                }
            }
        }else {
            taskList.push({"id" : taskList.length + 1 , "taskName" : taskInput.value});
            taskInput.value = "";
            displayTask();
        }
    }
    event.preventDefault();
}

function displayTask() {

    ul.innerHTML = ""; 

    for ( let task of taskList ) {
        let li = `
            <li class="task-item">
                <label class="task-item-content">
                    <div class="check-container">
                        <input type="checkbox" id="isDone">
                        <span></span>
                        <i></i>
                    </div>
                    <div class="task-content">
                        <h4 class="taskName">${task.taskName}</h4>
                    </div>
                </label>
                <div class="task-action-container">
                    <div class="action-button">
                        <i class="fa-solid fa-ellipsis ellipsis" id="${task.id}" onclick="openMenu(${task.id})"></i>
                        <div class="action-list ${task.taskName}">
                            <button type="button" class=" deleteBtn action-item" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash-can"></i> Delete</button>
                            <button class="action-item editBtn" type="button" onclick='editTask(${task.id},"${task.taskName}")'><i class="fa-solid fa-pencil"></i> Edit</button>
                        </div>
                    </div>
                </div>
            </li>
        `;
        ul.insertAdjacentHTML("beforeend",li);
    }
}

function deleteTask (id) {
    let deleteId;
    // for ( let i in taskList ) {
    //     if ( taskList[i].id == id ) {
    //         deleteId = i;
    //     }
    // }
    // deleteId = taskList.findIndex(function(task) {
    //     return task.id == id;
    // });
    deleteId = taskList.findIndex(task => task.id == id);
    taskList.splice(deleteId,1);
    displayTask();
}
function editTask(id,name) {
    editId = id;
    isEditId = true;
    taskInput.value = name;
    taskInput.focus();
    document.querySelector(id).parrentElement().classList.remove("show");
}




