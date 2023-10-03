"use strict";
const $ = (selector) => document.querySelector(selector);

let tasks = [];

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
        tasks.sort();
        list = tasks.join("\n");
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
        tasks = tasks.concat(task.value.split(","));
        
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

window.addEventListener('load', () => {
    $("#add_task").addEventListener('click', addToTaskList);
    $("#clear_tasks").addEventListener('click', clearTaskList);
    displayTaskList();
});