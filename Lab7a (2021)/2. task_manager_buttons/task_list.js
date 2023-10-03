"use strict";
const $ = (selector) => document.querySelector(selector);

let tasks = [];
let sortDirection = "ASC";

const displayTaskList = () => {
    let list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        const storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }

    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
//        tasks.sort();
        if (sortDirection=="ASC"){
            localStorage.tasks = tasks.sort();
        }
        else{
            localStorage.tasks = tasks.reverse();
        }
        list = tasks.join("\n");
    }
    const session = sessionStorage.getItem("name") || "";
    if (session !=""){
        $("#name").innerHTML = session + "'s ";
    }else{
        $("#name").innerHTML = "";
    }
    // display tasks string and set focus on task text box
    $("#task_list").value = list;
    $("#task").focus();
};

const addToTaskList = () => {
    const task = $("#task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {
        // add task to array and local storage
        tasks.push(task.value);

        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
};

const clearTaskList = () => {
    tasks.length = 0;
    localStorage.tasks = "";
    $("#task_list").value = "";
    $("#task").focus();
};

const deleteTask = () => {
    let indexNo = parseInt(prompt("Enter the index number of the task you wish to delete"));
    if (indexNo > 0){
        tasks.splice(indexNo-1,1);
        localStorage.tasks = tasks.join("|");
        displayTaskList();
    }else{
        displayTaskList();
    }
}

const toggleSort = () => {
    if (sortDirection == "ASC"){
        sortDirection = "DESC";
    }
    else{
        sortDirection="ASC";
    }
    displayTaskList();
}

const setName = () => {
    let name = prompt("Enter a name");
    sessionStorage.name = name;
    displayTaskList();
}

window.addEventListener('load', () => {
    $("#add_task").addEventListener('click', addToTaskList);
    $("#clear_tasks").addEventListener('click', clearTaskList);
    $("#delete_task").addEventListener('click', deleteTask);
    $("#toggle_sort").addEventListener('click', toggleSort);
    $("#set_name").addEventListener('click', setName);
    displayTaskList();
});

